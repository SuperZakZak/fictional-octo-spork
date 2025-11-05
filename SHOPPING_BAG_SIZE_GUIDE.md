# Size Guide Added - Tote Bag & Shopping Bag

## Что добавлено

В секцию Products для **Tote Bag** и **Shopping Bag** добавлены **Size Guides** (Guia de Tamanhos) с точными размерами сумок.

## Размеры Tote Bag (OS - One Size)

| Параметр | Обозначение | Размер |
|----------|-------------|--------|
| Height (Altura) | A | 39 cm |
| Width (Largura) | C | 37 cm |
| Strap Length (Comprimento da Alça) | D | 65 cm |

## Размеры Shopping Bag

| Параметр | Обозначение | Размер |
|----------|-------------|--------|
| Height (Altura) | A | 37 cm |
| Length (Comprimento) | B | 49 cm |
| Width (Largura) | C | 14 cm |
| Strap Length (Comprimento da Alça) | D | 70 cm |

## Где отображается

Size Guide появляется для **Tote Bag** и **Shopping Bag** в секции Products, между блоками:
- **Available Sizes** (Tamanhos Disponíveis)
- **Product Features** (Características do Produto)

## Дизайн

### Tote Bag
- Карточка с glass-эффектом
- Сетка 2×2 с 3 параметрами (последний на всю ширину)
- Подзаголовок с "OS" (One Size)
- Параметры: A, C, D (без B - Length)

### Shopping Bag
- Карточка с glass-эффектом
- Сетка 2×2 для компактного отображения
- 4 параметра с буквенными обозначениями (A, B, C, D)
- Адаптивный дизайн для мобильных устройств

## Переводы

### Tote Bag - English (en.json)
```json
"tote": {
  "sizeGuide": {
    "title": "Size Guide",
    "subtitle": "Measurements in cm",
    "height": "Height",
    "width": "Width",
    "strapLength": "Strap Length"
  }
}
```

### Tote Bag - Portuguese (pt.json)
```json
"tote": {
  "sizeGuide": {
    "title": "Guia de Tamanhos",
    "subtitle": "Medidas em cm",
    "height": "Altura",
    "width": "Largura",
    "strapLength": "Comprimento da Alça"
  }
}
```

### Shopping Bag - English (en.json)
```json
"shoppingBag": {
  "sizeGuide": {
    "title": "Size Guide",
    "subtitle": "Measurements in cm",
    "height": "Height",
    "length": "Length",
    "width": "Width",
    "strapLength": "Strap Length"
  }
}
```

### Shopping Bag - Portuguese (pt.json)
```json
"shoppingBag": {
  "sizeGuide": {
    "title": "Guia de Tamanhos",
    "subtitle": "Medidas em cm",
    "height": "Altura",
    "length": "Comprimento",
    "width": "Largura",
    "strapLength": "Comprimento da Alça"
  }
}
```

## Проверка

1. Откройте http://localhost:3000
2. Перейдите в секцию **Products**
3. Выберите **Tote Bag** - увидите Size Guide с 3 параметрами (A, C, D) и "OS"
4. Выберите **Shopping Bag** - увидите Size Guide с 4 параметрами (A, B, C, D)
5. Переключите на португальский язык - переводы должны работать для обоих продуктов

## Примечание

Size Guide отображается **только** для **Tote Bag** и **Shopping Bag**. Для других продуктов (T-Shirt, Hoodie) этот блок не показывается.
