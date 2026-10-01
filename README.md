# RUE DE MIRÓ — сайт бренда

Статический сайт бренда RUE DE MIRÓ (scented body oil). Сборка не нужна: страницы выгружены из Claude Design и работают как есть в любом веб-сервере.

- Боевой адрес: https://ruedemiro.com (хостинг RU-CENTER / nic.ru)
- Временная копия: https://almiroshin.github.io/ruedemiro-site/ (GitHub Pages, выключается после переезда на хостинг)

## Структура

| Файл / папка | Что это |
|---|---|
| `index.html` | Только перенаправляет на `Главная.dc.html` (meta refresh + `location.replace`), чтобы корень домена открывал главную |
| `Главная.dc.html` | Главная страница |
| `Assortment.dc.html` | Ассортимент |
| `Product.dc.html` | Карточка продукта, продукт выбирается параметром: `Product.dc.html?id=core` |
| `Ingredients.dc.html`, `Where to Buy.dc.html`, `About.dc.html`, `Press.dc.html`, `Collaboration.dc.html` | Остальные разделы |
| `rdm-data.js` | Данные продуктов (`window.RDM_PRODUCTS`: id, названия, тексты, картинки) |
| `support.js` | Рантайм страниц `*.dc.html`: превращает шаблон `<x-dc>` в готовую страницу |
| `image-slot.js` | Компонент картинок |
| `_ds/` | Дизайн-система: шрифты, цветовые и типографские токены, `_ds_bundle.js` |
| `assets/` | Логотипы, фотографии, логотипы магазинов-партнёров |
| `.nojekyll` | Нужен только GitHub Pages: без него папка `_ds/` (начинается с `_`) не публикуется |
| `.github/workflows/deploy.yml` | Автодеплой на хостинг nic.ru |
| `.github/known_hosts` | Ключ SSH-сервера хостинга (проверяется при деплое) |

Имена файлов `*.dc.html` и пути внутри них не меняйте: страницы ссылаются друг на друга по этим именам.

При открытии страниц в консоли браузера бывают 404 на адреса вида `{{ cur.img }}` — это заготовки шаблона, которые браузер пытается загрузить до того, как скрипт подставит настоящие пути. На работу сайта не влияют.

## Как обновить сайт

1. Получить новую выгрузку из Claude Design (zip).
2. Распаковать её **через `ditto`**, а не `unzip` — `unzip` портит кириллическое имя `Главная.dc.html`:
   ```bash
   ditto -x -k "Complete website structure.zip" /tmp/rdm-new
   ```
3. Скопировать файлы поверх содержимого репозитория (`index.html`, `README.md`, `.github/`, `.gitignore`, `.nojekyll` из выгрузки не приходят — их не трогать).
4. Закоммитить и отправить:
   ```bash
   git add -A && git commit -m "Обновление сайта" && git push
   ```

Дальше всё делает GitHub Actions (см. ниже). Ход деплоя: вкладка **Actions** репозитория.

## Автодеплой на nic.ru

Каждый push в `main` запускает `.github/workflows/deploy.yml`:

1. **Backup** — копирует текущий сайт с сервера в `~/backups/ruedemiro-<дата>-<коммит>` (хранятся 5 последних). Если папки сайта на хостинге нет, падает с понятной ошибкой.
2. **Upload** — `rsync --delete` заливает репозиторий в папку сайта. Не заливаются и не удаляются на сервере: `.git/`, `.github/`, `.gitignore`, `.nojekyll`, `README.md`, а также `.htaccess` и `.well-known/` — они ведутся на сервере вручную.
3. **Check site** — скачивает ключевые страницы и скрипты прямо с IP хостинга (`HOSTING_IP`, через `curl --resolve`) и сверяет md5 с файлами из репозитория. Так проверка работает, даже если DNS домена смотрит в другое место. Пока на хостинге нет SSL-сертификата, проверка идёт по http.

Запустить деплой вручную без коммита: Actions → Deploy to nic.ru → Run workflow.

### Секреты репозитория (Settings → Secrets and variables → Actions)

| Секрет | Что в нём |
|---|---|
| `SSH_PRIVATE_KEY` | Приватный ключ деплоя. Публичная часть добавлена в `~/.ssh/authorized_keys` на хостинге |
| `SFTP_HOST` | SSH-адрес хостинга (`ssh.<логин>.nichost.ru`) |
| `SFTP_USER` | Логин хостинга |
| `SFTP_REMOTE_PATH` | Папка сайта относительно домашней: `ruedemiro.com/docs` |

Если ключ деплоя придётся заменить: сгенерировать новый (`ssh-keygen -t ed25519`), добавить публичную часть на сервер, приватную — в секрет `SSH_PRIVATE_KEY`, старую строку удалить из `authorized_keys`.

Сервер nic.ru поддерживает только устаревший тип ключа хоста `ssh-rsa`, поэтому в настройках SSH workflow стоит `HostKeyAlgorithms +ssh-rsa`. Хостинг блокирует IP после серии неудачных входов по SSH.

## Хостинг, домен, DNS, почта

- **Хостинг:** отдельный аккаунт RU-CENTER (не тот, где surf.consulting). Папка сайта: `~/ruedemiro.com/docs`. Веб-сервер: `91.189.114.4`.
- **Домен** `ruedemiro.com` зарегистрирован в RU-CENTER, оплачен до 19.12.2026.
- **DNS:** у аккаунта нет услуги DNS-хостинга RU-CENTER (серверы `ns3/ns4/ns8.nic.ru` без неё отдают заглушку, править записи нельзя). Поэтому DNS ведётся в **Яндекс 360** (admin.yandex.ru → Домены): серверы домена `dns1.yandex.net`, `dns2.yandex.net`.
- **Почта** salut@ruedemiro.com — Яндекс 360.

Нужные записи в зоне:

| Имя | Тип | Значение |
|---|---|---|
| `@` | A | `91.189.114.4` |
| `www` | CNAME | `ruedemiro.com.` |
| `@` | MX | `10 mx.yandex.net.` |
| `mail._domainkey` | TXT | DKIM-ключ из Яндекс 360 |
| `@` | TXT | `v=spf1 redirect=_spf.yandex.net` |

Проверить, что отвечают серверы Яндекса (а не кэш провайдера):
```bash
dig +short ruedemiro.com A @dns1.yandex.net
dig +short ruedemiro.com MX @dns1.yandex.net
```

## HTTPS (Let's Encrypt)

На хостинге установлен `~/.acme.sh` (без cron — на хостинге его нет), аккаунт Let's Encrypt зарегистрирован. Выпуск — когда домен уже указывает на `91.189.114.4`:

```bash
~/.acme.sh/acme.sh --issue -d ruedemiro.com -d www.ruedemiro.com -w ~/ruedemiro.com/docs
```

Сертификат и ключ затем загружаются вручную в панели хостинга nic.ru (ключ — в формате PKCS#8). Сертификат действует 90 дней и сам не продлевается: продлить за 2–3 недели до окончания (`--renew`) и загрузить в панель заново.

Редиректы http→https и www→без www делаются в `.htaccess` на сервере. HTTPS на nic.ru завершается на прокси, поэтому в условиях надо проверять `%{HTTP:X-Forwarded-Proto}`, а не `%{HTTPS}` (иначе бесконечный редирект).
