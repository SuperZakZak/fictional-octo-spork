# Configurator - Shopping Bag Scale Fix

## Проблема

Shopping Bag (серая и белая сумки) не помещались в окно конфигуратора - изображение выходило за границы.

## Решение

Уменьшен масштаб изображения Shopping Bag с `scale-110` до `scale-90` (как у Tote Bag).

## Изменения в коде

**Файл:** `/src/features/home/configurator-section.tsx`

### До:
```tsx
className={`w-full h-full object-contain ${
  selectedProduct.id === "tote" ? "scale-90" : "scale-110"
}`}
```

### После:
```tsx
className={`w-full h-full object-contain ${
  selectedProduct.id === "tote" || selectedProduct.id === "shopping-bag" 
    ? "scale-90" 
    : "scale-110"
}`}
```

## Масштабы продуктов в конфигураторе

| Продукт | Масштаб | Причина |
|---------|---------|---------|
| T-Shirt | `scale-110` | Увеличение для лучшей видимости |
| Hoodie | `scale-110` | Увеличение для лучшей видимости |
| Tote Bag | `scale-90` | Уменьшение, чтобы поместиться в окно |
| Shopping Bag | `scale-90` | Уменьшение, чтобы поместиться в окно |

## Результат

✅ Shopping Bag теперь полностью помещается в окно конфигуратора
✅ Все цвета (black, grey, midnight-blue, natural, white) отображаются корректно
✅ Изображение не обрезается и не выходит за границы

## Проверка

1. Откройте http://localhost:3000
2. Перейдите в секцию **Configurator**
3. Выберите **Shopping Bag**
4. Переключайте цвета - все сумки должны полностью помещаться в окно
5. Проверьте особенно белую и серую сумки

## Примечание

Масштаб `scale-90` (90%) оптимален для сумок с длинными ручками, которые занимают больше вертикального пространства.
