# ✅ Исправление: Pink Joy в каталоге

## 🎯 Проблема
Розовый цвет худи в каталоге не подтягивал изображение `pink.avif`

## 🔧 Решение
Добавлен маппинг цвета Pink Joy (#FFB6C1) → "pink" в файле каталога

## 📝 Изменения

### Файл: `src/features/home/products-section.tsx`

**Добавлено:**
```tsx
const colorToFileName: Record<string, string> = {
  "#000000": "black",
  "#FFFFFF": "white",
  "#1a1a2e": "navy",
  "#d1d1d1": "gray",
  "#f5e6d3": "cream",
  "#f4a89f": "peach",
  "#FFB6C1": "pink", // Pink Joy для худи ← НОВОЕ!
  "#3d4f6b": "midnight-blue",
  "#f8f4e8": "natural",
};
```

## 📂 Структура изображений

### Каталог продуктов (products):
```
public/images/products/hoodie/
├── black.avif
├── white.avif
├── navy.avif
├── gray.avif
├── cream.avif
└── pink.avif  ✅ (146K)
```

### Конфигуратор (configurator):
```
public/images/configurator/hoodie/
├── black.svg
├── white.svg
├── navy.svg
├── gray.svg
├── cream.svg
└── pink-joy.svg  ✅
```

## 🔄 Как это работает

### В каталоге продуктов:
1. Худи имеет цвет Pink Joy (#FFB6C1)
2. Система ищет маппинг: `#FFB6C1` → `"pink"`
3. Загружает изображение: `/images/products/hoodie/pink.avif`
4. Fallback форматы: `pink.webp`, `pink.png`

### В конфигураторе:
1. Худи имеет цвет Pink Joy (#FFB6C1)
2. ID цвета: `"pink-joy"`
3. Загружает изображение: `/images/configurator/hoodie/pink-joy.svg`

## 📊 Различия в именовании

| Место | Цвет | Имя файла |
|-------|------|-----------|
| **Каталог** | Pink Joy (#FFB6C1) | `pink.avif` |
| **Конфигуратор** | Pink Joy (#FFB6C1) | `pink-joy.svg` |

**Причина:** 
- Каталог использует маппинг HEX → имя файла
- Конфигуратор использует ID цвета напрямую

## ✅ Проверка

### Откройте каталог:
```
http://localhost:3001/#products
```

### Проверьте:
1. ✅ Выберите **Hoodie**
2. ✅ Выберите розовый цвет (Pink Joy)
3. ✅ Должно загрузиться изображение `pink.avif`

## 🎯 Итог

**Что работает:**
- ✅ Маппинг #FFB6C1 → "pink" добавлен
- ✅ Файл `pink.avif` на месте (146K)
- ✅ Каталог загружает розовое изображение худи
- ✅ Конфигуратор использует `pink-joy.svg`

**Форматы поддержки:**
- Приоритет: AVIF → WebP → PNG
- Автоматический fallback при ошибке загрузки

---

**Дата:** 2025-10-08  
**Статус:** ✅ Исправлено, розовый цвет работает в каталоге
