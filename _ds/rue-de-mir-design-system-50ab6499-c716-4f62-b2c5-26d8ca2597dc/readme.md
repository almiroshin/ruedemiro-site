# RUE DE MIRÓ — Design System

RUE DE MIRÓ is a Russian body-care brand: **a system of five perfumed dry body oils** that share one signature scent. Each formula targets a skin *state* rather than a skin type, and the brand frames body care as "the first layer of your style". Founder: Лена (Elena Miroshina, ИП Мирошина Е. В.). Sold via Золотое яблоко, Ozon, Яндекс Маркет and boutiques; no own checkout — product pages link out.

**Sources.** Only the public site was provided: https://ruedemiro.com (built on Tilda). Pages read: `/`, `/assort`, `/core`, `/recharge`, `/escape`, `/weightless`, `/balance`, `/about-us`, `/where-to-buy`. Not read: `/pr`, `/collab`, `/privacy`, `/offer`. Site CSS could **not** be read (cross-origin), so colours and type are inferred from the wordmark SVG, packaging and photography. Socials: https://t.me/ruedemiro, https://ru.pinterest.com/RUEDEMIRO/. Contact: salut@ruedemiro.com.

## Products
| Formula | Skin state (kicker) | Tagline | Zones | Label colour |
|---|---|---|---|---|
| CORE | Сухость и стянутость | Восстановление и комфорт | голени · руки · локти · колени | ivory `--rdm-core` |
| RECHARGE | Потеря тонуса и гладкости | Тонус и эластичность | бёдра · ягодицы · живот · грудь · руки | pink `--rdm-recharge` |
| ESCAPE | Неровная текстура | Баланс и ровная текстура | спина · плечи · руки · декольте | sand `--rdm-escape` |
| WEIGHTLESS | Тяжесть и напряжение | Расслабление и лёгкость | икры · ступни · трапеция | pale grey `--rdm-weightless` |
| BALANCE SPF 20 | Тусклый и неровный вид | Ровный тон и сатиновый финиш | руки · плечи · декольте · ноги | yellow `--rdm-balance` |

All 100 ml, РРЦ 2190 ₽. Bottle copy: "RUE DE MIRÓ / [NAME] / SCENTED BODY OIL / 100 ML · 3.38 FL.OZ".

## CONTENT FUNDAMENTALS
- **Language:** Russian first. Product names, "SCENTED BODY OIL" and ingredient hero lines ("Squalane, Almond oil & Cholesterol") stay in English; a French pun carries the brand idea: *COMME DES MIROIRES* — "словно зеркала".
- **Address:** formal **вы** ("Какое состояние кожи вы чувствуете сегодня?"). The About page switches to founder first person ("Меня зовут Лена…"). Brand speaks as "мы/нам" in explanations ("Нам было важно…").
- **Structure:** lead with the skin *state*, then the formula. "Не выбирайте аромат. Выбирайте состояние кожи." Short declaratives, then one calm explanatory sentence.
- **Casing:** section heads and kickers in ALL CAPS (КАКОЕ СОСТОЯНИЕ КОЖИ…, СУХОСТЬ И СТЯНУТОСТЬ); product names always caps (CORE); taglines in sentence case italics. Brand name written **RUE DE MIRÓ** in caps with the accent in body copy.
- **Separators:** middle dot lists — "ГОЛЕНИ · РУКИ · ЛОКТИ", "1 аромат · 5 формул", "Быстро впитывается · Не оставляет липкости". Arrow links: "Подробнее о CORE →".
- **Scent copy is poetic, fragmentary:** "Тёплый. Древесный. Близко к коже." "Не облако аромата. След." "Пахнет белой рубашкой на голой коже." "Пахнет планами на вечер."
- **Claims are hedged and sensorial**, cosmetics-compliant: "помогает", "визуально", "ощущение" — never medical promises. Recurring vocabulary: сатиновый финиш, без липкости, без жирной плёнки, ритуал, уход, состояние, стиль.
- **No emoji.** Bullets use "•" and end with ";" like a Russian list.
- Vibe: quiet, confident, fashion-adjacent, unhurried ("спокойный выбор").

