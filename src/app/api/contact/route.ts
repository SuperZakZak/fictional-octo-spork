import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  product: z.string().min(1, "Please select a product"),
  quantity: z.string().min(1, "Please select a quantity"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // TODO: Integrate with your CRM (AmoCRM, HubSpot, etc.)
    // Example for webhook integration:
    /*
    const crmResponse = await fetch('YOUR_CRM_WEBHOOK_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CRM_API_KEY}`,
      },
      body: JSON.stringify({
        contact: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
        },
        deal: {
          product: validatedData.product,
          quantity: validatedData.quantity,
          notes: validatedData.message,
        },
      }),
    });

    if (!crmResponse.ok) {
      throw new Error('CRM integration failed');
    }
    */

    // TODO: Send email notification
    // Example using a service like SendGrid, Resend, or Nodemailer:
    /*
    await sendEmail({
      to: 'hey.b1001ma@gmail.com',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
        <p><strong>Product:</strong> ${validatedData.product}</p>
        <p><strong>Quantity:</strong> ${validatedData.quantity}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    });
    */

    // For now, just log the data (remove in production)
    console.log("Contact form submission:", validatedData);

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
