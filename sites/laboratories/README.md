# OPULAB — готовые лаборатории ЭКО КРС и МРС под ключ

Статическая копия лендинга с Tilda для продажи лабораторий in vitro эмбриотрансфера.

## Запуск

```bash
cd sites/laboratories
python3 -m http.server 5178
```

Открыть: http://localhost:5178/

Или просто открыть `index.html` в браузере.

## Структура

- `index.html` — одностраничный лендинг
- `css/styles.css` — стили (тёмный hero, кремовые секции, оранжевые CTA)
- `js/main.js` — меню, cookie, форма, scroll-top
- `assets/images/reference/` — исходные скриншоты Tilda

## Деплой

Статика: достаточно загрузить содержимое папки на Cloudflare Pages / любой static host  
(Build command не нужен, output = корень этой папки).

Форма контактов сейчас открывает `mailto:` — перед продом можно заменить на FormSubmit / свой API.
