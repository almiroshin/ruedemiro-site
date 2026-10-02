"""Готовит облегчённые картинки для хостинга. Запускается при деплое (см. .github/workflows/deploy.yml).

Для каждой картинки PNG/JPEG в assets/ кладёт рядом WebP-версию (не шире 1600 px)
и заменяет в HTML/JS/CSS полные пути «assets/…/имя.jpg» на «assets/…/имя.webp».
Оригиналы остаются на месте: страница Press собирает пути к фото в скрипте и отдаёт
их журналистам на скачивание в исходном качестве.

Работает с копией сайта (папкой dist), исходники в репозитории не меняет.
    python scripts/optimize-images.py dist
"""
from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

MAX_WIDTH = 1600
MAX_HEIGHT = 2400
QUALITY = 80
MIN_SIZE = 30 * 1024     # мелкие картинки (иконки, логотипы) не трогаем
MIN_SAVING = 0.10        # WebP берём, только если он хотя бы на 10% легче
TEXT_FILES = ('*.html', '*.js', '*.css')


def convert(src: Path) -> Path | None:
    dst = src.with_suffix('.webp')
    with Image.open(src) as im:
        icc = im.info.get('icc_profile')
        im = ImageOps.exif_transpose(im)
        im = im.convert('RGBA' if im.mode in ('RGBA', 'LA', 'P', 'PA') else 'RGB')
        im.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.LANCZOS)
        im.save(dst, 'WEBP', quality=QUALITY, method=6, **({'icc_profile': icc} if icc else {}))
    if dst.stat().st_size > src.stat().st_size * (1 - MIN_SAVING):
        dst.unlink()
        return None
    return dst


def main(root: Path) -> None:
    replacements = {}
    before = after = 0
    for src in sorted(root.glob('assets/**/*')):
        if src.suffix.lower() not in ('.png', '.jpg', '.jpeg') or src.stat().st_size < MIN_SIZE:
            continue
        dst = convert(src)
        old_kb = src.stat().st_size // 1024
        if dst is None:
            print(f'  keep  {src.relative_to(root)} ({old_kb} KB)')
            continue
        new_kb = dst.stat().st_size // 1024
        before += old_kb
        after += new_kb
        replacements[src.relative_to(root).as_posix()] = dst.relative_to(root).as_posix()
        print(f'  webp  {src.relative_to(root)}: {old_kb} KB -> {new_kb} KB')
    print(f'Картинки: {before} KB -> {after} KB')

    for pattern in TEXT_FILES:
        for f in root.rglob(pattern):
            text = f.read_text(encoding='utf-8')
            new = text
            for old_path, new_path in replacements.items():
                new = new.replace(old_path, new_path)
            if new != text:
                f.write_text(new, encoding='utf-8')
                print(f'  пути обновлены: {f.relative_to(root)}')


if __name__ == '__main__':
    main(Path(sys.argv[1]))
