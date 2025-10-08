# 📸 Руководство по загрузке фоновых изображений футболок

## 🎯 Обзор

Конфигуратор дизайна использует фоновые изображения футболок для каждого цвета. Эти изображения служат основой, на которую накладывается дизайн пользователя.

## 📂 Структура файлов

### Текущая структура директорий:
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
│   └── [аналогичные цвета]
└── tote/
    └── [аналогичные цвета]
```

## 🎨 Доступные цвета

Согласно коду конфигуратора (`configurator-section.tsx`), поддерживаются следующие цвета:

| ID цвета | Название | HEX код | Файл изображения |
|----------|----------|---------|------------------|
| `black` | Black | `#000000` | `black.png` |
| `white` | White | `#FFFFFF` | `white.png` |
| `navy` | Navy | `#1a1a2e` | `navy.png` |
| `gray` | Gray | `#d1d1d1` | `gray.png` |
| `cream` | Cream | `#f5e6d3` | `cream.png` |
| `peach` | Peach | `#f4a89f` | `peach.png` |

## 📋 Требования к изображениям

### 1. **Формат файлов**
- **Основной формат**: PNG (с прозрачностью)
- **Альтернатива**: SVG (векторный формат)
- **Не рекомендуется**: JPG (нет прозрачности)

### 2. **Разрешение и размер**
- **Минимальное разрешение**: 1000x1000 пикселей
- **Рекомендуемое**: 2000x2000 пикселей (для Retina дисплеев)
- **Соотношение сторон**: 1:1 (квадрат)
- **Размер файла**: до 3-5 МБ (оптимизировать для веба)

### 3. **Визуальные требования**
- ✅ Прозрачный фон (PNG с альфа-каналом)
- ✅ Футболка по центру изображения
- ✅ Четкая зона для печати (область груди)
- ✅ Реалистичные тени и складки
- ✅ Цвет футболки должен соответствовать HEX коду

### 4. **Зона печати**
Дизайн пользователя размещается в центральной области:
- **Позиция по умолчанию**: X: 50%, Y: 40%
- **Размер по умолчанию**: 30% от размера холста
- **Диапазон позиционирования**: X: 20-80%, Y: 20-80%
- **Диапазон размера**: 10-60% от холста

## 🚀 Пошаговая инструкция загрузки

### Шаг 1: Подготовка изображений

1. **Создайте или получите изображения футболок** для каждого цвета
2. **Убедитесь, что фон прозрачный** (используйте Photoshop, GIMP или remove.bg)
3. **Оптимизируйте размер** (используйте TinyPNG или ImageOptim)
4. **Назовите файлы согласно ID цвета**:
   - `black.png`
   - `white.png`
   - `navy.png`
   - `gray.png`
   - `cream.png`
   - `peach.png`

### Шаг 2: Размещение файлов

```bash
# Перейдите в директорию проекта
cd /Users/zakhar/Desktop/llov/html/blooma/CascadeProjects/windsurf-project

# Скопируйте изображения в нужную папку
cp /путь/к/вашим/изображениям/*.png public/images/products/tshirt/
```

### Шаг 3: Проверка структуры

```bash
# Проверьте, что все файлы на месте
ls -la public/images/products/tshirt/
```

Должны быть видны:
```
black.png
white.png
navy.png
gray.png
cream.png
peach.png
```

### Шаг 4: Обновление конфигуратора (если нужно)

Текущий код конфигуратора использует **эмодзи** вместо реальных изображений:

```tsx
// Текущая реализация (строка 107-109)
<div className="text-9xl opacity-20">
  {selectedProduct.mockup}  // 👕 эмодзи
</div>
```

Чтобы использовать **реальные изображения**, нужно обновить код:

```tsx
// Новая реализация с изображениями
<div className="absolute inset-0 flex items-center justify-center">
  <img
    src={`/images/products/${selectedProduct.id}/${selectedColor.id}.png`}
    alt={`${selectedProduct.name} - ${selectedColor.name}`}
    className="w-full h-full object-contain"
  />
</div>
```

## 🔧 Интеграция с конфигуратором

### Вариант 1: Замена эмодзи на изображения (рекомендуется)

Обновите файл `src/features/home/configurator-section.tsx`:

```tsx
{/* Product Mockup - СТАРЫЙ КОД */}
<div className="absolute inset-0 flex items-center justify-center">
  <div className="text-9xl opacity-20">
    {selectedProduct.mockup}
  </div>
</div>

{/* Product Mockup - НОВЫЙ КОД */}
<div className="absolute inset-0 flex items-center justify-center p-8">
  <img
    src={`/images/products/${selectedProduct.id}/${selectedColor.id}.png`}
    alt={`${selectedProduct.name} - ${selectedColor.name}`}
    className="w-full h-full object-contain opacity-90"
    onError={(e) => {
      // Fallback на эмодзи если изображение не найдено
      e.currentTarget.style.display = 'none';
    }}
  />
</div>
```

