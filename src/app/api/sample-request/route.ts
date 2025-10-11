import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      // Step 1 - Company Information
      companyName,
      industry,
      companySize,
      website,
      
      // Step 2 - Contact Information
      fullName,
      professionalTitle,
      email,
      phone,
      country,
      
      // Step 3 - Request Details
      professionalIntent,
      orderQuantity,
      orderTimeframe,
      additionalRequirements,
      
      // Additional context
      serviceName,
      referenceId
    } = body;

    // Validate required fields
    if (!email || !fullName || !companyName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Debug environment variables (remove in production)
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passLength: process.env.SMTP_PASS?.length, // Don't log actual password
    });

    // Create transporter (configure with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content for the company (internal notification)
    const companyEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Sample Request - ${serviceName || 'Service'}
        </h2>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Reference ID:</strong> ${referenceId}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <h3 style="color: #374151; margin-top: 30px;">Company Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Company Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${companyName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Industry:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${industry || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Company Size:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${companySize || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Website:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${website || 'Not provided'}</td></tr>
        </table>

        <h3 style="color: #374151; margin-top: 30px;">Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Full Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${fullName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Title:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${professionalTitle || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${phone || 'Not provided'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Country:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${country || 'Not specified'}</td></tr>
        </table>

        <h3 style="color: #374151; margin-top: 30px;">Request Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Order Quantity:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${orderQuantity || 'Not specified'}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;"><strong>Timeframe:</strong></td><td style="padding: 8px; border-bottom: 1px solid #e5e7eb;">${orderTimeframe || 'Not specified'}</td></tr>
        </table>

        ${professionalIntent ? `
        <h4 style="color: #374151; margin-top: 20px;">Professional Intent:</h4>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
          ${professionalIntent}
        </div>
        ` : ''}

        ${additionalRequirements ? `
        <h4 style="color: #374151; margin-top: 20px;">Additional Requirements:</h4>
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
          ${additionalRequirements}
        </div>
        ` : ''}

        <div style="margin-top: 30px; padding: 20px; background-color: #fef3c7; border-radius: 8px; border: 1px solid #f59e0b;">
          <p style="margin: 0; color: #92400e;"><strong>Action Required:</strong> Please follow up with this sample request within 24 hours.</p>
        </div>
      </div>
    `;

    // Confirmation email for the customer
    const customerEmailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Sample Request Confirmation
        </h2>
        
        <p>Dear ${fullName},</p>
        
        <p>Thank you for your interest in our ${serviceName || 'services'}. We have successfully received your sample request.</p>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
          <p style="margin: 0;"><strong>Reference ID:</strong> ${referenceId}</p>
          <p style="margin: 5px 0 0 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>

        <h3 style="color: #374151;">What happens next?</h3>
        <ul style="color: #6b7280; line-height: 1.6;">
          <li>Our sales team will review your request within 24 hours</li>
          <li>We will contact you via email or phone to discuss your requirements</li>
          <li>Sample preparation and shipping details will be provided</li>
          <li>You will receive tracking information once the sample is dispatched</li>
        </ul>

        <div style="background-color: #ecfdf5; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981;">
          <p style="margin: 0; color: #065f46;"><strong>Need immediate assistance?</strong></p>
          <p style="margin: 5px 0 0 0; color: #065f46;">Contact our sales team at sales@veretee.com or call +1 (555) 123-4567</p>
        </div>

        <p>Best regards,<br>
        <strong>Veretee Sales Team</strong></p>
      </div>
    `;

    // Send email to company
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.COMPANY_EMAIL || 'sales@veretee.com',
      subject: `New Sample Request - ${referenceId}`,
      html: companyEmailContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: `Sample Request Confirmation - ${referenceId}`,
      html: customerEmailContent,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Sample request submitted successfully',
        referenceId 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending sample request email:', error);
    return NextResponse.json(
      { error: 'Failed to submit sample request' },
      { status: 500 }
    );
  }
}
