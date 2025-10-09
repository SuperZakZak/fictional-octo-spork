# Price List Download Setup Guide

## ✅ Что реализовано

Функциональность скачивания прайс-листа с автоматической отправкой webhook в n8n при каждом запросе.

## 📁 Созданные файлы

### 1. API Endpoint
**Файл:** `/src/app/api/download-price-list/route.ts`

**Функционал:**
- Валидация email адреса и Google Drive URL
- Получение языка сайта и браузера пользователя из запроса
- Отправка webhook в n8n с полной информацией о событии
- Возврат URL для скачивания файла
- Обработка ошибок

**Webhook URL:** `https://n8n-production-9d5d.up.railway.app/webhook/price-ask`

**Webhook данные:**
```json
{
  "event": "price_list_download",
  "email": "user@example.com",
  "siteLocale": "en|pt|ru",
  "browserLocale": "en-US|pt-PT|ru-RU",
  "timestamp": "2025-10-09T12:22:31.000Z",
  "userAgent": "Mozilla/5.0..."
}
```

### 2. Обновленный компонент
**Файл:** `/src/features/home/pricing-section.tsx`

**Изменения в функции `handleDownloadPriceList`:**
- Отправка данных в API endpoint
- Скачивание файла с Google Drive
- Улучшенная обработка ошибок

## 🔧 Настройка Google Drive

### Шаг 1: Подготовка файла
1. Загрузите ваш прайс-лист (PDF) на Google Drive
2. Кликните правой кнопкой на файл → "Поделиться"
3. Измените доступ на "Все, у кого есть ссылка"
4. Скопируйте ссылку

### Шаг 2: Конвертация ссылки
Ссылка будет выглядеть так:
```
https://drive.google.com/file/d/1ABC123XYZ456/view?usp=sharing
```

Конвертируйте её в прямую ссылку для скачивания:
```
https://drive.google.com/uc?export=download&id=1ABC123XYZ456
```

### Шаг 3: Обновление кода
Откройте файл `/src/lib/constants.ts` и найдите секцию `PRICE_LIST_CONFIG`:

```typescript
export const PRICE_LIST_CONFIG = {
  googleDriveUrl: "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE",
} as const;
```

Замените `YOUR_FILE_ID_HERE` на ваш реальный FILE_ID:

```typescript
export const PRICE_LIST_CONFIG = {
  googleDriveUrl: "https://drive.google.com/uc?export=download&id=1ABC123XYZ456",
} as const;
```

## 🔗 Webhook конфигурация

**URL:** `https://n8n-production-9d5d.up.railway.app/webhook/price-ask`

**Метод:** POST

**Content-Type:** application/json

### Данные, которые получает n8n:

| Поле | Тип | Описание |
|------|-----|----------|
| `event` | string | Всегда "price_list_download" |
| `email` | string | Email пользователя |
| `siteLocale` | string | Язык сайта (en/pt/ru) |
| `browserLocale` | string | Язык браузера (en-US/pt-PT/ru-RU) |
| `timestamp` | string | ISO дата и время |
| `userAgent` | string | User Agent браузера |

## 🧪 Тестирование

### Локальное тестирование:

1. Запустите dev сервер:
```bash
npm run dev
```

2. Откройте `http://localhost:3000`

3. Прокрутите до секции "Pricing"

4. Нажмите "Get Full Price List"

5. Введите email и нажмите "Download"

6. Проверьте:
   - ✅ Файл начал скачиваться
   - ✅ В консоли браузера нет ошибок
   - ✅ В n8n пришел webhook

### Проверка webhook в n8n:

1. Откройте ваш n8n workflow
2. Проверьте входящие данные в webhook node
3. Убедитесь, что все поля заполнены корректно

## 🌍 Определение языка

**Новый файл:** `/src/lib/locale-utils.ts`

### Язык сайта (`siteLocale`)
Определяется в следующем порядке:
1. Из URL пути (если первая часть - 2-буквенный код): `/pt/...` → `pt`
2. Из HTML атрибута `lang`: `<html lang="pt-PT">` → `pt`
3. По умолчанию → `en`

### Язык браузера (`browserLocale`)
Определяется из JavaScript:
- `navigator.language` → полный код языка (например, `en-US`, `pt-PT`, `ru-RU`)
- Если недоступен → `unknown`

## 🔒 Безопасность

- ✅ Валидация email на клиенте и сервере
- ✅ Webhook отправляется только после валидации
- ✅ Ошибки webhook не блокируют скачивание
- ✅ Логирование ошибок для отладки

## 📝 Пример использования

```typescript
// Пользователь вводит email: user@example.com
// Нажимает "Download"

// 1. Определяются языки браузера и сайта (locale-utils.ts)
// 2. Отправляется POST запрос в /api/download-price-list с данными:
//    - email, siteLocale, browserLocale, googleDriveUrl
// 3. API отправляет webhook в n8n с полной информацией
// 4. API возвращает downloadUrl
// 5. Открывается новая вкладка с Google Drive для скачивания
// 6. Показывается сообщение об успехе
```

## 🐛 Отладка

### Если файл не скачивается:
1. Проверьте, что ссылка Google Drive публичная
2. Проверьте формат ссылки (должна быть `uc?export=download&id=...`)
3. Откройте консоль браузера для ошибок

### Если webhook не приходит:
1. Проверьте URL webhook в `/src/app/api/download-price-list/route.ts`
2. Проверьте логи сервера: `npm run dev`
3. Проверьте, что n8n workflow активен
4. Убедитесь, что URL webhook правильный: `https://n8n-production-9d5d.up.railway.app/webhook/price-ask`

### Проверка в консоли браузера:
```javascript
// Откройте DevTools → Network
// Найдите запрос к /api/download-price-list
// Проверьте Response
```

## 📊 Метрики для n8n

Вы можете настроить в n8n:
- Отправку email с прайс-листом
- Добавление в CRM
- Отправку в Google Sheets
- Триггер автоматических email кампаний
- Аналитику запросов

## ✨ Дополнительные возможности

### Добавить отправку email через n8n:
В n8n workflow добавьте Email node после webhook для автоматической отправки прайс-листа на email пользователя.

### Добавить Google Analytics событие:
```typescript
// В handleDownloadPriceList после успешной отправки:
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('event', 'price_list_download', {
    event_category: 'engagement',
    event_label: email,
  });
}
```

## 🎯 Следующие шаги

1. ✅ Загрузите прайс-лист на Google Drive
2. ✅ Получите прямую ссылку для скачивания
3. ✅ Обновите `googleDriveFileUrl` в коде
4. ✅ Протестируйте функциональность
5. ✅ Настройте n8n workflow для обработки данных
6. ✅ Опционально: добавьте email отправку через n8n

---

**Готово!** 🎉 Теперь при каждом запросе прайс-листа будет:
1. Скачиваться файл с Google Drive
2. Отправляться webhook в n8n с полной информацией о пользователе
