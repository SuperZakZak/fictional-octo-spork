# 📸 Финальная инструкция: Изображения продуктов

## ✅ Что уже готово

1. ✅ **3D модели удалены** - теперь используются плоские изображения
2. ✅ **Папки созданы** - `/public/images/products/`
3. ✅ **Placeholder файлы созданы** - SVG для тестирования
4. ✅ **Код обновлен** - автоматическая смена изображений при клике на цвет
5. ✅ **Анимация добавлена** - плавная смена изображений

## 📁 Структура файлов

```
/public/images/products/
├── tshirt/
│   ├── black.svg    ✅ (placeholder)
│   ├── white.svg    ✅ (placeholder)
│   ├── navy.svg     ✅ (placeholder)
│   ├── gray.svg     ✅ (placeholder)
│   ├── cream.svg    ✅ (placeholder)
│   └── peach.svg    ✅ (placeholder)
├── hoodie/
│   ├── black.svg    ✅ (placeholder)
│   ├── white.svg    ✅ (placeholder)
│   ├── navy.svg     ✅ (placeholder)
│   ├── gray.svg     ✅ (placeholder)
│   ├── cream.svg    ✅ (placeholder)
│   └── peach.svg    ✅ (placeholder)
└── tote/
    ├── black.svg    ✅ (placeholder)
    ├── white.svg    ✅ (placeholder)
    ├── navy.svg     ✅ (placeholder)
    ├── gray.svg     ✅ (placeholder)
    ├── cream.svg    ✅ (placeholder)
    └── peach.svg    ✅ (placeholder)
```

## 🎯 Как заменить на реальные изображения

### Вариант 1: Использовать PNG изображения

1. **Подготовьте изображения:**
   - Формат: PNG с прозрачным фоном
   - Размер: 1000×1000px
   - Имена: `black.png`, `white.png`, `navy.png`, `gray.png`, `cream.png`, `peach.png`

2. **Замените файлы:**
   ```bash
   # Удалите SVG
   rm public/images/products/tshirt/*.svg
   rm public/images/products/hoodie/*.svg
   rm public/images/products/tote/*.svg
   
   # Скопируйте ваши PNG
   cp ваши-изображения/tshirt/*.png public/images/products/tshirt/
   cp ваши-изображения/hoodie/*.png public/images/products/hoodie/
   cp ваши-изображения/tote/*.png public/images/products/tote/
   ```

3. **Обновите код:**
   
   Откройте: `/src/features/home/products-section.tsx`
   
   Найдите строку 93 и измените `.svg` на `.png`:
   ```typescript
   src={`/images/products/${selectedProduct.id}/${colorToFileName[selectedColor]}.png`}
   ```
   
   Уберите `unoptimized` (строка 98):
   ```typescript
   <Image
     src={`/images/products/${selectedProduct.id}/${colorToFileName[selectedColor]}.png`}
     alt={`${selectedProduct.name} in ${colorToFileName[selectedColor]}`}
     fill
     className="object-contain"
     priority
   />
   ```

### Вариант 2: Оставить SVG

Если ваши изображения в формате SVG:
1. Просто замените существующие SVG файлы на ваши
2. Код уже настроен для SVG - ничего менять не нужно!

## 🎨 Цвета и названия файлов

| Цвет | Hex код | Имя файла |
|------|---------|-----------|
| Черный | #000000 | `black.svg` или `black.png` |
| Белый | #FFFFFF | `white.svg` или `white.png` |
| Темно-синий | #1a1a2e | `navy.svg` или `navy.png` |
| Серый | #d1d1d1 | `gray.svg` или `gray.png` |
| Кремовый | #f5e6d3 | `cream.svg` или `cream.png` |
| Персиковый | #f4a89f | `peach.svg` или `peach.png` |

**ВАЖНО:** Имена файлов должны быть **строчными** (lowercase)!

## 🛠️ Где получить изображения

### 1. Фотография реальных продуктов
- Сфотографируйте продукты на белом фоне
- Удалите фон: https://remove.bg
- Обрежьте до квадрата 1000×1000px
- Сохраните как PNG

### 2. Mockup генераторы (рекомендуется)

**Бесплатные:**
- **Printful Mockup Generator**: https://www.printful.com/mockup-generator
  - Выберите продукт → цвет → скачайте

