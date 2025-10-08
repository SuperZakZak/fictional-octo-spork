# ✅ Обновление: Pink Joy для худи

## 🎨 Что было сделано

### Заменен цвет Peach на Pink Joy для худи

**Раньше:** Худи использовали Peach (#f4a89f)  
**Теперь:** Худи используют Pink Joy (#FFB6C1)

## 📊 Изменения по продуктам

### T-Shirt (футболки) - 6 цветов
- ✅ Black (#000000)
- ✅ White (#FFFFFF)
- ✅ Navy (#1a1a2e)
- ✅ Gray (#d1d1d1)
- ✅ Cream (#f5e6d3)
- ✅ **Peach** (#f4a89f) - остался для футболок

### Hoodie (худи) - 6 цветов
- ✅ Black (#000000)
- ✅ White (#FFFFFF)
- ✅ Navy (#1a1a2e)
- ✅ Gray (#d1d1d1)
- ✅ Cream (#f5e6d3)
- ✅ **Pink Joy** (#FFB6C1) - НОВЫЙ! (вместо Peach)

### Tote Bag (сумки) - 5 цветов
- ✅ Black (#000000)
- ✅ White (#FFFFFF)
- ✅ Gray (#d1d1d1)
- ✅ Midnight Blue (#3d4f6b)
- ✅ Natural (#f8f4e8)

## 🔧 Измененные файлы

### 1. Каталог продуктов
**Файл:** `src/features/home/products-section.tsx`

```tsx
// Худи теперь с Pink Joy
{
  id: "hoodie",
  colors: ["#000000", "#FFFFFF", "#1a1a2e", "#d1d1d1", "#f5e6d3", "#FFB6C1"],
}
```

### 2. Конфигуратор
**Файл:** `src/features/home/configurator-section.tsx`

**Добавлены отдельные наборы цветов:**
```tsx
// Футболки (с Peach)
const tshirtColors = [
  { id: "peach", name: "Peach", hex: "#f4a89f" },
  // ...
];

// Худи (с Pink Joy)
const hoodieColors = [
  { id: "pink-joy", name: "Pink Joy", hex: "#FFB6C1" },
  // ...
];
```

**Логика выбора цветов:**
```tsx
const availableColors = 
  selectedProduct.id === "tote" ? toteColors :
  selectedProduct.id === "hoodie" ? hoodieColors :
  tshirtColors;
```

### 3. SVG-заглушка
**Файл:** `public/images/configurator/hoodie/pink-joy.svg`

- ✅ Создан новый файл с цветом Pink Joy (#FFB6C1)

## 🎯 Как это работает

### Футболки (T-Shirt):
- Показывают 6 цветов, включая **Peach**
- Файл изображения: `tshirt/peach.svg` (или .png)

### Худи (Hoodie):
- Показывают 6 цветов, включая **Pink Joy** (вместо Peach)
- Файл изображения: `hoodie/pink-joy.svg` (или .png)

### Сумки (Tote Bag):
- Показывают 5 цветов (без Peach и Pink Joy)

## 📥 Добавление реальных изображений

Когда будете добавлять реальные изображения для Pink Joy худи:

```bash
# Создайте изображение Pink Joy худи и сохраните как:
public/images/configurator/hoodie/pink-joy.png
# или
public/images/configurator/hoodie/pink-joy.avif
# или
public/images/configurator/hoodie/pink-joy.webp
```

**Важно:** 
- Имя файла: `pink-joy` (с дефисом, lowercase)
- Цвет: #FFB6C1 (светло-розовый)

## 🚀 Проверка

### Откройте конфигуратор:
```
http://localhost:3001/#configurator
```

### Проверьте:
1. ✅ Выберите **T-Shirt** → должен быть цвет **Peach** (персиковый)
2. ✅ Выберите **Hoodie** → должен быть цвет **Pink Joy** (розовый)
3. ✅ Выберите **Tote Bag** → нет ни Peach, ни Pink Joy

## 📊 Сравнение цветов

| Продукт | Peach | Pink Joy |
|---------|-------|----------|
| T-Shirt | ✅ #f4a89f | ❌ |
| Hoodie | ❌ | ✅ #FFB6C1 |
| Tote Bag | ❌ | ❌ |

## ✅ Итог

**Что работает:**
- ✅ Футболки показывают Peach (#f4a89f)
- ✅ Худи показывают Pink Joy (#FFB6C1)
- ✅ Каждый продукт имеет свой набор цветов
- ✅ SVG-заглушка для Pink Joy создана
- ✅ Каталог и конфигуратор синхронизированы

**Следующий шаг:**
- ⏳ Добавить реальное изображение для `pink-joy.png` худи

---

**Дата обновления:** 2025-10-08  
**Статус:** ✅ Pink Joy добавлен для худи, Peach остался для футболок
