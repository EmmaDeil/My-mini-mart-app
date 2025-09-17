// Utility functions for handling email subscriptions

// Google Forms submission utility
export const submitToGoogleForm = async (email) => {
  try {
    // Replace with your actual Google Form URL and field name
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
    const EMAIL_FIELD_NAME = "entry.YOUR_ENTRY_ID"; // Replace with actual entry ID

    const formData = new FormData();
    formData.append(EMAIL_FIELD_NAME, email);

    await fetch(GOOGLE_FORM_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors", // Required for Google Forms
    });

    return { success: true };
  } catch (error) {
    console.error("Google Form submission error:", error);
    return { success: false, error };
  }
};

// Webhook submission utility (for services like Zapier, Make.com)
export const submitToWebhook = async (email) => {
  try {
    const WEBHOOK_URL = "YOUR_WEBHOOK_URL"; // Replace with your webhook URL

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        timestamp: new Date().toISOString(),
        source: "Ladiel Innovations Website",
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      throw new Error("Webhook submission failed");
    }
  } catch (error) {
    console.error("Webhook submission error:", error);
    return { success: false, error };
  }
};
