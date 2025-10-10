# Quote Request Flow Diagram

## 📊 Visual Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER JOURNEY                             │
└─────────────────────────────────────────────────────────────────┘

1. USER DESIGNS PRODUCT
   ┌──────────────────┐
   │ Choose Product   │ → T-Shirt / Hoodie / Tote Bag
   │ Select Color     │ → Black / White / Navy / etc.
   │ Upload Design    │ → PNG / JPG / SVG
   │ Adjust Position  │ → Size, X, Y coordinates
   │ Set Quantity     │ → 5-1000 units
   └──────────────────┘
           ↓
2. CLICK "SEND ME QUOTE" BUTTON
   ┌──────────────────┐
   │ Button Clicked   │ → Validates design exists
   └──────────────────┘
           ↓
3. PHONE INPUT FORM APPEARS
   ┌──────────────────────────────┐
   │  📱 Your Phone Number        │
   │  [+351 922 280 992]          │
   │                              │
   │  [Send]  [Cancel]            │
   └──────────────────────────────┘
           ↓
4. USER ENTERS PHONE & CLICKS SEND
   ┌──────────────────┐
   │ Validate Phone   │ → libphonenumber-js
   │ Format Number    │ → +351 922 280 992
   └──────────────────┘
           ↓
5. SCREENSHOT CAPTURE
   ┌──────────────────┐
   │ html2canvas      │ → Capture preview div
   │ Convert to JPEG  │ → Quality: 85%
   │ Base64 Encode    │ → data:image/jpeg;base64,...
   └──────────────────┘
           ↓
6. API REQUEST
   ┌──────────────────────────────────┐
   │ POST /api/request-quote          │
   │                                  │
   │ Body: {                          │
   │   phone: "+351922280992"         │
   │   product: "T-Shirt"             │
   │   color: "Black"                 │
   │   quantity: 10                   │
   │   designScreenshot: "base64..."  │
   │   siteLocale: "en"               │
   │   browserLocale: "en-US"         │
   │ }                                │
   └──────────────────────────────────┘
           ↓
7. API VALIDATION
   ┌──────────────────┐
   │ Zod Schema       │ → Validate all fields
   │ Phone Check      │ → isValidPhoneNumber()
   │ Format Phone     │ → parsePhoneNumber()
   └──────────────────┘
           ↓
8. WEBHOOK TO N8N
   ┌─────────────────────────────────────────────────┐
   │ POST https://n8n.../webhook/quote-request       │
   │                                                 │
   │ {                                               │
   │   event: "quote_request",                       │
   │   timestamp: "2025-10-09T14:37:08.000Z",        │
   │   contact: {                                    │
   │     phone: "+351 922 280 992",                  │
   │     phoneRaw: "351922280992",                   │
   │     email: null                                 │
   │   },                                            │
   │   design: {                                     │
   │     product: "T-Shirt",                         │
   │     color: "Black",                             │
   │     quantity: 10,                               │
   │     screenshot: "data:image/jpeg;base64,..."    │
   │   },                                            │
   │   locale: {                                     │
   │     site: "en",                                 │
   │     browser: "en-US"                            │
   │   },                                            │
   │   metadata: {                                   │
   │     ip: "192.168.1.1",                          │
   │     referer: "https://blooma.pt/",              │
   │     userAgent: "Mozilla/5.0..."                 │
   │   }                                             │
   │ }                                               │
   └─────────────────────────────────────────────────┘
           ↓
9. SUCCESS RESPONSE
   ┌──────────────────────────────────┐
   │ ✅ Quote Request Sent!           │
   │                                  │
   │ We'll contact you soon with a    │
   │ personalized quote for your      │
   │ design.                          │
   └──────────────────────────────────┘
           ↓
10. AUTO-HIDE AFTER 5 SECONDS
    Form closes automatically


┌─────────────────────────────────────────────────────────────────┐
│                         N8N WORKFLOW                             │
└─────────────────────────────────────────────────────────────────┘

1. WEBHOOK TRIGGER
   ┌──────────────────┐
   │ Receive POST     │ → /webhook/quote-request
   │ Parse JSON       │ → Extract all fields
   └──────────────────┘
           ↓
2. EXTRACT SCREENSHOT
   ┌──────────────────────────────────┐
   │ const base64 = $json.design      │
   │   .screenshot.split(',')[1]      │
   │                                  │
   │ const buffer = Buffer.from(      │
   │   base64, 'base64'               │
   │ )                                │
   └──────────────────────────────────┘
           ↓
3. SAVE IMAGE
   ┌──────────────────┐
   │ Option A:        │ → Google Drive
   │ Option B:        │ → Supabase Storage
   │ Option C:        │ → Email Attachment
   └──────────────────┘
           ↓
4. FORMAT EMAIL
   ┌─────────────────────────────────────────┐
   │ Subject: 🎨 New Quote Request           │
   │                                         │
   │ Phone: {{$json.contact.phone}}          │
   │ Product: {{$json.design.product}}       │
   │ Color: {{$json.design.color}}           │
   │ Quantity: {{$json.design.quantity}}     │
   │                                         │
   │ Screenshot attached.                    │
   └─────────────────────────────────────────┘
           ↓
