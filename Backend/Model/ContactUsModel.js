import mongoose from 'mongoose';

const contactUsSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        message: String,
    },
    { timestamps: true }
);

export const ContactUs = mongoose.model("ContactUs", contactUsSchema);
