import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import css from './FormSign.module.css';
import PropTypes from 'prop-types';
import { BiShow } from 'react-icons/bi';
import { register, login } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

function FormSign({ sign, closeModal }) {
  const [typePassword, setTypePassword] = useState('password');
  const [typeConfirmPassword, setTypeConfirmPassword] = useState('password');
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    name:
      sign === 'signUp'
        ? Yup.string().required('Please input name')
        : Yup.string(),
    email: Yup.string().required('Please input email'),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  });

  const submitForm = (values, actions) => {
    actions.resetForm();
    const userDataForRegister = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const userDataForLogin = {
      email: values.email,
      password: values.password,
    };

    closeModal();

    if (sign === 'signUp') {
      dispatch(register(userDataForRegister));
    } else {
      dispatch(login(userDataForLogin));
    }
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
      initialValues={{ name: '', email: '', password: '', confirmPassword: '' }}
      validationSchema={SignupSchema}
      onSubmit={submitForm}
    >
      <Form className={css.form}>
        {sign === 'signUp' && (
          <label className={css.label}>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
        )}
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
        {sign === 'signUp' && (
          <label className={css.label}>
            Confirm password
            <Field type={typeConfirmPassword} name="confirmPassword" />
            <BiShow
              className={css.buttonHide}
              onClick={toggleShowConfirmPassword}
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </label>
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
  closeModal: PropTypes.func.isRequired,
};
