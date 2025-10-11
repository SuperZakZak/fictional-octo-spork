import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { CONTACT_FORM_CONFIG } from "@/lib/constants";
import { detectBrowserLocale, detectSiteLocale } from "@/lib/locale-utils";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional().or(z.literal("")),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please select a quantity"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Privacy consent is required",
  }),
  marketingConsent: z.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("Received contact form data:", body);

    // Validate input
    const validatedData = contactSchema.parse(body);
    console.log("Validated data:", validatedData);

    // Detect locale information
    const browserLocale = detectBrowserLocale(request);
    const siteLocale = detectSiteLocale(request);

    // Get user metadata
    const userAgent = request.headers.get("user-agent") || "Unknown";
    const referer = request.headers.get("referer") || "";
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "Unknown";

    // Prepare webhook payload
    const webhookPayload = {
      event: "contact_form_submission",
      timestamp: new Date().toISOString(),
      contact: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone || null,
      },
      inquiry: {
        product: validatedData.product,
        quantity: validatedData.quantity,
        message: validatedData.message,
      },
      consent: {
        privacy: validatedData.privacyConsent,
        marketing: validatedData.marketingConsent || false,
      },
      locale: {
        site: siteLocale,
        browser: browserLocale,
      },
      metadata: {
        ip,
        referer,
        userAgent,
      },
    };

    // Send to n8n webhook
    try {
      const webhookResponse = await fetch(CONTACT_FORM_CONFIG.webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error("Webhook failed:", await webhookResponse.text());
        // Don't throw error - we still want to show success to user
      }
    } catch (webhookError) {
      console.error("Webhook error:", webhookError);
      // Don't throw error - we still want to show success to user
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation error",
          errors: error.errors,
        },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
