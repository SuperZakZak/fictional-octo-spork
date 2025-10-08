# Cookie Consent System - Руководство

## 📋 Обзор

Реализована полнофункциональная система согласия на обработку данных (Cookie Consent) в соответствии с требованиями GDPR и другими нормами конфиденциальности.

## ✨ Возможности

### 1. **Cookie Banner (Баннер согласия)**
- ✅ Появляется при первом посещении сайта
- ✅ Красивый современный дизайн с анимацией
- ✅ Backdrop с размытием фона
- ✅ Три варианта действий:
  - **Принять все** - включает все категории cookies
  - **Настроить** - открывает детальные настройки
  - **Только необходимые** - включает только обязательные cookies

### 2. **Cookie Settings (Детальные настройки)**
- ✅ Модальное окно с полным управлением
- ✅ 4 категории cookies:
  - **Необходимые** (всегда включены, нельзя отключить)
  - **Аналитические** (опционально)
  - **Маркетинговые** (опционально)
  - **Предпочтения** (опционально)
- ✅ Описание каждой категории с примерами
- ✅ Toggle-переключатели для управления
- ✅ Сохранение настроек в localStorage

### 3. **Управление из Footer**
- ✅ Кнопка "Cookie Settings" в футере
- ✅ Доступна в любое время для изменения настроек
- ✅ Анимация иконки при наведении

## 🏗️ Архитектура

### Файловая структура

```
src/
├── types/index.ts                          # TypeScript типы
├── lib/cookie-consent.ts                   # Утилиты и логика
├── hooks/use-cookie-settings.ts            # React хук
├── components/
│   ├── cookie-consent.tsx                  # Баннер согласия
│   ├── cookie-settings.tsx                 # Модальное окно настроек
│   ├── cookie-consent-manager.tsx          # Менеджер состояния
│   └── footer.tsx                          # Обновлен с кнопкой
└── app/layout.tsx                          # Интеграция в layout
```

## 📦 Компоненты

### 1. CookieConsent (Баннер)
```tsx
// Автоматически показывается при первом посещении
<CookieConsent onOpenSettings={handleOpen} />
```

**Особенности:**
- Проверяет наличие согласия в localStorage
- Показывается с задержкой 1 секунда для лучшего UX
- Проверяет срок действия согласия (365 дней)
- Backdrop с возможностью закрытия кликом

### 2. CookieSettings (Настройки)
```tsx
// Модальное окно с детальными настройками
<CookieSettings isOpen={isOpen} onClose={handleClose} />
```

**Особенности:**
- Загружает текущие настройки из localStorage
- Toggle-переключатели для каждой категории
- Блокирует скролл body при открытии
- Анимация появления/исчезновения

### 3. CookieConsentManager (Менеджер)
```tsx
// Управляет состоянием обоих компонентов
<CookieConsentManager />
```

**Особенности:**
- Использует custom events для глобальной коммуникации
- Координирует работу баннера и настроек

## 🔧 Утилиты

### Основные функции (`lib/cookie-consent.ts`)

```typescript
// Получить текущее согласие
const consent = getCookieConsent();

// Сохранить настройки
saveCookieConsent(preferences);

// Принять все cookies
acceptAllCookies();

// Принять только необходимые
acceptNecessaryCookies();

// Проверить, дал ли пользователь согласие
const hasConsented = hasUserConsented();

// Проверить конкретную категорию
const analyticsEnabled = isCookieCategoryEnabled('analytics');

// Проверить, нужно ли обновить согласие
const needsRenewal = needsConsentRenewal();

// Очистить согласие (для тестирования)
clearCookieConsent();
```

## 🎨 Дизайн

### Цветовая схема
- **Основной цвет**: `#FF69B4` (розовый Blooma)
- **Hover**: `#FF1493`
- **Фон**: белый с тенями
- **Текст**: градации серого

### Анимации
- Slide up для баннера
- Fade + Scale для модального окна
- Rotate для иконки cookie при hover
- Smooth transitions для всех интерактивных элементов

## 🔐 Хранение данных

### localStorage структура
```json
{
  "blooma_cookie_consent": {
    "hasConsented": true,
    "preferences": {
      "necessary": true,
      "analytics": false,
      "marketing": false,
      "preferences": false
    },
    "timestamp": 1234567890
  }
}
```

### События (Custom Events)

```typescript
// Открыть настройки
window.dispatchEvent(new CustomEvent('openCookieSettings'));

// Закрыть настройки
window.dispatchEvent(new CustomEvent('closeCookieSettings'));

// Согласие изменено
window.addEventListener('cookieConsentChanged', (e) => {
  console.log(e.detail); // CookieConsentState
});

// Согласие очищено
window.addEventListener('cookieConsentCleared', () => {
  console.log('Consent cleared');
});
```

