const {z} = require("zod");

const registerSchema = z.object({
    name: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Minimum 3 characters"})
    .max(50, {message:"Maximum 50 characters"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"Minimum 3 characters"})
    .max(50, {message:"Maximum 50 characters"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message:"Minimum 10 characters"})
    .max(10, {message:"Maximum 10 characters"}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(3, {message:"Minimum 8 characters"})
    .max(50, {message:"Maximum 50 characters"}),
});

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"Minimum 3 characters"})
    .max(50, {message:"Maximum 50 characters"}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(3, {message:"Minimum 8 characters"})
    .max(50, {message:"Maximum 50 characters"}),
});

module.exports = {registerSchema, loginSchema};