**Платные (качественные):**
- **Placeit**: https://placeit.net/
- **Smartmockups**: https://smartmockups.com/

### 3. AI генерация

**Midjourney промпт:**
```
product photography, [black/white/navy/gray/cream/peach] t-shirt, 
front view, centered, white background, professional studio lighting, 
high quality, clean, minimalist --ar 1:1 --v 6
```

**DALL-E 3 промпт:**
```
professional product photography of a [color] t-shirt, 
front view, centered on white background, studio lighting, 
commercial quality, isolated product shot
```

## 📋 Чеклист замены изображений

### Для T-Shirt:
- [ ] black.png/svg (черная футболка)
- [ ] white.png/svg (белая футболка)
- [ ] navy.png/svg (темно-синяя футболка)
- [ ] gray.png/svg (серая футболка)
- [ ] cream.png/svg (кремовая футболка)
- [ ] peach.png/svg (персиковая футболка)

### Для Hoodie:
- [ ] black.png/svg (черная толстовка)
- [ ] white.png/svg (белая толстовка)
- [ ] navy.png/svg (темно-синяя толстовка)
- [ ] gray.png/svg (серая толстовка)
- [ ] cream.png/svg (кремовая толстовка)
- [ ] peach.png/svg (персиковая толстовка)

### Для Tote Bag:
- [ ] black.png/svg (черная сумка)
- [ ] white.png/svg (белая сумка)
- [ ] navy.png/svg (темно-синяя сумка)
- [ ] gray.png/svg (серая сумка)
- [ ] cream.png/svg (кремовая сумка)
- [ ] peach.png/svg (персиковая сумка)

### После замены:
- [ ] Если PNG - обновлен код (см. выше)
- [ ] Перезапущен сервер: `npm run dev`
- [ ] Проверено на сайте: http://localhost:3000
- [ ] Клик на цвета → изображения меняются ✅

## 🚀 Как это работает

### Маппинг цветов:
```typescript
const colorToFileName: Record<string, string> = {
  "#000000": "black",   // Черный
  "#FFFFFF": "white",   // Белый
  "#1a1a2e": "navy",    // Темно-синий
  "#d1d1d1": "gray",    // Серый
  "#f5e6d3": "cream",   // Кремовый
  "#f4a89f": "peach",   // Персиковый
};
```

### Путь к изображению:
```
/images/products/{productId}/{colorFileName}.svg
```

Где:
- `productId` = "tshirt" | "hoodie" | "tote"
- `colorFileName` = "black" | "white" | "navy" | "gray" | "cream" | "peach"

### Пример:
При клике на черный цвет для T-Shirt:
```
/images/products/tshirt/black.svg
```

## 🎬 Анимация

При смене цвета изображение:
1. Плавно исчезает (opacity: 0, scale: 0.9)
2. Загружается новое изображение
3. Плавно появляется (opacity: 1, scale: 1)
4. Длительность: 300ms

## ❓ Troubleshooting

### Изображение не показывается:
1. Проверьте путь: `/public/images/products/tshirt/black.png`
2. Проверьте имя файла (должно быть lowercase)
3. Проверьте расширение в коде (.svg или .png)
4. Очистите кэш: Cmd+Shift+R (Mac) или Ctrl+Shift+R (Windows)

### Изображение плохого качества:
1. Используйте минимум 1000×1000px
2. Используйте PNG для прозрачности
3. Экспортируйте в высоком качестве (100%)

### Изображение слишком большое (медленно загружается):
1. Оптимизируйте: https://tinypng.com/
2. Используйте WebP формат (опционально)
3. Уменьшите размер до 1000×1000px

### Белый фон вместо прозрачного:
1. Откройте в Photoshop/GIMP
2. Удалите фоновый слой
3. Сохраните как PNG-24 (с альфа-каналом)

## 📝 Дополнительные файлы

В проекте есть дополнительные инструкции:

1. **PRODUCT_IMAGES_SETUP.md** - Подробная инструкция по подготовке изображений
2. **CREATE_PLACEHOLDER_IMAGES.md** - Как создать временные изображения
3. **QUICK_START_IMAGES.md** - Быстрый старт

## ✨ Готово!

После замены изображений ваш сайт будет показывать реальные продукты!

**Проверка:**
1. `npm run dev`
2. Откройте http://localhost:3000
3. Перейдите в секцию Products
4. Кликайте на цвета → изображения меняются! 🎉
