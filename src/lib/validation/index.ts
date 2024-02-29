import { z } from "zod";

export const SignUpSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must contain atleast 3 characters")
      .max(8, "Username must not exceed 8 characters"),
    email: z.string().email("Enter a vaid email"),
    password: z.string().min(8, "Password must be atleat 8 characters long"),
    confirmPassword: z.string(),
    isEducator: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password does not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().email("Enter a vaid email"),
  password: z.string().min(8, "Password must be atleat 8 characters long"),
});
