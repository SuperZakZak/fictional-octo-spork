# 🔧 Исправление проблемы с загрузкой изображений

## Проблема
Серая, персиковая и кремовая футболки не загружаются корректно.

## Решения

### Решение 1: Очистить кэш Next.js (РЕКОМЕНДУЕТСЯ)

```bash
# Остановите dev сервер (Ctrl+C)
# Затем выполните:
rm -rf .next
npm run dev
```

### Решение 2: Очистить кэш браузера

В браузере:
- **Mac**: Cmd + Shift + R
- **Windows**: Ctrl + Shift + R

Или:
1. Откройте DevTools (F12)
2. Правый клик на кнопке обновления
3. Выберите "Очистить кэш и жесткая перезагрузка"

### Решение 3: Проверить размер файлов

Возможно файлы слишком большие. Проверим:

```bash
ls -lh public/images/products/tshirt/*.png
```

Если файлы > 5MB, оптимизируйте их:
1. Откройте https://tinypng.com/
2. Загрузите файлы
3. Скачайте оптимизированные
4. Замените

### Решение 4: Проверить формат файлов

Убедитесь что это PNG с правильным цветовым профилем:

```bash
file public/images/products/tshirt/gray.png
file public/images/products/tshirt/peach.png
file public/images/products/tshirt/cream.png
```

### Решение 5: Переименовать и загрузить заново

Иногда помогает переименование:

```bash
cd public/images/products/tshirt/
mv gray.png gray_old.png
mv peach.png peach_old.png
mv cream.png cream_old.png
```

Затем загрузите файлы заново с именами:
- gray.png
- peach.png
- cream.png

## Быстрая проверка

После каждого решения проверьте:

1. Остановите сервер (Ctrl+C)
2. Запустите заново: `npm run dev`
3. Откройте http://localhost:3000
4. Очистите кэш браузера (Cmd+Shift+R)
5. Перейдите в Products → T-Shirt
6. Кликайте на проблемные цвета

## Дополнительная диагностика

Откройте DevTools (F12) → вкладка Network:
1. Кликните на серый цвет
2. Посмотрите запрос к `/images/products/tshirt/gray.png`
3. Проверьте статус (должен быть 200)
4. Если 404 - файл не найден
5. Если 500 - ошибка сервера

## Если ничего не помогло

Попробуйте конвертировать изображения:

```bash
# Установите ImageMagick (если нет)
brew install imagemagick

# Конвертируйте проблемные файлы
convert public/images/products/tshirt/gray.png -quality 85 public/images/products/tshirt/gray_new.png
convert public/images/products/tshirt/peach.png -quality 85 public/images/products/tshirt/peach_new.png
convert public/images/products/tshirt/cream.png -quality 85 public/images/products/tshirt/cream_new.png

# Замените старые файлы
mv public/images/products/tshirt/gray_new.png public/images/products/tshirt/gray.png
mv public/images/products/tshirt/peach_new.png public/images/products/tshirt/peach.png
mv public/images/products/tshirt/cream_new.png public/images/products/tshirt/cream.png
```
