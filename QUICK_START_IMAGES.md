# 🚀 Быстрый старт: Настройка изображений продуктов

## ✅ Что уже сделано

1. ✅ Папки созданы: `/public/images/products/`
2. ✅ SVG placeholder файлы созданы (для тестирования)
3. ✅ Код обновлен для работы с изображениями
4. ✅ Маппинг цветов настроен

## 📸 Текущее состояние

Сейчас используются **SVG placeholder** изображения для тестирования.
Они находятся в:
- `/public/images/products/tshirt/` (6 файлов)
- `/public/images/products/hoodie/` (6 файлов)
- `/public/images/products/tote/` (6 файлов)

## 🎯 Как заменить на реальные изображения

### Шаг 1: Подготовьте изображения

Вам нужно 18 изображений (3 продукта × 6 цветов):

**Формат**: PNG или SVG  
**Размер**: 1000×1000px (рекомендуется)  
**Фон**: Прозрачный

### Шаг 2: Именование файлов

Файлы должны называться **точно так**:

| Цвет | Hex | Имя файла |
|------|-----|-----------|
| Черный | #000000 | `black.svg` или `black.png` |
| Белый | #FFFFFF | `white.svg` или `white.png` |
| Темно-синий | #1a1a2e | `navy.svg` или `navy.png` |
| Серый | #d1d1d1 | `gray.svg` или `gray.png` |
| Кремовый | #f5e6d3 | `cream.svg` или `cream.png` |
| Персиковый | #f4a89f | `peach.svg` или `peach.png` |

### Шаг 3: Замените файлы

Просто замените SVG файлы на ваши PNG/SVG:

```bash
# Пример для T-Shirt
cp ваш-черный-tshirt.png public/images/products/tshirt/black.png
cp ваш-белый-tshirt.png public/images/products/tshirt/white.png
# ... и так далее
```

### Шаг 4: Если используете PNG вместо SVG

Откройте файл: `/src/features/home/products-section.tsx`

Найдите строку 93:
```typescript
src={`/images/products/${selectedProduct.id}/${colorToFileName[selectedColor]}.svg`}
```

Замените `.svg` на `.png`:
```typescript
src={`/images/products/${selectedProduct.id}/${colorToFileName[selectedColor]}.png`}
```

И уберите `unoptimized` (строка 98):
```typescript
<Image
  src={`/images/products/${selectedProduct.id}/${colorToFileName[selectedColor]}.png`}
  alt={`${selectedProduct.name} in ${colorToFileName[selectedColor]}`}
  fill
  className="object-contain"
  priority
/>
```

## 🛠️ Где взять изображения продуктов

### Вариант 1: Фотография реальных продуктов
- Сфотографируйте продукты
- Удалите фон (используйте remove.bg)
- Сохраните как PNG

### Вариант 2: Mockup генераторы
- **Printful** (бесплатно): https://www.printful.com/mockup-generator
- **Placeit** (платно): https://placeit.net/
- **Smartmockups** (платно): https://smartmockups.com/

### Вариант 3: AI генерация
- **Midjourney**: `product photography, [color] t-shirt, front view, white background --ar 1:1`
- **DALL-E 3**: `professional product photo of [color] t-shirt, centered, studio lighting`

## 📋 Чеклист

- [ ] Подготовлены изображения для T-Shirt (6 цветов)
- [ ] Подготовлены изображения для Hoodie (6 цветов)
- [ ] Подготовлены изображения для Tote Bag (6 цветов)
- [ ] Файлы названы правильно (lowercase)
- [ ] Файлы помещены в правильные папки
- [ ] Если PNG - обновлен код (см. Шаг 4)
- [ ] Перезапущен dev сервер: `npm run dev`
- [ ] Проверено на сайте: кликаем на цвета → изображения меняются

## 🎨 Структура файлов (финальная)

```
public/images/products/
├── tshirt/
│   ├── black.png    ← Ваше изображение
│   ├── white.png    ← Ваше изображение
│   ├── navy.png     ← Ваше изображение
│   ├── gray.png     ← Ваше изображение
│   ├── cream.png    ← Ваше изображение
│   └── peach.png    ← Ваше изображение
├── hoodie/
│   ├── black.png    ← Ваше изображение
│   ├── white.png    ← Ваше изображение
│   ├── navy.png     ← Ваше изображение
│   ├── gray.png     ← Ваше изображение
│   ├── cream.png    ← Ваше изображение
│   └── peach.png    ← Ваше изображение
└── tote/
    ├── black.png    ← Ваше изображение
    ├── white.png    ← Ваше изображение
    ├── navy.png     ← Ваше изображение
    ├── gray.png     ← Ваше изображение
    ├── cream.png    ← Ваше изображение
    └── peach.png    ← Ваше изображение
```

## 🚀 Проверка работы

1. Запустите dev сервер:
```bash
npm run dev
```

2. Откройте: http://localhost:3000

3. Перейдите в секцию **Products**

4. Кликайте на разные цвета → изображения должны плавно меняться!

## ❓ Проблемы?

**Изображение не показывается:**
- Проверьте путь к файлу
- Проверьте название (должно быть lowercase)
- Очистите кэш браузера (Cmd+Shift+R)

**Изображение плохого качества:**
- Используйте размер минимум 1000×1000px
- Используйте PNG вместо JPG для прозрачности

**Изображение слишком большое:**
- Оптимизируйте через https://tinypng.com/
- Используйте WebP формат (опционально)

---

## 📝 Техническая информация

### Маппинг цветов в коде:

```typescript
const colorToFileName: Record<string, string> = {
  "#000000": "black",
  "#FFFFFF": "white",
  "#1a1a2e": "navy",
  "#d1d1d1": "gray",
  "#f5e6d3": "cream",
  "#f4a89f": "peach",
};
```

### Путь к изображениям:

```typescript
/images/products/${productId}/${colorFileName}.svg
```

Где:
- `productId` = "tshirt" | "hoodie" | "tote"
- `colorFileName` = "black" | "white" | "navy" | "gray" | "cream" | "peach"

---

**Готово!** 🎉 Теперь ваш сайт будет показывать изображения продуктов при выборе цвета!
