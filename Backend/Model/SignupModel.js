import mongoose from 'mongoose';

const signUpSchema = new mongoose.Schema(
    {
        username: String,
        email: String,
        password: String,
    },
    { timestamps: true }
);

export const User = mongoose.model("Signup", signUpSchema);
