import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const downloadPriceListSchema = z.object({
  email: z.string().email("Invalid email address"),
  siteLocale: z.string().optional(),
  browserLocale: z.string().optional(),
  googleDriveUrl: z.string().optional(), // Made optional - will validate later if provided
});

// Webhook URL
const WEBHOOK_URL = "https://n8n-production-9d5d.up.railway.app/webhook/price-ask";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("📥 Received request body:", body);

    // Validate input
    const validatedData = downloadPriceListSchema.parse(body);
    console.log("✅ Validation passed:", validatedData);

    // Send webhook with event information
    try {
      const webhookPayload = {
        event: "price_list_download",
        email: validatedData.email,
        siteLocale: validatedData.siteLocale || "unknown",
        browserLocale: validatedData.browserLocale || "unknown",
        timestamp: new Date().toISOString(),
        userAgent: request.headers.get("user-agent") || "unknown",
      };

      console.log("🚀 Sending webhook to:", WEBHOOK_URL);
      console.log("📦 Webhook payload:", webhookPayload);

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      console.log("📡 Webhook response status:", webhookResponse.status);

      if (!webhookResponse.ok) {
        const errorText = await webhookResponse.text();
        console.error("❌ Webhook failed:", errorText);
        // Don't fail the entire request if webhook fails
      } else {
        console.log("✅ Webhook sent successfully!");
      }
    } catch (webhookError) {
      console.error("❌ Webhook error:", webhookError);
      // Don't fail the entire request if webhook fails
    }

    // Return success with the Google Drive URL for download
    return NextResponse.json(
      {
        success: true,
        message: "Price list download initiated",
        downloadUrl: validatedData.googleDriveUrl || null,
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

    console.error("Download price list error:", error);

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