## VISUAL FOUNDATIONS
- **Colour:** mostly white/off-white grounds and near-black ink, like the label paper and dropper cap. Colour arrives through the five pastel **formula label colours** and through photography. Gold-foil (`--rdm-foil`) is the only metallic accent (mirror mark on labels). Campaign sets add olive/terracotta stripes and walnut wood — use those only as photography, not UI fills.
- **Type:** the wordmark is a flared, Optima-like serif in caps. Substitutes: **Forum** (display caps), **Cormorant Garamond Italic** (taglines/scent lines), **Montserrat** light/medium (body + widely tracked caps labels, like "SCENTED BODY OIL"). All three cover Cyrillic.
- **Layout:** Tilda-style full-width bands; 50/50 image–text splits alternating sides; generous vertical padding (~96px); max content width ~1200px; centred section intros. Sticky header.
- **Backgrounds:** full-bleed photography, flat white or warm paper bands; one full ink band for a closing statement. No gradients except a subtle dark protection gradient at the bottom of hero photos for white text. No patterns or textures in UI.
- **Imagery:** editorial still life and intimate interiors — brushed steel bowls, calla lilies, pears, pearls, rumpled white linen, antique wood, marble baths. Soft daylight or warm lamplight, low saturation, slightly warm, natural grain; skin shown close and unretouched-feeling. Product always glass-clear with black dropper.
- **Corners:** square (radius 0) everywhere; pills only for tags.
- **Borders:** 1px hairlines (stone) between list rows and accordion items; 1px ink rule under product titles (site uses a row of underscores).
- **Cards:** no shadow, no border — image block (4:5) + text stacked below on the page ground.
- **Shadows:** none in UI. `--shadow-lift` exists only for cut-out packshots.
- **Transparency/blur:** none, apart from the hero protection gradient.
- **Hover:** links darken to graphite and gain/keep an underline; primary buttons ink → graphite; outline buttons fill ink; images scale to 1.03 over 400ms.
- **Press:** no shrink; colour change only.
- **Motion:** slow fades and gentle zooms (`--ease-soft`, 200/400/800ms). No bounce, no parallax gimmicks.

## ICONOGRAPHY
- The site uses almost no icons. Wayfinding is typographic: "→" arrows, "·" separators, "•" bullets, "+" for accordions, "наверх" text link.
- The only brand glyph is the **mirror mark** — two overlapping rings on a vertical axis (`assets/mirror-mark.png`). Use it sparingly as a seal, never as a UI icon.
- Socials appear as Telegram/Pinterest links (Tilda's stock social icons on the live site — not copied); render as text labels.
- No icon font, no emoji. If a UI genuinely needs icons, use **Lucide** from CDN at 1px–1.25px stroke in ink — this is a substitution, not a brand asset.

## Index
- `styles.css` — entry; imports `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `base.css`
- `fonts/` — Forum, Cormorant Garamond, Montserrat woff2 (Google Fonts substitutes)
- `assets/` — `logo.svg` (official wordmark; for white use CSS `filter:brightness(0) invert(1)`), `mirror-mark.png`, `og-image.png`; `imagery/` product + campaign photos; `stockists/` Ozon, Золотое яблоко, Яндекс Маркет logos
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/` — React primitives (see below)
- `ui_kits/website/` — ruedemiro.com recreation (Home, Assortment, Product ×5, About, Where to buy)
- `thumbnail.html`, `SKILL.md`

## Components
- `components/core/` — **Button**, **Logo**, **Eyebrow**, **ZoneList**, **Tag**
- `components/product/` — **ProductCard**, **BenefitGrid**, **IngredientList**, **Accordion**
- `components/navigation/` — **SiteHeader**, **SiteFooter**

### Intentional additions
No component library exists in the source (Tilda site). These components are derived one-to-one from repeated patterns on ruedemiro.com; **Logo** wraps the wordmark SVG and **Tag** formalises the "1 аромат · 5 формул" pill for reuse. No forms, dialogs or toasts — the site has none.
