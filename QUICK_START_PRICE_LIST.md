# 🚀 Быстрый старт: Скачивание прайс-листа

## Что нужно сделать

### 1. Загрузите файл на Google Drive
- Откройте Google Drive
- Загрузите PDF с прайс-листом
- Правый клик → "Поделиться" → "Все, у кого есть ссылка"
- Скопируйте ссылку

### 2. Конвертируйте ссылку

**Было:**
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

**Стало:**
```
https://drive.google.com/uc?export=download&id=1ABC123XYZ456
```

### 3. Обновите файл `/src/lib/constants.ts`

Строка 203:
```typescript
googleDriveUrl: "https://drive.google.com/uc?export=download&id=1ABC123XYZ456",
```

### 4. Готово! ✅

---

## Как это работает

При нажатии кнопки "Download" в секции Pricing:

1. ✅ Отправляется webhook в n8n с данными:
   - Email пользователя
   - Язык сайта (en/pt/ru)
   - Язык браузера
   - Время события
   - User Agent
   - URL страницы

2. ✅ Скачивается файл с Google Drive

3. ✅ Показывается сообщение об успехе

---

## Webhook URL

```
https://n8n-production-9d5d.up.railway.app/webhook/price-ask
```

---

## Файлы

- **API:** `/src/app/api/price-list-download/route.ts`
- **Компонент:** `/src/features/home/pricing-section.tsx`
- **Конфиг:** `/src/lib/constants.ts`
- **Утилиты:** `/src/lib/language-utils.ts`

---

## Тестирование

```bash
npm run dev
```

Откройте `http://localhost:3000` → Pricing → "Get Full Price List"

---

**Полная документация:** `PRICE_LIST_DOWNLOAD_SETUP.md`
