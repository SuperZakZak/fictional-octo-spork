#!/bin/bash

# Test contact form API endpoint

echo "Testing contact form API..."
echo ""

curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+351922280992",
    "product": "tshirt",
    "quantity": "20-50",
    "message": "This is a test message for the contact form integration.",
    "privacyConsent": true,
    "marketingConsent": false
  }' \
  -w "\n\nHTTP Status: %{http_code}\n"

echo ""
echo "Check the dev server terminal for logs!"
