import React from 'react';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';
import "../CSS/LoginSignup.css";
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

const validationSchema = Yup.object({
  username: Yup.string().when('action', {
    is: 'Sign Up',
    then: Yup.string().required('Username is required'),
    otherwise: Yup.string().notRequired(),
  }),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  action: 'Login',
};

const LoginSignup = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle form submission logic here
        console.log('Form data submitted:', values);
      }}
    >
      <Form className='container'>
        <div className='header'>
          <div className='text'>{initialValues.action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          {initialValues.action === 'Login' ? (
            <div></div>
          ) : (
            <div className='input'>
              <img src={user_icon} alt='user icon' />
              <Field type='text' name='username' placeholder='Username' className='formik-input' />
              <ErrorMessage name='username' component='div' className='formik-error' />
            </div>
          )}

          <div className='input'>
            <img src={email_icon} alt='email icon' />
            <Field type='email' name='email' placeholder='Email' className='formik-input' />
            <ErrorMessage name='email' component='div' className='formik-error' />
          </div>

          <div className='input'>
            <img src={password_icon} alt='password icon' />
            <Field type='password' name='password' placeholder='Password' className='formik-input' />
            <ErrorMessage name='password' component='div' className='formik-error' />
          </div>
        </div>

        <SubmitButtons />
      </Form>
    </Formik>
  );
};

const SubmitButtons = () => {
  const { setFieldValue } = useFormikContext();

  return (
    <div className='submit-container'>
      <div
        className="submit gray"
        onClick={() => setFieldValue('action', 'Sign Up')}
      >
        Sign Up
      </div>
      <div
        className="submit"
        onClick={() => setFieldValue('action', 'Login')}
      >
        Login
      </div>
    </div>
  );
};

export default LoginSignup;
