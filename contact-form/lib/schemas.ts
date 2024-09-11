import { z } from "zod";

export const formSchema = z.object({
 firstName: z.string().min(3).max(50),
 lastName: z.string().min(3).max(50),
 email: z.string().email(),
 subject: z.string().min(2).max(50),
 message: z.string().min(4).max(50),
})