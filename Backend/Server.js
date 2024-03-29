// server.js
import { User } from "./Model/SignupModel.js";
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import { connectDb } from "./Config/connectDB.js";
import cors from "cors" 
import { ContactUs } from './Model/ContactUsModel.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.use(cors())
app.use(bodyParser.json());

// Connect to MongoDB
connectDb()



// API route to handle user registration
app.post('/api/register', (req, res) => {
    console.log(req.body);
    User.create(req.body)
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json({ message: 'Registration successful' });
  });


// API route to handle user login

app.post('/api/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user in the database
      const user = await User.findOne({ email, password });
  
      if (user) {
        // User authenticated
        res.status(200).json({ message: 'Login DONE' });
      } else {
        // User not found or invalid credentials
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//   API Route to handle contact uspage
app.post('/submitForm', (req, res) => {
    console.log(req.body);
    ContactUs.create(req.body)
      .then((e) => {
        console.log(e);
      })
      .catch((err) => {
        console.log(err);
      });
    res.status(200).json({ message: 'Form submission successful' });
  });
  


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
