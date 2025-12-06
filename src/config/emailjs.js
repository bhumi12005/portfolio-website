// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create a free account
// 3. Add your email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

// Prefer reading from environment variables for safer configuration
// Create a `.env` file at project root with:
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=template_xxx
// REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key

export const EMAILJS_CONFIG = {
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_xzfw5ws',
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YHEC8KVwieilW0Kiy'
};

// Example template for EmailJS:
// Subject: New Contact Form Message from {{from_name}}
// Body:
// Name: {{from_name}}
// Email: {{from_email}}
// Message: {{message}}
// 
// This message was sent from your portfolio website contact form.
