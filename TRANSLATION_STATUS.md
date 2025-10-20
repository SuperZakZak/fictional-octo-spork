# Статус перевода сайта на португальский

## ✅ Выполнено

### 1. Переводы добавлены в JSON файлы
- ✅ `messages/en.json` - добавлены все переводы для 7 секций
- ✅ `messages/pt.json` - добавлены все переводы на португальский

### 2. Компоненты обновлены для использования `useTranslations`
- ✅ **TechnologiesSection** - полностью переведен
- ✅ **ProductsSection** - полностью переведен
- ✅ **PricingSection** - полностью переведен

## ⏳ Осталось сделать

### 3. Обновить оставшиеся 4 компонента

#### ConfiguratorSection (`src/features/home/configurator-section.tsx`)
Нужно добавить:
```typescript
import { useTranslations } from "next-intl";

export function ConfiguratorSection() {
  const t = useTranslations('configurator');
  // ...
}
```

Заменить тексты:
- Строка 252: `Design <span>Configurator</span>` → `{t('title').split(' ')[0]} <span>{t('titleHighlight')}</span>`
- Строка 255: `Upload your design...` → `{t('subtitle')}`
- Строка 322: `Upload your design to preview` → `{t('uploadToPreview')}`
- Строка 323: `Click here to upload` → `{t('clickToUpload')}`
- Строка 336: `Adjust Design` → `{t('adjustDesign')}`
- Строка 340: `Size` → `{t('size')}`
- Строка 354: `Horizontal` → `{t('horizontal')}`
- Строка 365: `Vertical` → `{t('vertical')}`
- Строка 382: `Remove Design` → `{t('removeDesign')}`
- Строка 398: `1. Choose Product` → `{t('step1')}`
- Строка 422: `2. Choose Color` → `{t('step2')}`
- Строка 439: `💡 Need other colors...` → `{t('needOtherColors')}`
- Строка 450: `3. Enter Quantity` → `{t('step3')}`
- Строка 453: `Number of items` → `{t('numberOfItems')}`
- Строка 462: `Enter quantity` → `{t('enterQuantity')}`
- Строка 465: `Minimum order: 5 items` → `{t('minimumOrder')}`
- Строка 472: `4. Get Your Quote` → `{t('step4')}`
- Строка 475: `💡 You can request...` → `{t('canRequestWithout')}`
- Строка 486: `Send Me Quote` → `{t('sendMeQuote')}`
- Строка 505: `Your Phone Number` → `{t('yourPhone')}`
- Строка 514: `+351 922 280 992` → `{t('phonePlaceholder')}`
- Строка 537: `Send` → `{t('send')}`
- Строка 532: `Sending...` → `{t('sending')}`
- Строка 550: `Cancel` → `{t('cancel')}`
- Строка 562: `Quote Request Sent!` → `{t('quoteSent')}`
- Строка 565: `We'll contact you soon...` → `{t('contactSoon')}`
- Строка 581: `WhatsApp` → `{t('whatsapp')}`
- Строка 589: `Telegram` → `{t('telegram')}`
- Строка 598: `💡 Design Tips` → `{t('designTips')}`
- Строки 600-603: Массив tips → `{(t.raw('tips') as string[]).map((tip, i) => <li key={i}>• {tip}</li>)}`

#### QuizSection (`src/features/home/quiz-section.tsx`)
Нужно добавить:
```typescript
import { useTranslations } from "next-intl";

export function QuizSection() {
  const t = useTranslations('quiz');
  // ...
}
```

Заменить:
- Строка 152-153: Заголовок → `{t('title').split(' ').slice(0, 3).join(' ')} <span>{t('titleHighlight')}</span>`
- Строка 156: Subtitle → `{t('subtitle')}`
- Строка 175: `Question {currentQuestion + 1} of {questions.length}` → `{t('question')} {currentQuestion + 1} {t('of')} {questions.length}`
- Строка 251: `Quiz Complete!` → `{t('quizComplete')}`
- Строка 257: `We Recommend:` → `{t('weRecommend')}`
- Строка 267: `Why this works for you:` → `{t('whyWorks')}`
- Строка 290: `Start Your Design` → `{t('startDesign')}`
- Строка 296: `Contact Us` → `{t('contactUs')}`
- Строка 305: `Retake Quiz` → `{t('retakeQuiz')}`
- Строка 229: `Previous Question` → `{t('previousQuestion')}`

