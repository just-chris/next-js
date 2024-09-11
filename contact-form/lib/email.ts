import { z } from "zod";
import { formSchema } from "./schemas";
import { Resend } from 'resend';
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailFormData: z.infer<typeof formSchema>) => {

  try {
    console.log(emailFormData);
    const { data, error } = await resend.emails.send({
      from: `${emailFormData.firstName} ${emailFormData.lastName} <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: emailFormData.subject,
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        lastName: emailFormData.lastName,
        message: emailFormData.message,
      }),
    });

    if (error) {
      console.error(error);
      // return res.status(400).json(error);
    }
    // res.status(200).json(data);
  } catch (error) {
    console.error(error);
      }
};