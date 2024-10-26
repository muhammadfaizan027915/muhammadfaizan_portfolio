import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createTransport, SendMailOptions } from "nodemailer";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateResponse({
  data = null,
  success = true,
  message = null,
}: {
  success?: boolean;
  data?: Object | null;
  message?: string | null;
}) {
  return { data, success, message };
}
