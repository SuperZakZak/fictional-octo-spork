import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Get language information
    const acceptLanguage = request.headers.get('accept-language') || 'unknown';
    const browserLanguage = acceptLanguage.split(',')[0]?.split('-')[0] || 'unknown';
    
    // Get site language from referer or default
    const referer = request.headers.get('referer') || '';
    const siteLanguage = referer.includes('/pt') ? 'pt' : 
                        referer.includes('/en') ? 'en' : 
                        referer.includes('/ru') ? 'ru' : 
                        'en'; // default

    // Prepare webhook payload
    const webhookPayload = {
      event: 'price_list_download',
      email,
      siteLanguage,
      browserLanguage,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      referer,
    };

    // Send webhook to n8n
    const webhookUrl = 'https://n8n-production-9d5d.up.railway.app/webhook/price-ask';
    
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.error('Webhook failed:', await webhookResponse.text());
      }
    } catch (webhookError) {
      console.error('Webhook error:', webhookError);
      // Don't fail the request if webhook fails
    }

    return NextResponse.json({
      success: true,
      message: 'Price list download initiated',
    });

  } catch (error) {
    console.error('Price list download error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
