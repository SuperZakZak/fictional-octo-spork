# 🎨 Создание Placeholder изображений (временных)

## Быстрый старт для тестирования

Пока у вас нет реальных изображений продуктов, вы можете создать простые placeholder изображения для тестирования функционала.

## Вариант 1: Использовать онлайн генератор

### Шаг 1: Перейдите на сайт
Откройте: https://placeholder.com/

### Шаг 2: Создайте изображения
Используйте следующие URL для скачивания placeholder изображений:

**T-Shirt:**
- Black: `https://via.placeholder.com/1000/000000/FFFFFF?text=Black+T-Shirt`
- White: `https://via.placeholder.com/1000/FFFFFF/000000?text=White+T-Shirt`
- Navy: `https://via.placeholder.com/1000/1a1a2e/FFFFFF?text=Navy+T-Shirt`
- Gray: `https://via.placeholder.com/1000/d1d1d1/000000?text=Gray+T-Shirt`
- Cream: `https://via.placeholder.com/1000/f5e6d3/000000?text=Cream+T-Shirt`
- Peach: `https://via.placeholder.com/1000/f4a89f/000000?text=Peach+T-Shirt`

**Hoodie:**
- Black: `https://via.placeholder.com/1000/000000/FFFFFF?text=Black+Hoodie`
- White: `https://via.placeholder.com/1000/FFFFFF/000000?text=White+Hoodie`
- Navy: `https://via.placeholder.com/1000/1a1a2e/FFFFFF?text=Navy+Hoodie`
- Gray: `https://via.placeholder.com/1000/d1d1d1/000000?text=Gray+Hoodie`
- Cream: `https://via.placeholder.com/1000/f5e6d3/000000?text=Cream+Hoodie`
- Peach: `https://via.placeholder.com/1000/f4a89f/000000?text=Peach+Hoodie`

**Tote Bag:**
- Black: `https://via.placeholder.com/1000/000000/FFFFFF?text=Black+Tote`
- White: `https://via.placeholder.com/1000/FFFFFF/000000?text=White+Tote`
- Navy: `https://via.placeholder.com/1000/1a1a2e/FFFFFF?text=Navy+Tote`
- Gray: `https://via.placeholder.com/1000/d1d1d1/000000?text=Gray+Tote`
- Cream: `https://via.placeholder.com/1000/f5e6d3/000000?text=Cream+Tote`
- Peach: `https://via.placeholder.com/1000/f4a89f/000000?text=Peach+Tote`

### Шаг 3: Скачайте и переименуйте
1. Откройте каждую ссылку в браузере
2. Кликните правой кнопкой → "Сохранить изображение как..."
3. Сохраните с правильным именем (black.png, white.png и т.д.)
4. Поместите в соответствующую папку

## Вариант 2: Использовать скрипт для скачивания

Создайте файл `download-placeholders.sh`:

```bash
#!/bin/bash

# T-Shirt
curl "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+T-Shirt" -o public/images/products/tshirt/black.png
curl "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+T-Shirt" -o public/images/products/tshirt/white.png
curl "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+T-Shirt" -o public/images/products/tshirt/navy.png
curl "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+T-Shirt" -o public/images/products/tshirt/gray.png
curl "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+T-Shirt" -o public/images/products/tshirt/cream.png
curl "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+T-Shirt" -o public/images/products/tshirt/peach.png

# Hoodie
curl "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+Hoodie" -o public/images/products/hoodie/black.png
curl "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+Hoodie" -o public/images/products/hoodie/white.png
curl "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+Hoodie" -o public/images/products/hoodie/navy.png
curl "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+Hoodie" -o public/images/products/hoodie/gray.png
curl "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+Hoodie" -o public/images/products/hoodie/cream.png
curl "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+Hoodie" -o public/images/products/hoodie/peach.png

# Tote Bag
curl "https://via.placeholder.com/1000/000000/FFFFFF.png?text=Black+Tote" -o public/images/products/tote/black.png
curl "https://via.placeholder.com/1000/FFFFFF/000000.png?text=White+Tote" -o public/images/products/tote/white.png
curl "https://via.placeholder.com/1000/1a1a2e/FFFFFF.png?text=Navy+Tote" -o public/images/products/tote/navy.png
curl "https://via.placeholder.com/1000/d1d1d1/000000.png?text=Gray+Tote" -o public/images/products/tote/gray.png
curl "https://via.placeholder.com/1000/f5e6d3/000000.png?text=Cream+Tote" -o public/images/products/tote/cream.png
curl "https://via.placeholder.com/1000/f4a89f/000000.png?text=Peach+Tote" -o public/images/products/tote/peach.png

echo "✅ Все placeholder изображения скачаны!"
```

Затем выполните:
```bash
chmod +x download-placeholders.sh
./download-placeholders.sh
```

## Вариант 3: Использовать реальные mockup

### Рекомендуемые сервисы:

1. **Printful Mockup Generator** (бесплатно)
   - https://www.printful.com/mockup-generator
   - Выберите продукт
   - Выберите цвет
   - Скачайте изображение

2. **Placeit** (платно, но качественно)
   - https://placeit.net/
   - Много вариантов футболок
   - Профессиональное качество

3. **Smartmockups** (платно)
   - https://smartmockups.com/
   - Быстрая генерация
   - Хорошее качество

## 📋 Итоговая структура файлов

После создания всех изображений у вас должна быть такая структура:

```
public/images/products/
├── tshirt/
│   ├── black.png
│   ├── white.png
│   ├── navy.png
│   ├── gray.png
│   ├── cream.png
│   └── peach.png
├── hoodie/
│   ├── black.png
│   ├── white.png
│   ├── navy.png
│   ├── gray.png
│   ├── cream.png
│   └── peach.png
└── tote/
    ├── black.png
    ├── white.png
    ├── navy.png
    ├── gray.png
    ├── cream.png
    └── peach.png
```

## 🚀 Проверка

После создания файлов:
1. Запустите `npm run dev`
2. Откройте http://localhost:3000
3. Перейдите в секцию Products
4. Кликайте на разные цвета - изображения должны меняться!

## ⚠️ Важно

Placeholder изображения - это временное решение для тестирования. 
Для production используйте реальные фотографии продуктов или профессиональные mockup!
