# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to EmailJS Dashboard
2. Click "Email Services" in the left sidebar
3. Click "Add New Service"
4. Choose your email provider (Gmail recommended)
5. Follow the setup instructions to connect your Gmail account
6. Note down the **Service ID**

## Step 3: Create Email Template
1. Click "Email Templates" in the left sidebar
2. Click "Create New Template"
3. Set up your template:
   - **Template Name**: Contact Form Message
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Content**:
     ```
     You have received a new message from your portfolio website!

     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     
     ---
     This message was sent from your portfolio contact form.
     ```
4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in the left sidebar
2. Click on "General" tab
3. Copy your **Public Key**

## Step 5: Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:
   ```javascript
   export const EMAILJS_CONFIG = {
     serviceID: 'your_actual_service_id',
     templateID: 'your_actual_template_id', 
     publicKey: 'your_actual_public_key'
   };
   ```

## Step 6: Test the Form
1. Deploy your website or test locally
2. Fill out the contact form
3. Check your email inbox for the message

## Alternative Options (if EmailJS doesn't work):

### Option 1: Netlify Forms
Add `netlify` attribute to your form tag:
```html
<form netlify>
```

### Option 2: Formspree
Use Formspree service with action URL:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID">
```

### Option 3: Direct mailto link
Replace form with a mailto button:
```html
<a href="mailto:bhumikasonekar3@gmail.com?subject=Contact from Portfolio">
  Send Email
</a>
```

## Current Status
- ✅ EmailJS library installed
- ✅ Contact form code updated
- ⏳ EmailJS configuration needed (follow steps above)

Once you complete the EmailJS setup, visitors will be able to send you messages directly to your Gmail inbox!