**Важно:** Вопросы и результаты квиза нужно брать из переводов:
```typescript
const questions = t.raw('questions') as Array<{question: string; options: string[]}>;
const result = calculateResult();
const resultData = t.raw(`results.${result}`) as {method: string; icon: string; description: string; benefits: string[]};
```

#### ContactSection (`src/features/home/contact-section.tsx`)
Нужно добавить:
```typescript
import { useTranslations } from "next-intl";

export function ContactSection() {
  const t = useTranslations('contact');
  // ...
}
```

Заменить все тексты на `{t('ключ')}`:
- Строка 142-143: Заголовок
- Строка 146: Subtitle
- Строка 158: `Send Us a Message` → `{t('sendMessage')}`
- Строка 169: `Thank You!` → `{t('thankYou')}`
- Строка 171: `We've received...` → `{t('receivedMessage')}`
- Строка 174: `Thank you for reaching...` → `{t('thankYouReaching')}`
- Строка 182: `Your Name *` → `{t('yourName')}`
- Строка 191: `John Doe` → `{t('namePlaceholder')}`
- Строка 198: `Email *` → `{t('email')}`
- Строка 207: `john@example.com` → `{t('emailPlaceholder')}`
- Строка 213: `Phone` → `{t('phone')}`
- Строка 221: `+351922280992` → `{t('phonePlaceholder')}`
- Строка 230: `Product Type *` → `{t('productType')}`
- Строка 239-243: Опции select → использовать `{t('selectProduct')}`, `{t('tshirt')}`, `{t('hoodie')}`, `{t('tote')}`, `{t('other')}`
- Строка 249: `Quantity *` → `{t('quantity')}`
- Строка 258-262: Опции quantity → `{t('selectQuantity')}`, `{t('quantity1-20')}`, и т.д.
- Строка 270: `Project Details *` → `{t('projectDetails')}`
- Строка 279: placeholder → `{t('projectPlaceholder')}`
- Строка 325: `Send Message` → `{t('sendMessageBtn')}`
- Строка 320: `Sending...` → `{t('sending')}`
- Строка 359: `Contact Information` → `{t('contactInformation')}`
- Строка 374: `Email` → `{t('emailLabel')}`
- Строка 407: `Phone / WhatsApp / Telegram` → `{t('phoneLabel')}`
- Строка 440: `Location` → `{t('location')}`
- Строка 466: `Quick Contact` → `{t('quickContact')}`
- Строка 469: `Prefer instant messaging...` → `{t('preferInstant')}`
- Строка 480: `Message on WhatsApp` → `{t('messageWhatsApp')}`
- Строка 490: `Message on Telegram` → `{t('messageTelegram')}`
- Строка 497: `Business Hours` → `{t('businessHours')}`
- Строка 500: `Monday - Friday` → `{t('mondayFriday')}`
- Строка 501: `9:00 AM - 6:00 PM` → `{t('hours9-6')}`
- Строка 504: `Saturday` → `{t('saturday')}`
- Строка 505: `10:00 AM - 2:00 PM` → `{t('hours10-2')}`
- Строка 508: `Sunday` → `{t('sunday')}`
- Строка 509: `Closed` → `{t('closed')}`

## 📝 Инструкция по завершению

1. Откройте каждый из 4 файлов
2. Добавьте `import { useTranslations } from "next-intl";` в начало
3. Добавьте `const t = useTranslations('имя_секции');` в начало функции компонента
4. Замените все хардкоженные тексты на `{t('ключ')}`
5. Для массивов используйте `{(t.raw('ключ') as тип[]).map(...)}`

## ✅ Проверка

После завершения проверьте:
1. Запустите `npm run dev`
2. Откройте `/en` - должен быть английский
3. Откройте `/pt` - должен быть португальский
4. Проверьте все 7 секций на обеих языках
5. Убедитесь, что нет ошибок TypeScript

## 🎯 Результат

После завершения все 7 блоков сайта будут полностью переведены на португальский:
1. ✅ TechnologiesSection
2. ✅ ProductsSection
3. ✅ PricingSection
4. ⏳ ConfiguratorSection
5. ⏳ QuizSection
6. ⏳ ContactSection
7. ✅ Navigation (уже использует переводы)
