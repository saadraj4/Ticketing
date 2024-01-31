// Import necessary dependencies
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

// Initial form values
const initialValues = {
  name: '',
  email: '',
  message: '',
};

// Function to handle form submission
const onSubmit = (values, { resetForm }) => {
  // Perform actions with form values (e.g., send data to server)
  axios
    .post("http://localhost:5000/submitForm", values)
    .then((res) => {
      console.log(res.data);
      resetForm();
    })
    .catch((err) => {
      console.log(err);

    });
  console.log('Form submitted:', values);
  // Optionally, reset the form after submission
  resetForm();
};

// ContactUs component
const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <Field as="textarea" id="message" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUs;
