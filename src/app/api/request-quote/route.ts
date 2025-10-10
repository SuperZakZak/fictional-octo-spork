import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { parsePhoneNumber, isValidPhoneNumber } from "libphonenumber-js";
import { QUOTE_REQUEST_CONFIG } from "@/lib/constants";

// Validation schema
const quoteRequestSchema = z.object({
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  product: z.string().min(1, "Product is required"),
  color: z.string().min(1, "Color is required"),
  quantity: z.number().min(5, "Minimum quantity is 5"),
  designScreenshot: z.string().min(1, "Design screenshot is required"),
  siteLocale: z.string().optional(),
  browserLocale: z.string().optional(),
});

type QuoteRequestData = z.infer<typeof quoteRequestSchema>;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate request data
    const validationResult = quoteRequestSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Validation failed", 
          details: validationResult.error.flatten() 
        },
        { status: 400 }
      );
    }

    const data: QuoteRequestData = validationResult.data;

    // Validate phone number format
    if (!isValidPhoneNumber(data.phone)) {
      return NextResponse.json(
        { 
          success: false, 
          error: "Invalid phone number format" 
        },
        { status: 400 }
      );
    }

    // Parse and format phone number
    const phoneNumber = parsePhoneNumber(data.phone);
    const formattedPhone = phoneNumber.formatInternational();

    // Prepare webhook payload
    const webhookPayload = {
      event: "quote_request",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "Unknown",
      contact: {
        phone: formattedPhone,
        phoneRaw: data.phone,
        email: data.email || null,
      },
      design: {
        product: data.product,
        color: data.color,
        quantity: data.quantity,
        screenshot: data.designScreenshot, // Base64 image data
      },
      locale: {
        site: data.siteLocale || "en",
        browser: data.browserLocale || "en-US",
      },
      metadata: {
        ip: request.headers.get("x-forwarded-for") || 
            request.headers.get("x-real-ip") || 
            "Unknown",
        referer: request.headers.get("referer") || null,
      },
    };

    // Send webhook to n8n
    const webhookResponse = await fetch(QUOTE_REQUEST_CONFIG.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookPayload),
    });

    if (!webhookResponse.ok) {
      console.error("Webhook failed:", await webhookResponse.text());
      return NextResponse.json(
        { 
          success: false, 
          error: "Failed to send quote request. Please try again." 
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json({
      success: true,
      message: "Quote request sent successfully",
      data: {
        phone: formattedPhone,
        product: data.product,
        color: data.color,
        quantity: data.quantity,
      },
    });

  } catch (error) {
    console.error("Quote request error:", error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: "An unexpected error occurred. Please try again." 
      },
      { status: 500 }
    );
  }
}