### Вариант 2: Использование Next.js Image компонента (оптимизация)

```tsx
import Image from 'next/image';

{/* Product Mockup с оптимизацией */}
<div className="absolute inset-0 flex items-center justify-center p-8">
  <Image
    src={`/images/products/${selectedProduct.id}/${selectedColor.id}.png`}
    alt={`${selectedProduct.name} - ${selectedColor.name}`}
    fill
    className="object-contain opacity-90"
    priority
  />
</div>
```

## 📊 Текущее состояние изображений

### T-Shirt (футболки) ✅
- ✅ black.png (775 KB)
- ✅ white.png (3.5 MB) - **требует оптимизации**
- ✅ navy.png (1.7 MB)
- ✅ gray.png (1.6 MB)
- ✅ cream.png (660 KB)
- ✅ peach.png (1.6 MB)

### Hoodie (худи) ⚠️
- ⚠️ Все файлы одинакового размера (775 KB) - возможно плейсхолдеры

### Tote Bag (сумки) ✅
- ✅ Смешанные форматы (PNG, AVIF, SVG)

## 🎨 Рекомендации по дизайну

### Создание изображений футболок:

1. **Используйте мокапы**:
   - Placeit.net
   - Smartmockups.com
   - Mockup World
   - Freepik (бесплатные мокапы)

2. **Настройки экспорта**:
   - Формат: PNG-24 (с альфа-каналом)
   - Цветовой профиль: sRGB
   - Разрешение: 2000x2000px
   - Оптимизация: TinyPNG

3. **Зона печати**:
   - Отметьте область груди (примерно 30% от высоты)
   - Центрируйте по горизонтали
   - Оставьте отступы от краев

## 🔍 Проверка и тестирование

### 1. Проверка файлов
```bash
# Проверить размеры изображений
file public/images/products/tshirt/*.png

# Проверить прозрачность
identify -verbose public/images/products/tshirt/black.png | grep -i alpha
```

### 2. Тестирование в браузере
1. Запустите dev сервер: `npm run dev`
2. Откройте конфигуратор: `http://localhost:3000/#configurator`
3. Переключайте цвета и проверяйте отображение
4. Загрузите тестовый дизайн
5. Проверьте позиционирование на каждом цвете

### 3. Оптимизация производительности
```bash
# Оптимизировать все PNG изображения
npx @squoosh/cli --webp auto public/images/products/tshirt/*.png

# Или использовать ImageOptim (macOS)
open -a ImageOptim public/images/products/tshirt/
```

## 🐛 Устранение проблем

### Проблема: Изображение не отображается
**Решение**:
- Проверьте путь к файлу
- Убедитесь, что имя файла совпадает с ID цвета
- Проверьте права доступа к файлу

### Проблема: Изображение слишком большое
**Решение**:
- Оптимизируйте через TinyPNG
- Используйте WebP формат
- Уменьшите разрешение до 2000x2000px

### Проблема: Дизайн накладывается неправильно
**Решение**:
- Проверьте зону печати на изображении
- Настройте позицию по умолчанию в коде
- Убедитесь, что футболка центрирована

## 📝 Чеклист перед запуском

- [ ] Все 6 цветов футболок имеют PNG изображения
- [ ] Фон всех изображений прозрачный
- [ ] Размер изображений оптимизирован (< 1 МБ)
- [ ] Разрешение минимум 1000x1000px
- [ ] Футболки центрированы на изображении
- [ ] Зона печати четко определена
- [ ] Код конфигуратора обновлен для использования изображений
- [ ] Протестировано в браузере
- [ ] Fallback на эмодзи работает

## 🚀 Быстрый старт

```bash
# 1. Подготовьте изображения
# 2. Скопируйте в папку
cp ваши-изображения/*.png public/images/products/tshirt/

# 3. Оптимизируйте
npx @squoosh/cli --webp auto public/images/products/tshirt/*.png

# 4. Запустите dev сервер
npm run dev

# 5. Откройте конфигуратор
open http://localhost:3000/#configurator
```

## 📚 Дополнительные ресурсы

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [TinyPNG - Image Compression](https://tinypng.com/)
- [Remove.bg - Background Removal](https://www.remove.bg/)
- [Placeit - Mockup Generator](https://placeit.net/)

---

**Примечание**: Текущая версия конфигуратора использует эмодзи (👕) вместо реальных изображений. Следуйте разделу "Интеграция с конфигуратором" для обновления кода.
