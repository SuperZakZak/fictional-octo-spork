# 🚀 Быстрый старт: Скачивание прайс-листа

## ✅ Что уже готово

Реализован полный функционал скачивания прайс-листа с Google Drive и отправки webhook в n8n.

## 📋 Что нужно сделать (3 шага)

### Шаг 1: Загрузите прайс-лист на Google Drive

1. Откройте [Google Drive](https://drive.google.com)
2. Загрузите ваш файл прайс-листа (PDF, Excel, или любой другой формат)
3. Правой кнопкой на файл → **Поделиться**
4. Измените доступ на **"Все, у кого есть ссылка"**
5. Скопируйте ссылку

### Шаг 2: Получите FILE_ID

Ваша ссылка выглядит так:
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

**FILE_ID** — это часть между `/d/` и `/view`:
```
1ABC123XYZ456
```

### Шаг 3: Обновите константу

Откройте файл `/src/lib/constants.ts` и найдите:

```typescript
export const PRICE_LIST_CONFIG = {
  googleDriveUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
} as const;
```

Замените `YOUR_FILE_ID_HERE` на ваш FILE_ID:

```typescript
export const PRICE_LIST_CONFIG = {
  googleDriveUrl: "https://drive.google.com/uc?export=download&id=1ABC123XYZ456",
} as const;
```

## ✨ Готово!

Теперь при нажатии на кнопку **Download** в секции Pricing:

1. ✅ Пользователь вводит email
2. ✅ Определяется язык браузера и сайта
3. ✅ Отправляется webhook в n8n: `https://n8n-production-9d5d.up.railway.app/webhook/price-ask`
4. ✅ Скачивается файл с Google Drive
5. ✅ Показывается сообщение об успехе

## 🧪 Тестирование

```bash
# Запустите dev сервер
npm run dev

# Откройте браузер
open http://localhost:3000

# Прокрутите до секции Pricing
# Нажмите "Get Full Price List"
# Введите email и нажмите "Download"
```

## 📊 Данные в webhook

n8n получит следующие данные:

```json
{
  "event": "price_list_download",
  "email": "user@example.com",
  "siteLocale": "en",
  "browserLocale": "en-US",
  "timestamp": "2025-10-09T12:29:21.000Z",
  "userAgent": "Mozilla/5.0..."
}
```

## 📁 Созданные файлы

1. `/src/app/api/download-price-list/route.ts` - API endpoint
2. `/src/lib/locale-utils.ts` - Утилиты для определения языка
3. `/src/lib/constants.ts` - Обновлен (добавлен PRICE_LIST_CONFIG)
4. `/src/features/home/pricing-section.tsx` - Обновлен (новая логика скачивания)

## 🔗 Полная документация

Подробная документация: `PRICE_LIST_DOWNLOAD_SETUP.md`

---

**Вопросы?** Проверьте консоль браузера (DevTools → Network) для отладки.
