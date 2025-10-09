import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const downloadPriceListSchema = z.object({
  email: z.string().email("Invalid email address"),
  siteLocale: z.string().optional(),
  browserLocale: z.string().optional(),
  googleDriveUrl: z.string().url("Invalid Google Drive URL"),
});

// Webhook URL
const WEBHOOK_URL = "https://n8n-production-9d5d.up.railway.app/webhook/price-ask";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = downloadPriceListSchema.parse(body);

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

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error("Webhook failed:", await webhookResponse.text());
        // Don't fail the entire request if webhook fails
      }
    } catch (webhookError) {
      console.error("Webhook error:", webhookError);
      // Don't fail the entire request if webhook fails
    }

    // Return success with the Google Drive URL for download
    return NextResponse.json(
      {
        success: true,
        message: "Price list download initiated",
        downloadUrl: validatedData.googleDriveUrl,
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
