'use server'

import { sendEmail } from "../lib/Brevo";

export const handleSubmit = async (formData: FormData) => {
 const title = formData.get('title') ? formData.get('title') : console.log('Title is required');
 const to = formData.get('email') ? formData.get('email') : console.log('Email is required');
 const message = formData.get('content') ? formData.get('content') : console.log('Message is required');

 console.log({
   title,
   to,
   message
 })
 await sendEmail()
}
