# 📐 Шаблон изображения футболки для конфигуратора

## 🎯 Визуальная схема

```
┌─────────────────────────────────────────┐
│                                         │
│         2000px × 2000px                 │
│         (квадратное изображение)        │
│                                         │
│    ┌─────────────────────────────┐     │
│    │                             │     │
│    │         ФУТБОЛКА            │     │
│    │                             │     │
│    │    ┌─────────────────┐      │     │
│    │    │                 │      │     │
│    │    │  ЗОНА ПЕЧАТИ    │      │     │
│    │    │   (30% высоты)  │      │     │
│    │    │                 │      │     │
│    │    │  Позиция:       │      │     │
│    │    │  X: 50% (центр) │      │     │
│    │    │  Y: 40%         │      │     │
│    │    │                 │      │     │
│    │    └─────────────────┘      │     │
│    │                             │     │
│    └─────────────────────────────┘     │
│                                         │
│    ПРОЗРАЧНЫЙ ФОН (PNG Alpha)          │
│                                         │
└─────────────────────────────────────────┘
```

## 📊 Технические параметры

### Размеры холста
- **Ширина**: 2000px
- **Высота**: 2000px
- **Соотношение**: 1:1 (квадрат)
- **DPI**: 72 (для веба)

### Футболка
- **Размер**: ~70-80% от холста
- **Позиция**: По центру (50%, 50%)
- **Ориентация**: Вид спереди
- **Цвет**: Соответствует HEX коду

### Зона печати (Print Area)
- **Ширина**: ~30-40% от ширины футболки
- **Высота**: ~30-40% от высоты футболки
- **Позиция X**: 50% (центр)
- **Позиция Y**: 40% (область груди)
- **Форма**: Прямоугольная область

### Формат файла
- **Тип**: PNG-24
- **Цветовой режим**: RGB + Alpha
- **Прозрачность**: Да (альфа-канал)
- **Размер**: < 1 МБ (оптимизировано)

## 🎨 Пример настроек в Photoshop

### 1. Создание нового документа
```
File → New
Width: 2000px
Height: 2000px
Resolution: 72 ppi
Color Mode: RGB Color
Background: Transparent
```

### 2. Размещение футболки
```
1. Импортируйте мокап футболки
2. Масштабируйте до ~70-80% холста
3. Центрируйте: Layer → Align → Horizontal Centers
4. Центрируйте: Layer → Align → Vertical Centers
```

### 3. Настройка цвета
```
1. Выберите слой футболки
2. Image → Adjustments → Hue/Saturation
3. Или используйте Color Overlay
4. Установите нужный HEX цвет
```

### 4. Экспорт
```
File → Export → Export As...
Format: PNG
Transparency: ✓ Checked
Quality: 80-90%
```

## 🎨 Цветовые коды для каждой футболки

### Black (Черная)
```css
HEX: #000000
RGB: rgb(0, 0, 0)
HSL: hsl(0, 0%, 0%)
```

### White (Белая)
```css
HEX: #FFFFFF
RGB: rgb(255, 255, 255)
HSL: hsl(0, 0%, 100%)
```

### Navy (Темно-синяя)
```css
HEX: #1a1a2e
RGB: rgb(26, 26, 46)
HSL: hsl(240, 28%, 14%)
```

### Gray (Серая)
```css
HEX: #d1d1d1
RGB: rgb(209, 209, 209)
HSL: hsl(0, 0%, 82%)
```

### Cream (Кремовая)
```css
HEX: #f5e6d3
RGB: rgb(245, 230, 211)
HSL: hsl(34, 61%, 89%)
```

### Peach (Персиковая)
```css
HEX: #f4a89f
RGB: rgb(244, 168, 159)
HSL: hsl(6, 79%, 79%)
```

## 📏 Зоны и отступы

### Безопасная зона (Safe Area)
```
Отступы от краев холста:
- Сверху: 10% (200px)
- Снизу: 10% (200px)
- Слева: 10% (200px)
- Справа: 10% (200px)
```

### Зона печати (Print Area)
```
Позиция:
- X: 50% (1000px от левого края)
- Y: 40% (800px от верхнего края)

Размер (по умолчанию):
- Ширина: 30% от холста (600px)
- Высота: авто (пропорционально дизайну)

Диапазон позиционирования:
- X: 20-80% (400px - 1600px)
- Y: 20-80% (400px - 1600px)

Диапазон размера:
- Минимум: 10% (200px)
- Максимум: 60% (1200px)
```

