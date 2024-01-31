// tailwind css working. but page not included

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignupForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values,{resetForm}) => {
        // Handle form submission logic here
        axios
        .post("http://localhost:5000/api/register", values)
        .then((res) => {
          console.log(res.data);
          resetForm();
        })
        .catch((err) => {
          console.log(err);

        });
        console.log('Form data submitted:', values);
        resetForm()
      }}
    >
      <Form className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
          <Field type="text" id="username" name="username" className="w-full border p-2" />
          <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <Field type="email" id="email" name="email" className="w-full border p-2" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <Field type="password" id="password" name="password" className="w-full border p-2" />
          <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
        </div>

        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
          <Field type="password" id="confirmPassword" name="confirmPassword" className="w-full border p-2" />
          <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
        </div>

        <div className="mb-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Sign Up</button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignupForm;
