import { z } from "zod";

export const authSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
    name: z.string().min(1).max(255).default('').optional(),
});