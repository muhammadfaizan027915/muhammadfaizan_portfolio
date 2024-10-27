"use client";

import Input from "@ui/Input";
import Button from "@ui/Button";
import TextArea from "@ui/TextArea";
import toast from "react-hot-toast";
import sendMessage from "@actions/sendMessage";

export default function ContactForm() {

  async function handleSendMessage(formData: FormData) {
    const response = await sendMessage(formData);
    const success = response.success;
    toast[success ? "success" : "error"]?.(response?.message, {
      position: "bottom-center",
    });
  }

  return (
    <form className="flex flex-col mx-auto gap-4 max-w-2xl" action={handleSendMessage}>
      <Input placeholder="Enter your name" name="name" />
      <Input placeholder="Enter your email address" name="email" />
      <Input placeholder="Enter your phone number (Optional)" name="phone" />
      <TextArea placeholder="Write your message..." rows={8} name="message" />
      <Button title="Send Message" />
    </form>
  );
}