## 🚀 Использование

### Проверка согласия в коде

```typescript
import { isCookieCategoryEnabled } from '@/lib/cookie-consent';

// Перед инициализацией аналитики
if (isCookieCategoryEnabled('analytics')) {
  // Инициализировать Google Analytics
  initializeGA();
}

// Перед загрузкой маркетинговых скриптов
if (isCookieCategoryEnabled('marketing')) {
  // Загрузить Facebook Pixel
  loadFacebookPixel();
}
```

### Реагирование на изменения

```typescript
useEffect(() => {
  const handleConsentChange = (e: CustomEvent) => {
    const { preferences } = e.detail;
    
    if (preferences.analytics) {
      // Включить аналитику
    } else {
      // Отключить аналитику
    }
  };

  window.addEventListener('cookieConsentChanged', handleConsentChange);
  
  return () => {
    window.removeEventListener('cookieConsentChanged', handleConsentChange);
  };
}, []);
```

## 📱 Адаптивность

- **Mobile**: Вертикальная компоновка кнопок
- **Tablet**: Адаптивная сетка
- **Desktop**: Горизонтальная компоновка

Все компоненты полностью responsive и оптимизированы для всех размеров экранов.

## ♿ Доступность

- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Focus states
- ✅ Screen reader friendly
- ✅ Semantic HTML

## 🧪 Тестирование

### Очистка согласия для тестирования

```typescript
import { clearCookieConsent } from '@/lib/cookie-consent';

// В консоли браузера или в коде
clearCookieConsent();
// Перезагрузите страницу - баннер появится снова
```

### Проверка состояния

```typescript
import { getCookieConsent } from '@/lib/cookie-consent';

console.log(getCookieConsent());
```

## 🔄 Срок действия

- Согласие действительно **365 дней**
- После истечения срока баннер появится снова
- Функция `needsConsentRenewal()` проверяет необходимость обновления

## 🌐 Локализация

Все тексты на русском языке. Для добавления других языков:

1. Создать файл переводов в `lib/translations/`
2. Обновить компоненты для использования переводов
3. Добавить переключатель языка

## 📋 Категории Cookies

### 1. Необходимые (Necessary)
- **Всегда включены**
- Сессия, безопасность, согласие на cookies
- Нельзя отключить

### 2. Аналитические (Analytics)
- Google Analytics, статистика посещений
- Помогают понять поведение пользователей
- Опционально

### 3. Маркетинговые (Marketing)
- Facebook Pixel, Google Ads, ретаргетинг
- Для показа релевантной рекламы
- Опционально

### 4. Предпочтения (Preferences)
- Язык, тема, настройки отображения
- Для персонализации опыта
- Опционально

## 🎯 Best Practices

1. **Всегда проверяйте согласие** перед загрузкой сторонних скриптов
2. **Используйте события** для реакции на изменения
3. **Не блокируйте функциональность** без необходимых cookies
4. **Обновляйте политику конфиденциальности** при добавлении новых cookies
5. **Тестируйте** на разных устройствах и браузерах

## 🔗 Интеграция с аналитикой

Пример интеграции с Google Analytics:

```typescript
// lib/analytics.ts
import { isCookieCategoryEnabled } from '@/lib/cookie-consent';

export const initializeAnalytics = () => {
  if (isCookieCategoryEnabled('analytics')) {
    // Инициализация GA4
    window.gtag('config', 'GA_MEASUREMENT_ID');
  }
};

// Слушать изменения согласия
window.addEventListener('cookieConsentChanged', (e: CustomEvent) => {
  if (e.detail.preferences.analytics) {
    initializeAnalytics();
  }
});
```

## ✅ Готово к использованию

Система полностью готова к использованию в production:
- ✅ GDPR compliant
- ✅ Современный UI/UX
- ✅ TypeScript типизация
- ✅ Полная документация
- ✅ Адаптивный дизайн
- ✅ Доступность
- ✅ Производительность

## 🎨 Кастомизация

### Изменение цветов

Отредактируйте классы в компонентах:
- `bg-[#FF69B4]` - основной цвет
- `hover:bg-[#FF1493]` - hover состояние

### Изменение текстов

Все тексты находятся в компонентах и могут быть легко изменены или вынесены в файлы переводов.

### Добавление новых категорий

1. Добавить тип в `types/index.ts`
2. Обновить `COOKIE_CATEGORIES` в `lib/cookie-consent.ts`
3. Обновить интерфейсы `CookiePreferences`

---

**Система готова к использованию!** 🎉

Для вопросов или предложений по улучшению обращайтесь к документации или создавайте issue.