## 🖼️ Пример слоев в Photoshop

```
Layers Panel:
├── 📁 T-Shirt Mockup
│   ├── 🎨 Color Overlay (HEX цвет)
│   ├── 🌟 Highlights
│   ├── 🌑 Shadows
│   └── 👕 Base Shape
├── 📐 Print Area Guide (скрыть перед экспортом)
└── 🔲 Background (transparent)
```

## ✅ Чеклист перед экспортом

- [ ] Размер холста: 2000×2000px
- [ ] Футболка центрирована
- [ ] Цвет соответствует HEX коду
- [ ] Фон прозрачный (видна шахматная доска)
- [ ] Зона печати в области груди
- [ ] Нет лишних слоев (гайдов, текста)
- [ ] Качество изображения высокое
- [ ] Тени и блики реалистичные
- [ ] Формат: PNG-24 с альфа-каналом
- [ ] Имя файла: `{color}.png` (lowercase)

## 🔧 Быстрые команды Photoshop

### Центрирование слоя
```
1. Выберите слой футболки
2. Cmd/Ctrl + A (выделить всё)
3. Layer → Align → Horizontal Centers
4. Layer → Align → Vertical Centers
5. Cmd/Ctrl + D (снять выделение)
```

### Создание направляющих для зоны печати
```
1. View → New Guide...
2. Horizontal: 40% (800px)
3. Vertical: 50% (1000px)
4. Создайте дополнительные для границ зоны
```

### Оптимизация размера файла
```
1. File → Export → Export As...
2. Format: PNG
3. Reduce file size: ✓
4. Convert to sRGB: ✓
5. Metadata: None
```

## 📦 Пакетная обработка (Batch Processing)

Если нужно создать все 6 цветов:

### Photoshop Action
```
1. Window → Actions
2. Create New Action: "T-Shirt Color Change"
3. Запишите:
   - Изменение цвета (Hue/Saturation)
   - Экспорт PNG
4. File → Automate → Batch
5. Примените ко всем цветам
```

### ImageMagick (командная строка)
```bash
# Изменить цвет футболки
convert base-tshirt.png -fill "#000000" -colorize 100 black.png
convert base-tshirt.png -fill "#FFFFFF" -colorize 100 white.png
convert base-tshirt.png -fill "#1a1a2e" -colorize 100 navy.png
convert base-tshirt.png -fill "#d1d1d1" -colorize 100 gray.png
convert base-tshirt.png -fill "#f5e6d3" -colorize 100 cream.png
convert base-tshirt.png -fill "#f4a89f" -colorize 100 peach.png
```

## 🎯 Финальная проверка

### Визуальная проверка
1. Откройте все 6 изображений
2. Проверьте цвета рядом с HEX кодами
3. Убедитесь, что все футболки одинакового размера
4. Проверьте прозрачность фона

### Техническая проверка
```bash
# Проверить размеры
identify public/images/products/tshirt/*.png

# Проверить прозрачность
identify -verbose public/images/products/tshirt/black.png | grep -i alpha

# Проверить размер файлов
ls -lh public/images/products/tshirt/*.png
```

### Тест в конфигураторе
1. Запустите `npm run dev`
2. Откройте `http://localhost:3000/#configurator`
3. Переключайте цвета
4. Загрузите тестовый дизайн
5. Проверьте позиционирование

## 📚 Полезные ресурсы

### Мокапы футболок
- [Placeit T-Shirt Mockups](https://placeit.net/c/apparel/t-shirts)
- [Mockup World](https://www.mockupworld.co/free/category/t-shirt/)
- [Freepik T-Shirt Mockups](https://www.freepik.com/free-photos-vectors/t-shirt-mockup)

### Инструменты
- [TinyPNG](https://tinypng.com/) - оптимизация PNG
- [Remove.bg](https://www.remove.bg/) - удаление фона
- [Squoosh](https://squoosh.app/) - сжатие изображений

### Цветовые палитры
- [Coolors](https://coolors.co/) - генератор палитр
- [Adobe Color](https://color.adobe.com/) - цветовые схемы

---

**Готово!** Используйте этот шаблон для создания всех 6 изображений футболок.
