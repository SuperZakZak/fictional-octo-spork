# 🚀 Quick Start - Gallery & Benefits Sections

## Что изменилось

✅ **Удалено**: Старая секция `UseCasesSection` с карточками  
✅ **Добавлено**: Две новые секции:
1. **Benefits Section** - Преимущества мерча (8 карточек с градиентами)
2. **Gallery Section** - Галерея изображений (grayscale → color эффект)

---

## 🎯 Быстрый запуск (3 шага)

### Шаг 1: Добавьте изображения

**Вариант А - Используйте свои изображения:**
```bash
# Поместите 15 JPEG и 1 GIF в папку:
/public/gallery/
  ├── image-1.jpg
  ├── image-2.jpg
  ├── ...
  ├── image-15.jpg
  └── video-1.gif
```

**Вариант Б - Используйте placeholder'ы:**
```bash
cd scripts
./create-placeholder-gallery.sh
```

### Шаг 2: Запустите dev сервер
```bash
npm run dev
```

### Шаг 3: Откройте браузер
```
http://localhost:3000
```

Прокрутите вниз до новых секций! 🎉

---

## 📸 Требования к изображениям

- **Формат**: JPEG (для фото), GIF (для анимации)
- **Размер**: 1200x1200px (квадрат)
- **Вес**: до 2MB
- **Количество**: 15 JPEG + 1 GIF = 16 файлов

---

## 🎨 Что вы увидите

### Benefits Section
- 8 карточек с иконками и градиентами
- Эффект свечения при наведении
- Адаптивная сетка (1-2-4 колонки)
- Анимации появления

### Gallery Section  
- 16 изображений в сетке
- **Серые по умолчанию** 🎨
- **Цветные при наведении** ✨
- Масштабирование при hover
- Lightbox при клике
- Иконка Play для GIF

---

## 🔧 Настройка

### Изменить тексты преимуществ
```typescript
// src/features/home/benefits-section.tsx
const benefits = [
  {
    title: "Ваш заголовок",
    description: "Ваше описание",
    gradient: "from-pink-500 to-rose-500",
    // ...
  }
];
```

### Изменить изображения галереи
```typescript
// src/features/home/gallery-section.tsx
const galleryItems = [
  {
    src: "/gallery/image-1.jpg",
    alt: "Описание изображения",
    type: "image", // или "video"
  }
];
```

---

## 📱 Адаптивность

| Устройство | Benefits | Gallery |
|-----------|----------|---------|
| Mobile (<768px) | 1 колонка | 2 колонки |
| Tablet (768-1024px) | 2 колонки | 3 колонки |
| Desktop (>1024px) | 4 колонки | 4 колонки |

---

## ✨ Ключевые эффекты

### Grayscale → Color
```css
/* Серое по умолчанию */
filter: grayscale(100%);

/* Цветное при hover */
filter: grayscale(0%);
transition: all 500ms;
```

### Масштабирование
```css
/* Увеличение при hover */
transform: scale(1.1);
```

### Градиентные иконки
- Pink → Rose
- Purple → Indigo  
- Blue → Cyan
- Green → Emerald
- И другие...

---

## 📂 Структура файлов

```
windsurf-project/
├── src/features/home/
│   ├── benefits-section.tsx    ← Новый
│   └── gallery-section.tsx     ← Новый
├── public/gallery/             ← Создана
│   ├── image-1.jpg
│   ├── ...
│   └── video-1.gif
└── scripts/
    └── create-placeholder-gallery.sh
```

---

## 🐛 Troubleshooting

### Изображения не показываются
```bash
# Проверьте наличие файлов
ls -lh public/gallery/

# Должно быть 15 JPG + 1 GIF
```

### Эффект grayscale не работает
- Обновите браузер до последней версии
- Проверьте, что используете Chrome/Firefox/Safari

### Placeholder'ы не загрузились
```bash
# Попробуйте вручную скачать одно изображение
curl -L -o public/gallery/test.jpg "https://picsum.photos/1200/1200"

# Проверьте размер файла
ls -lh public/gallery/test.jpg
```

---

## 📚 Документация

Полная документация:
- `GALLERY_AND_BENEFITS_SETUP.md` (English)
- `ГАЛЕРЕЯ_И_ПРЕИМУЩЕСТВА.md` (Русский)

---

## ✅ Готово!

Теперь ваш сайт имеет:
- ✨ Красивую секцию с преимуществами мерча
- 🖼️ Современную галерею с эффектом grayscale
- 📱 Полную адаптивность
- 🎨 Плавные анимации
- 🚀 Оптимизированную производительность

**Наслаждайтесь!** 🎉
