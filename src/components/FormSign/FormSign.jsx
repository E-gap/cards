import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './FormSign.module.css';
import PropTypes from 'prop-types';

import { BiShow } from 'react-icons/bi';

const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Please input email'),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
});

function FormSign({ sign }) {
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');

  const submitForm = (values, actions) => {
    //console.log(values);
    //console.log(actions);
    actions.resetForm();
    const userData = {
      email: values.email,
      password: values.password,
    };

    console.log(userData);
  };

  const toggleShowPassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text');
    } else {
      setTypePassword('password');
    }
  };

  const toggleShowConfirmPassword = () => {
    if (typeConfirmPassword === 'password') {
      setTypeConfirmPassword('text');
    } else {
      setTypeConfirmPassword('password');
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
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
          <Field type={typePassword} name="password" />
          <BiShow className={css.buttonHide} onClick={toggleShowPassword} />
          <ErrorMessage name="password" component="div" />
        </label>
        {sign ? (
          <label className={css.label}>
            Confirm password
            <Field type={typeConfirmPassword} name="confirmPassword" />
            <BiShow
              className={css.buttonHide}
              onClick={toggleShowConfirmPassword}
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </label>
        ) : (
          ''
        )}
        <button type="submit" className={css.submit}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default FormSign;

FormSign.propTypes = {
  sign: PropTypes.string,
};
