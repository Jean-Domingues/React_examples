import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from '../../style/Form.module.css';

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(
        props // Função que será passada para o contexto do Formik
      ) => (
        <form onSubmit={props.handleSubmit} className={styles.container}>
          <label htmlFor="firstName">First Name</label>
          <input
            className={styles.inputForm}
            id="firstName"
            type="text"
            {...props.getFieldProps('firstName')}
          />
          {props.touched.firstName && props.errors.firstName ? (
            <div className={styles.errors}>{props.errors.firstName}</div>
          ) : null}

          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.inputForm}
            id="lastName"
            type="text"
            {...props.getFieldProps('lastName')}
          />
          {props.touched.lastName && props.errors.lastName ? (
            <div className={styles.errors}>{props.errors.lastName}</div>
          ) : null}

          <label htmlFor="email">Email Address</label>
          <input
            className={styles.inputForm}
            id="email"
            type="email"
            {...props.getFieldProps('email')}
          />
          {props.touched.email && props.errors.email ? (
            <div className={styles.errors}>{props.errors.email}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};
