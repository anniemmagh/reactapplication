import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const validateUsername = (value) => {
  let error;
  if (!value) {
    error = 'Required';
  } else if (value === 'admin') {
    error = 'Nice try!';
  }
  return error;
};

const RegistrationForm = () => (
  <div>
    <h1>Registration</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={(values) => {
        // Handle form submission logic here
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" validate={validateEmail} />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" validate={validateUsername} />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default RegistrationForm;
