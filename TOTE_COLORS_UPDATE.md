# ✅ Обновление цветов для сумок в конфигураторе

## 🎨 Что было сделано

### 1. Добавлены отдельные цвета для сумок

**Раньше:** Все продукты (футболки, худи, сумки) использовали одинаковые 6 цветов

**Теперь:** Сумки используют свои цвета, соответствующие каталогу

### 2. Цвета для футболок и худи (6 цветов)
- ✅ Black (#000000)
- ✅ White (#FFFFFF)
- ✅ Navy (#1a1a2e)
- ✅ Gray (#d1d1d1)
- ✅ Cream (#f5e6d3)
- ✅ Peach (#f4a89f)

### 3. Цвета для сумок (5 цветов) - как в каталоге
- ✅ Black (#000000)
- ✅ White (#FFFFFF)
- ✅ Gray (#d1d1d1)
- ✅ **Midnight Blue** (#3d4f6b) - НОВЫЙ!
- ✅ **Natural** (#f8f4e8) - НОВЫЙ!

## 📂 Созданные файлы

### SVG-заглушки для новых цветов сумок:
- ✅ `public/images/configurator/tote/midnight-blue.svg`
- ✅ `public/images/configurator/tote/natural.svg`

## 🔧 Изменения в коде

**Файл:** `src/features/home/configurator-section.tsx`

### Добавлено:
1. **Два набора цветов:**
   - `apparelColors` - для футболок и худи (6 цветов)
   - `toteColors` - для сумок (5 цветов)

2. **Динамический выбор цветов:**
   ```tsx
   const availableColors = selectedProduct.id === "tote" ? toteColors : apparelColors;
   ```

3. **Автоматическое переключение:**
   - При выборе сумки показываются 5 цветов
   - При выборе футболки/худи показываются 6 цветов
   - Цвет автоматически сбрасывается на первый доступный

## 🎯 Как это работает

### Когда выбрана футболка или худи:
Показываются 6 цветов:
- Black, White, Navy, Gray, Cream, Peach

### Когда выбрана сумка:
Показываются 5 цветов:
- Black, White, Gray, Midnight Blue, Natural

## 📊 Соответствие каталогу

### Каталог продуктов (products-section.tsx):
```tsx
{
  id: "tote",
  name: "Tote Bag",
  colors: ["#000000", "#FFFFFF", "#d1d1d1", "#3d4f6b", "#f8f4e8"],
}
```

### Конфигуратор (configurator-section.tsx):
```tsx
const toteColors = [
  { id: "black", name: "Black", hex: "#000000" },
  { id: "white", name: "White", hex: "#FFFFFF" },
  { id: "gray", name: "Gray", hex: "#d1d1d1" },
  { id: "midnight-blue", name: "Midnight Blue", hex: "#3d4f6b" },
  { id: "natural", name: "Natural", hex: "#f8f4e8" },
];
```

✅ **Полное соответствие!**

## 🚀 Проверка

### Откройте конфигуратор:
```
http://localhost:3001/#configurator
```

### Проверьте:
1. ✅ Выберите **T-Shirt** → должно быть 6 цветов
2. ✅ Выберите **Hoodie** → должно быть 6 цветов
3. ✅ Выберите **Tote Bag** → должно быть 5 цветов
4. ✅ Цвета сумок: Black, White, Gray, Midnight Blue, Natural

## 📥 Добавление реальных изображений

Когда будете добавлять реальные изображения для сумок, используйте эти имена файлов:

```bash
# Для сумок нужны 5 файлов:
public/images/configurator/tote/black.png (или .avif, .webp)
public/images/configurator/tote/white.png
public/images/configurator/tote/gray.png
public/images/configurator/tote/midnight-blue.png  ← НОВЫЙ!
public/images/configurator/tote/natural.png        ← НОВЫЙ!
```

**Важно:** Имена файлов должны точно совпадать с ID цветов!

## ✅ Итог

**Что работает:**
- ✅ Футболки и худи показывают 6 цветов
- ✅ Сумки показывают 5 цветов (как в каталоге)
- ✅ Цвета автоматически переключаются при смене продукта
- ✅ SVG-заглушки созданы для всех цветов
- ✅ Полное соответствие каталогу

**Следующий шаг:**
- ⏳ Добавить реальные изображения для `midnight-blue` и `natural` сумок

---

**Дата обновления:** 2025-10-08  
**Статус:** ✅ Цвета обновлены, соответствуют каталогу
