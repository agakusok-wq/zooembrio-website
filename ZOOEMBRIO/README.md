# ZOOEMBRIO — сайт-лендинг

## Самый простой способ посмотреть сайт (Windows)

1. Дважды щёлкните **`ЗАПУСТИТЬ-САЙТ.bat`** в этой папке.
2. Не закрывайте появившееся чёрное окно.
3. Откройте в браузере: **http://localhost:4321/**

Подробная инструкция: **`КАК-СМОТРЕТЬ-САЙТ.txt`**

---

Двуязычный (RU/EN) лендинг для ZOOEMBRIO — производителя сред АРТ для in vivo оплодотворения лошадей.

## Локальный запуск (через терминал)

```bash
cd "C:\Users\Guest\Documents\сайт среды лошади\zooembrio-website"
npm install
npm run dev
```

Сайт откроется на http://localhost:4321

## Сборка

```bash
npm run build
npm run preview
```

## Структура

- `src/content/site.ts` — все тексты RU/EN
- `src/pages/` — русские страницы
- `src/pages/en/` — английские страницы
- `public/images/` — логотип АРТ и визуалы продуктов

## Замена логотипа и фото

Положите реальный логотип АРТ (корова) в:

```
public/images/logo/art-logo.png
```

и обновите пути в `Header.astro`, `Footer.astro`, `index.astro` с `.svg` на `.png`.

Фото продуктов — в `public/images/products/` (wash, vit, wam, tsm-asp).

## Форма обратной связи

Используется [FormSubmit](https://formsubmit.co). При первой отправке на `info@zooembrio.ru` придёт письмо-подтверждение — нужно нажать ссылку активации.

Замените email в `src/components/ContactSection.astro`, если используете другой ящик.

## Деплой в интернет (HTTPS)

**Подробная пошаговая инструкция на русском:** `КАК-ВЫЛОЖИТЬ-С-HTTPS.txt`

Сайт настроен на адрес **https://zooembrio.ru**. После деплоя:
- Включены заголовки безопасности (`public/_headers`) — HSTS, защита от подмены контента
- Форма работает через **https://formsubmit.co**

### Вариант 1: Cloudflare Pages (рекомендуется, бесплатный SSL)

1. Создайте аккаунт на https://github.com и https://cloudflare.com
2. Загрузите проект в репозиторий GitHub
3. Cloudflare → **Workers & Pages → Create → Connect to Git**
4. Build command: `npm run build` · Output directory: `dist`
5. Deploy command: **оставить пустым** (не `wrangler versions upload`)
6. Привяжите домен `zooembrio.ru` (Custom domains)
6. У регистратора домена укажите DNS-серверы Cloudflare
7. Cloudflare → **SSL/TLS → Always Use HTTPS: ON**

Сертификат выпускается автоматически. Проверка: откройте https://zooembrio.ru — в адресной строке должен быть замочек.

### Вариант 2: Timeweb / Beget

1. `npm run build`
2. Загрузите содержимое `dist/` на хостинг
3. В панели хостинга включите **Let's Encrypt SSL** и **редирект HTTP → HTTPS**

## Продуктовая линейка на сайте

1. **TSM-Asp** — 1000 / 3000 мл, мешки для инфузий
2. **Wash** — 50 / 100 мл
3. **ViT1 / ViT2** — заморозка
4. **WaM1 / WaM2** — разморозка
