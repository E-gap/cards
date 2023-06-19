import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './FormSign.module.css';

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Please input email'),
  password: Yup.string().required(),
});

function FormSign() {
  const submitForm = (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={submitForm}
    >
      <Form className={css.form}>
        <label className={css.label}>
          E-mail
          <Field name="email" />
          <ErrorMessage name="email" component="div" />
        </label>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <label className={css.label}>
          Confirm password
          <Field type="password" name="confirmpassword" />
          <ErrorMessage name="confirmpassword" component="div" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default FormSign;
