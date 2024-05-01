import z from "zod"


const registerValidation = z.object({
    name: z.string().min(2, { message: "invalid name" }),
    email: z.string().email(),
    password: z.string().min(6, { message: "invalid password" }),
});

const loginValidation = z.object({
    email: z.string().email(),
    password: z.string().min(3, { message: "invalid password" })
});

export { registerValidation, loginValidation }