5. SEND EMAIL
   ┌──────────────────┐
   │ To: hey.b1001ma  │
   │     @gmail.com   │
   │                  │
   │ Attach: design-  │
   │ screenshot.jpg   │
   └──────────────────┘
           ↓
6. OPTIONAL: TELEGRAM
   ┌──────────────────┐
   │ Send to Bot      │ → @blooma_bot
   │ Include Link     │ → To screenshot
   └──────────────────┘
           ↓
7. OPTIONAL: DATABASE
   ┌──────────────────┐
   │ Save to DB       │ → For analytics
   │ Track Request    │ → Conversion tracking
   └──────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      ERROR HANDLING                              │
└─────────────────────────────────────────────────────────────────┘

ERROR: No Design Uploaded
   ┌──────────────────────────────────┐
   │ Alert: "Please upload a design   │
   │ first!"                          │
   └──────────────────────────────────┘

ERROR: Invalid Phone Number
   ┌──────────────────────────────────┐
   │ ❌ Please enter a valid phone    │
   │ number                           │
   └──────────────────────────────────┘

ERROR: Screenshot Capture Failed
   ┌──────────────────────────────────┐
   │ ❌ Failed to capture design      │
   │ screenshot                       │
   └──────────────────────────────────┘

ERROR: API Request Failed
   ┌──────────────────────────────────┐
   │ ❌ Failed to send quote request. │
   │ Please try again.                │
   └──────────────────────────────────┘

ERROR: Webhook Failed
   ┌──────────────────────────────────┐
   │ ❌ Failed to send quote request. │
   │ Please try again.                │
   │ (Logged in backend)              │
   └──────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      STATE MANAGEMENT                            │
└─────────────────────────────────────────────────────────────────┘

React State Variables:
┌────────────────────────────────────────────────────────┐
│ showPhoneInput: boolean     → Show/hide phone form    │
│ phoneNumber: string         → User input value        │
│ isSubmitting: boolean       → Loading state           │
│ submitSuccess: boolean      → Success state           │
│ submitError: string | null  → Error message           │
│ previewRef: RefObject       → Reference to preview    │
└────────────────────────────────────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                      ANIMATIONS                                  │
└─────────────────────────────────────────────────────────────────┘

1. Form Slide Down
   initial: { height: 0, opacity: 0 }
   animate: { height: "auto", opacity: 1 }
   duration: 0.3s

2. Success Scale In
   initial: { scale: 0.9, opacity: 0 }
   animate: { scale: 1, opacity: 1 }
   duration: 0.3s

3. Loading Spinner
   border-t-transparent
   animate-spin
   continuous rotation

4. Button Hover
   hover:bg-primary-600
   hover:shadow-xl
   transition-all


┌─────────────────────────────────────────────────────────────────┐
│                      DATA FLOW SUMMARY                           │
└─────────────────────────────────────────────────────────────────┘

Frontend (React)
    ↓ User Input
Validation (libphonenumber-js)
    ↓ Valid
Screenshot (html2canvas)
    ↓ Base64 Image
API Endpoint (/api/request-quote)
    ↓ Zod Validation
Webhook (n8n)
    ↓ POST Request
n8n Workflow
    ↓ Process
Email / Telegram / Database
    ↓ Notification
Admin (You)
    ↓ Contact Customer
Quote Sent
    ↓ Conversion
Order Placed ✅
```

---

## 🎯 Key Metrics to Track

1. **Conversion Funnel:**
   - Configurator visits
   - Designs uploaded
   - Quote requests submitted
   - Quotes sent by admin
   - Orders placed

2. **Performance:**
   - Screenshot capture time
   - API response time
   - Webhook delivery time
   - Email delivery time

3. **User Behavior:**
   - Most popular products
   - Most popular colors
   - Average quantity
   - Time spent in configurator

4. **Technical:**
   - Success rate
   - Error rate by type
   - Phone validation failures
   - Screenshot capture failures

---

## 📱 Mobile Considerations

- Phone input optimized for mobile keyboards
- Screenshot capture works on mobile browsers
- Form animations smooth on mobile
- Touch-friendly button sizes
- Responsive layout for all screen sizes

---

## 🔐 Security Considerations

- Phone numbers validated before sending
- No sensitive data stored in frontend
- API endpoint validates all inputs
- Webhook uses HTTPS
- Rate limiting recommended (5 requests per IP per 15 min)
- CORS configured properly
- Input sanitization on backend

---

## 🚀 Performance Optimizations

- Screenshot captured at 85% quality (balance size/quality)
- Max screenshot size: 1200x1200px
- Base64 encoding for easy transmission
- Async/await for non-blocking operations
- Loading states prevent double submissions
- Form auto-closes after 5 seconds
- Debounced phone input validation

---

**Status:** ✅ Production Ready
