# ✅ Переводы чекбоксов согласия завершены!

## 🎯 Что было сделано

### 1. Добавлены переводы в JSON файлы

#### messages/en.json
```json
"consent": {
  "privacy": {
    "label": "I agree to the",
    "link": "Privacy Policy",
    "required": "*",
    "error": "You must accept the Privacy Policy to continue",
    "description": "Your data will be processed according to our Privacy Policy. Required for order processing."
  },
  "marketing": {
    "label": "I agree to receive marketing communications from Blooma. I can withdraw this consent at any time.",
    "link": "Privacy Policy",
    "description": "Optional. We'll send you updates about new products, special offers, and printing tips."
  }
}
```

#### messages/pt.json
```json
"consent": {
  "privacy": {
    "label": "Concordo com a",
    "link": "Política de Privacidade",
    "required": "*",
    "error": "Deve aceitar a Política de Privacidade para continuar",
    "description": "Os seus dados serão processados de acordo com a nossa Política de Privacidade. Obrigatório para processar encomendas."
  },
  "marketing": {
    "label": "Concordo em receber comunicações de marketing da Blooma. Posso retirar este consentimento a qualquer momento.",
    "link": "Política de Privacidade",
    "description": "Opcional. Enviaremos atualizações sobre novos produtos, ofertas especiais e dicas de impressão."
  }
}
```

### 2. Обновлены компоненты

#### PrivacyConsentCheckbox
- ✅ Добавлен `useTranslations('consent.privacy')`
- ✅ Все тексты переведены:
  - Основной текст чекбокса
  - Ссылка на Privacy Policy
  - Звездочка обязательности (*)
  - Сообщение об ошибке
  - Описание под чекбоксом

#### MarketingConsentCheckbox
- ✅ Добавлен `useTranslations('consent.marketing')`
- ✅ Все тексты переведены:
  - Основной текст чекбокса
  - Ссылка на Privacy Policy
  - Описание под чекбоксом

## 📄 Проверка юридических страниц

Все необходимые юридические страницы существуют:

1. ✅ **Legal Notice** - `/src/app/legal-notice/`
2. ✅ **Privacy Policy** - `/src/app/privacy-policy/`
3. ✅ **Cookie Policy** - `/src/app/cookie-policy/`
4. ✅ **Terms of Service** - `/src/app/terms/`

Все ссылки в Footer уже используют переводы:
- `{t('legalNotice')}`
- `{t('privacyPolicy')}`
- `{t('cookiePolicy')}`
- `{t('termsOfService')}`

## 🌍 Результат

Теперь чекбоксы согласия полностью переведены на оба языка:

### Английская версия (/en)
- "I agree to the **Privacy Policy** *"
- "Your data will be processed according to our Privacy Policy. Required for order processing."
- "I agree to receive marketing communications from Blooma. I can withdraw this consent at any time. **Privacy Policy**"
- "Optional. We'll send you updates about new products, special offers, and printing tips."

### Португальская версия (/pt)
- "Concordo com a **Política de Privacidade** *"
- "Os seus dados serão processados de acordo com a nossa Política de Privacidade. Obrigatório para processar encomendas."
- "Concordo em receber comunicações de marketing da Blooma. Posso retirar este consentimento a qualquer momento. **Política de Privacidade**"
- "Opcional. Enviaremos atualizações sobre novos produtos, ofertas especiais e dicas de impressão."

## 📝 Измененные файлы

1. `/messages/en.json` - добавлена секция `consent`
2. `/messages/pt.json` - добавлена секция `consent`
3. `/src/components/privacy-consent-checkbox.tsx` - добавлен `useTranslations`
4. `/src/components/marketing-consent-checkbox.tsx` - добавлен `useTranslations`

## ✅ Готово!

Все тексты чекбоксов согласия теперь полностью переведены и соответствуют GDPR требованиям на обоих языках.
