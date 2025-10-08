# 📸 Инструкция по настройке изображений продуктов

## 📁 Структура папок

Создайте следующую структуру папок в проекте:

```
/public/
  /images/
    /products/
      /tshirt/
        - black.svg (или .png)
        - white.svg (или .png)
        - navy.svg (или .png)
        - gray.svg (или .png)
        - cream.svg (или .png)
        - peach.svg (или .png)
      /hoodie/
        - black.svg (или .png)
        - white.svg (или .png)
        - navy.svg (или .png)
        - gray.svg (или .png)
        - cream.svg (или .png)
        - peach.svg (или .png)
      /tote/
        - black.svg (или .png)
        - white.svg (или .png)
        - navy.svg (или .png)
        - gray.svg (или .png)
        - cream.svg (или .png)
        - peach.svg (или .png)
```

**Примечание**: Сейчас используются SVG файлы. Если хотите использовать PNG, измените расширение в коде.

## 🎨 Цвета и их коды

| Название | Hex код | Файл |
|----------|---------|------|
| Black | #000000 | black.png |
| White | #FFFFFF | white.png |
| Navy | #1a1a2e | navy.png |
| Gray | #d1d1d1 | gray.png |
| Cream | #f5e6d3 | cream.png |
| Peach | #f4a89f | peach.png |

## 📋 Требования к изображениям

### Формат и размер:
- **Формат**: PNG с прозрачным фоном
- **Размер**: 1000x1000px (квадрат)
- **Разрешение**: 72-150 DPI
- **Вес файла**: до 500KB (оптимизированные)

### Композиция:
- Продукт должен быть по центру
- Вид спереди (фронтальный)
- Отступы по краям ~10% от размера изображения
- Прозрачный фон (без белого/цветного фона)

### Освещение:
- Равномерное освещение
- Мягкие тени (если есть)
- Цвет продукта должен точно соответствовать hex-коду

## 🛠️ Как подготовить изображения

### Вариант 1: Фотография реальных продуктов
1. Сфотографируйте каждый продукт в каждом цвете
2. Используйте белый фон
3. Обработайте в Photoshop/GIMP:
   - Удалите фон (сделайте прозрачным)
   - Обрежьте до квадрата 1000x1000px
   - Сохраните как PNG

### Вариант 2: Mockup генераторы
Используйте сервисы для создания mockup:
- **Placeit.net** - платный, качественный
- **Smartmockups.com** - платный, много вариантов
- **Mockup.photos** - бесплатный/платный

### Вариант 3: AI генерация
Используйте AI для генерации изображений:
- **Midjourney**: промпт "product photography, [color] t-shirt, front view, centered, white background, professional lighting --ar 1:1"
- **DALL-E 3**: "professional product photo of [color] t-shirt, front view, centered, studio lighting"

## 📝 Пошаговая инструкция

### Шаг 1: Создайте папки
```bash
mkdir -p public/images/products/tshirt
mkdir -p public/images/products/hoodie
mkdir -p public/images/products/tote
```

### Шаг 2: Подготовьте изображения
Для каждого продукта (T-Shirt, Hoodie, Tote Bag) создайте 6 изображений в соответствующих цветах.

### Шаг 3: Именование файлов
Имена файлов должны **точно** соответствовать:
- `black.png`
- `white.png`
- `navy.png`
- `gray.png`
- `cream.png`
- `peach.png`

### Шаг 4: Загрузите файлы
Поместите файлы в соответствующие папки:
- T-Shirt изображения → `/public/images/products/tshirt/`
- Hoodie изображения → `/public/images/products/hoodie/`
- Tote Bag изображения → `/public/images/products/tote/`

### Шаг 5: Проверка
После загрузки файлов, изображения будут доступны по URL:
- `http://localhost:3000/images/products/tshirt/black.png`
- `http://localhost:3000/images/products/hoodie/white.png`
- и т.д.

## ✅ Чеклист перед запуском

- [ ] Созданы все папки
- [ ] Подготовлены изображения для T-Shirt (6 цветов)
- [ ] Подготовлены изображения для Hoodie (6 цветов)
- [ ] Подготовлены изображения для Tote Bag (6 цветов)
- [ ] Все файлы названы правильно (lowercase)
- [ ] Все изображения в формате PNG
- [ ] Все изображения 1000x1000px
- [ ] Все изображения с прозрачным фоном
- [ ] Файлы оптимизированы (до 500KB)

## 🎨 Пример структуры после загрузки

```
/public/images/products/
├── tshirt/
│   ├── black.png    ✅
│   ├── white.png    ✅
│   ├── navy.png     ✅
│   ├── gray.png     ✅
│   ├── cream.png    ✅
│   └── peach.png    ✅
├── hoodie/
│   ├── black.png    ✅
│   ├── white.png    ✅
│   ├── navy.png     ✅
│   ├── gray.png     ✅
│   ├── cream.png    ✅
│   └── peach.png    ✅
└── tote/
    ├── black.png    ✅
    ├── white.png    ✅
    ├── navy.png     ✅
    ├── gray.png     ✅
    ├── cream.png    ✅
    └── peach.png    ✅
```

## 🚀 После настройки

После того как все файлы загружены:
1. Перезапустите dev сервер: `npm run dev`
2. Откройте сайт: `http://localhost:3000`
3. Перейдите в секцию Products
4. Кликайте на цвета - изображения должны меняться автоматически!

## ❓ Troubleshooting

**Проблема**: Изображение не отображается
- Проверьте путь к файлу
- Проверьте название файла (должно быть lowercase)
- Проверьте формат (должен быть PNG)
- Очистите кэш браузера (Cmd+Shift+R)

**Проблема**: Изображение плохого качества
- Увеличьте разрешение исходного изображения
- Используйте PNG вместо JPG
- Проверьте настройки экспорта

**Проблема**: Изображение слишком большое
- Оптимизируйте через TinyPNG.com
- Уменьшите размер до 1000x1000px
- Используйте формат WebP (опционально)
