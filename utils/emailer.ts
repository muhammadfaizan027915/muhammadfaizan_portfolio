import { createTransport, SendMailOptions } from "nodemailer";

export function sendEmail(options: SendMailOptions) {
  const transport = createTransport({
    service: process.env.EMIAL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transport.sendMail(options);
}
