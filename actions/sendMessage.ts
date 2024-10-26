"use server";

import { generateResponse } from "@/utils";
import { sendEmail } from "@/utils/emailer";
import { EMAIL_ADDRESS } from "@/utils/constants";

export default async function sendMessage(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  try {
    await sendEmail({
      to: EMAIL_ADDRESS,
      from: EMAIL_ADDRESS,
      subject: `New message recieved from ${email}`,
      text: `
        name: ${name}
        email: ${email}
        phone: ${phone || "N/A"}
        message: ${message}    
     `,
    });

    return generateResponse({
      message: "Message sent successfully!",
      success: true,
    });
  } catch (e) {
    return generateResponse({
      message: "Failed to send your message!",
      success: false,
    });
  }
}
