const {z} = require("zod");

const registerSchema = z.object({
    name: z
    .string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Minimum 3 characters in Name"})
    .max(50, {message:"Maximum 50 characters in Name"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"Minimum 3 characters in Email"})
    .max(50, {message:"Maximum 50 characters in Email"}),
    phone: z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10, {message:"Minimum 10 digits in Phone no."})
    .max(10, {message:"Maximum 10 digits in Phone no."}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(3, {message:"Minimum 8 characters in Password"})
    .max(50, {message:"Maximum 50 characters in Password"}),
});

const loginSchema = z.object({
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"Minimum 3 characters in Email"})
    .max(50, {message:"Maximum 50 characters in Email"}),
    password: z
    .string({required_error:"Password is required"})
    .trim()
    .min(3, {message:"Minimum 8 characters in Password"})
    .max(50, {message:"Maximum 50 characters in Password"}),
});

module.exports = {registerSchema, loginSchema};