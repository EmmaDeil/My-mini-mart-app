# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your EmailJS dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your email account: ladeil.innovations@gmail.com
5. Note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Newsletter Subscription - Ladiel Innovations

Hi,

You have a new newsletter subscription!

Subscriber Email: {{subscriber_email}}
Subscription Date: {{subscription_date}}

Best regards,
Ladeil Innovations Website
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## Step 5: Update Code
Replace the placeholders in Home.jsx:
- `YOUR_SERVICE_ID` → Your actual Service ID
- `YOUR_TEMPLATE_ID` → Your actual Template ID  
- `YOUR_PUBLIC_KEY` → Your actual Public Key

## Step 6: Test
1. Save the file
2. Test the subscription form
3. Check your email: ladeil.innovations@gmail.com

## Monthly Limits (Free Plan)
- 200 emails per month
- Upgrade for more if needed

## Alternative Solutions

### Option 2: Netlify Forms (If using Netlify)
```html
<form name="newsletter" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="newsletter" />
  <!-- your form fields -->
</form>
```

### Option 3: Google Forms
Create a Google Form and embed it, or use Google Apps Script to send emails.

### Option 4: Backend Service
Set up a simple Node.js backend with Nodemailer for more control.