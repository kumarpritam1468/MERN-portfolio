const {z} = require("zod");

const contactSchema = z.object({
    name: z
    .string({required_error:"Name is required"}) 
    .trim()
    .min(3, {message:"Minimum 8 characters"})
    .max(50, {message:"Maximum 50 characters"}),
    email: z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email"})
    .min(3, {message:"Minimum 3 characters"})
    .max(50, {message:"Maximum 50 characters"}),
    message: z
    .string({required_error:"Message is required"})
    .trim()
    .min(3, {message:"Minimum 10 characters"})
    .max(50, {message:"Maximum 1000 characters"}),
})

module.exports = contactSchema;