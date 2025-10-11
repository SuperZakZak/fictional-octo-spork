# Contact Form n8n Webhook Integration

## Overview

The contact form on the Blooma website now sends all form submissions to an n8n webhook for automated processing. When users click "Send Message", their information is sent to n8n, and they receive a success message confirming that their inquiry was received.

## Features

✅ **Automatic webhook integration** - All form data sent to n8n  
✅ **User feedback** - Success message displayed after submission  
✅ **Error handling** - Graceful error messages if something goes wrong  
✅ **Privacy compliance** - GDPR consent checkboxes included  
✅ **Locale detection** - Browser and site locale automatically detected  
✅ **User metadata** - IP, user agent, and referer captured  

## Webhook Configuration

### Webhook URL
```
https://n8n-production-9d5d.up.railway.app/webhook/formblooma
```

### Webhook Payload Structure

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
    "message": "I need custom t-shirts for my company event..."
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

## Files Modified

### 1. `/src/lib/constants.ts`
Added `CONTACT_FORM_CONFIG` with webhook URL:

```typescript
export const CONTACT_FORM_CONFIG = {
  webhookUrl: "https://n8n-production-9d5d.up.railway.app/webhook/formblooma",
} as const;
```

### 2. `/src/app/api/contact/route.ts`
Updated API endpoint to:
- Validate form data with Zod schema
- Include privacy and marketing consent validation
- Detect browser and site locale
- Capture user metadata (IP, user agent, referer)
- Send webhook to n8n
- Handle errors gracefully (webhook failures don't affect user experience)

Key features:
```typescript
// Validation includes consent
const contactSchema = z.object({
  // ... other fields
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Privacy consent is required",
  }),
  marketingConsent: z.boolean().optional(),
});

// Webhook payload includes all data
const webhookPayload = {
  event: "contact_form_submission",
  timestamp: new Date().toISOString(),
  contact: { name, email, phone },
  inquiry: { product, quantity, message },
  consent: { privacy, marketing },
  locale: { site, browser },
  metadata: { ip, referer, userAgent },
};
```

### 3. `/src/features/home/contact-section.tsx`
Updated contact form component to:
- Call `/api/contact` endpoint on form submission
- Display success message: "We've received your message and will contact you soon"
- Show error messages if submission fails
- Reset form after 5 seconds
- Maintain smooth animations with Framer Motion

## User Flow

1. **User fills out form** with:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Product type (required)
   - Quantity (required)
   - Project details/message (required)
   - Privacy consent checkbox (required)
   - Marketing consent checkbox (optional)

2. **User clicks "Send Message"**
   - Form validates all required fields
   - Privacy consent is checked
   - Loading state shows "Sending..."

3. **Form submits to API**
   - Data validated with Zod
   - Locale and metadata detected
   - Webhook sent to n8n

4. **Success message displayed**
   - Green checkmark animation
   - "Thank You!" heading
   - "We've received your message and will contact you soon"
   - "Thank you for reaching out to us!"
   - Form resets after 5 seconds

5. **Error handling**
   - If webhook fails, user still sees success (logged server-side)
   - If validation fails, error message shown in red box
   - User can retry submission

## n8n Workflow Setup

### Recommended Workflow Steps

1. **Webhook Trigger**
   - Listen for POST requests on `/webhook/formblooma`
   - Parse JSON payload

2. **Data Processing**
   - Extract contact information
   - Format inquiry details
   - Check consent preferences

3. **Email Notification**
   - Send email to `hey.b1001ma@gmail.com`
   - Include all form data
   - Format nicely with HTML template

4. **CRM Integration** (Optional)
   - Add contact to CRM (AmoCRM, HubSpot, etc.)
   - Create deal/opportunity
   - Tag with product and quantity

5. **Telegram/Slack Notification** (Optional)
   - Send instant notification to team
   - Include contact details and message preview

6. **Auto-responder** (Optional)
   - Send confirmation email to customer
   - Include estimated response time
   - Provide additional resources

### Example Email Template

```html
<h2>New Contact Form Submission</h2>

<h3>Contact Information</h3>
<ul>
  <li><strong>Name:</strong> {{ $json.contact.name }}</li>
  <li><strong>Email:</strong> {{ $json.contact.email }}</li>
  <li><strong>Phone:</strong> {{ $json.contact.phone || 'Not provided' }}</li>
</ul>

<h3>Inquiry Details</h3>
<ul>
  <li><strong>Product:</strong> {{ $json.inquiry.product }}</li>
  <li><strong>Quantity:</strong> {{ $json.inquiry.quantity }}</li>
  <li><strong>Message:</strong></li>
</ul>
<p>{{ $json.inquiry.message }}</p>

<h3>Consent</h3>
<ul>
  <li><strong>Privacy Policy:</strong> {{ $json.consent.privacy ? 'Accepted' : 'Not accepted' }}</li>
  <li><strong>Marketing Communications:</strong> {{ $json.consent.marketing ? 'Opted in' : 'Opted out' }}</li>
</ul>

<h3>Metadata</h3>
<ul>
  <li><strong>Submitted:</strong> {{ $json.timestamp }}</li>
  <li><strong>Site Locale:</strong> {{ $json.locale.site }}</li>
  <li><strong>Browser Locale:</strong> {{ $json.locale.browser }}</li>
  <li><strong>IP Address:</strong> {{ $json.metadata.ip }}</li>
</ul>
```

## Testing

### Test the Integration

1. **Fill out the contact form** on the website
2. **Submit the form** with valid data
3. **Check n8n workflow** for incoming webhook
4. **Verify email** was sent to hey.b1001ma@gmail.com
5. **Confirm success message** appears on website

### Test Payload Example

```bash
curl -X POST https://n8n-production-9d5d.up.railway.app/webhook/formblooma \
  -H "Content-Type: application/json" \
  -d '{
    "event": "contact_form_submission",
    "timestamp": "2025-10-11T11:29:55.000Z",
    "contact": {
      "name": "Test User",
      "email": "test@example.com",
      "phone": "+351922280992"
    },
    "inquiry": {
      "product": "tshirt",
      "quantity": "20-50",
      "message": "This is a test message"
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
      "userAgent": "curl/7.64.1"
    }
  }'
```

## Error Handling

### Client-Side Errors
- **Validation errors**: Shown inline on form fields
- **Privacy consent missing**: Red error message under checkbox
- **Network errors**: Red error box above submit button
- **API errors**: User-friendly message displayed

### Server-Side Errors
- **Webhook failures**: Logged but don't affect user experience
- **Validation errors**: Returned to client with specific messages
- **Network timeouts**: Gracefully handled with retry logic

## Privacy & GDPR Compliance

✅ **Privacy consent required** - Users must accept privacy policy  
✅ **Marketing consent optional** - Users can opt-in to marketing  
✅ **Data minimization** - Only necessary data collected  
✅ **Transparent processing** - Users informed about data usage  
✅ **Secure transmission** - HTTPS for all communications  

## Maintenance

### Update Webhook URL
If you need to change the webhook URL:

1. Update `CONTACT_FORM_CONFIG.webhookUrl` in `/src/lib/constants.ts`
2. Redeploy the application
3. Test the new webhook endpoint

### Monitor Webhook Health
- Check n8n workflow execution logs
- Monitor email delivery rates
- Review error logs in API route
- Test form submission regularly

## Related Documentation

- `LEGAL_DOCUMENTATION_COMPLETE.md` - Privacy policy and legal compliance
- `COOKIE_CONSENT_GUIDE.md` - Cookie consent implementation
- `QUOTE_REQUEST_IMPLEMENTATION.md` - Similar webhook integration for quote requests
- `PRICE_LIST_DOWNLOAD_SETUP.md` - Price list download webhook

## Support

For issues or questions:
- **Email**: hey.b1001ma@gmail.com
- **Phone/WhatsApp**: +351922280992
- **Telegram**: @hey.blooma

---

**Implementation Date**: October 11, 2025  
**Status**: ✅ Complete and Production-Ready
