// LoginForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';


const LoginForm = () => {
    const navigateTo = useNavigate();

    const handleSubmit = async (values) => {
      try {
        // Send user login data to the server
        const response = await axios.post('http://localhost:5000/api/login', values);
  
        // Handle successful login
        console.log('Login successful', response.data);
  
        // Redirect to the homepage
        navigateTo('/homepage');
      } catch (error) {
        // Handle login failure
        console.error('Login failed', error);
      }
    };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
