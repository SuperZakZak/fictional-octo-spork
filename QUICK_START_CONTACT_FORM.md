# Quick Start: Contact Form Webhook Integration

## ✅ What's Done

Contact form now sends data to n8n webhook and shows success message to users.

## 🔗 Webhook URL

```
https://n8n-production-9d5d.up.railway.app/webhook/formblooma
```

## 📦 Webhook Payload

```json
{
  "event": "contact_form_submission",
  "timestamp": "2025-10-11T11:29:55.000Z",
  "contact": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+351922280992"
  },
  "inquiry": {
    "product": "tshirt",
    "quantity": "20-50",
    "message": "User message..."
  },
  "consent": {
    "privacy": true,
    "marketing": false
  },
  "locale": {
    "site": "en",
    "browser": "en-US"
  },
  "metadata": {
    "ip": "192.168.1.1",
    "referer": "https://blooma.pt/",
    "userAgent": "Mozilla/5.0..."
  }
}
```

## 🎯 User Experience

1. User fills form → clicks "Send Message"
2. Loading state: "Sending..."
3. Success message appears:
   - ✅ Green checkmark
   - "Thank You!"
   - "We've received your message and will contact you soon"
   - "Thank you for reaching out to us!"
4. Form resets after 5 seconds

## 🔧 n8n Setup (Quick)

### 1. Webhook Trigger
- URL: `/webhook/formblooma`
- Method: POST

### 2. Send Email
To: `hey.b1001ma@gmail.com`

Subject: `New Contact Form: {{ $json.contact.name }}`

Body:
```
Name: {{ $json.contact.name }}
Email: {{ $json.contact.email }}
Phone: {{ $json.contact.phone }}
Product: {{ $json.inquiry.product }}
Quantity: {{ $json.inquiry.quantity }}
Message: {{ $json.inquiry.message }}
```

### 3. Done! 🎉

## 🧪 Test

```bash
curl -X POST https://n8n-production-9d5d.up.railway.app/webhook/formblooma \
  -H "Content-Type: application/json" \
  -d '{"event":"contact_form_submission","timestamp":"2025-10-11T11:29:55.000Z","contact":{"name":"Test","email":"test@example.com","phone":"+351922280992"},"inquiry":{"product":"tshirt","quantity":"20-50","message":"Test message"},"consent":{"privacy":true,"marketing":false},"locale":{"site":"en","browser":"en-US"},"metadata":{"ip":"192.168.1.1","referer":"https://blooma.pt/","userAgent":"curl"}}'
```

## 📄 Full Documentation

- `CONTACT_FORM_IMPLEMENTATION.md` - Complete technical documentation
- `ИНСТРУКЦИЯ_КОНТАКТНАЯ_ФОРМА.md` - Russian guide

---

**Status**: ✅ Ready to use
