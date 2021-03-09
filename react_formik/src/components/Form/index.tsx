import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import styles from '../../style/Form.module.css';

const validation = Yup.object({
  firstName: Yup.string()
    .max(15, 'O nome deve ter no máximo 15 caracteres')
    .required('O campo não pode ser vazio'),
  lastName: Yup.string()
    .max(20, 'O sobrenome deve ter no máximo 20 caracteres')
    .required('O campo não pode ser vazio'),
  email: Yup.string()
    .email('Formato de email inválido')
    .required('O campo não pode ser vazio')
    .min(10, 'Email pequeno demais'),
});

export const SignupForm = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={validation}
      onSubmit={(values) => {
        console.log(values);

        alert(JSON.stringify(values, null, 2));
      }}
    >
      {
        // Função que será passada para o contexto do Formik
        (props) => (
          <form onSubmit={props.handleSubmit} className={styles.container}>
            <label>
              Nome
              <input
                className={styles.inputForm}
                id="firstName"
                type="text"
                {...props.getFieldProps('firstName')}
              />
            </label>

            {props.touched.firstName && props.errors.firstName ? (
              <div className={styles.errors}>{props.errors.firstName}</div>
            ) : null}

            <label>
              Sobrenome
              <input
                className={styles.inputForm}
                id="lastName"
                type="text"
                {...props.getFieldProps('lastName')}
              />
            </label>

            {props.touched.lastName && props.errors.lastName ? (
              <div className={styles.errors}>{props.errors.lastName}</div>
            ) : null}

            <label>
              Email
              <input
                className={styles.inputForm}
                id="email"
                type="email"
                {...props.getFieldProps('email')}
              />
            </label>

            {props.touched.email && props.errors.email ? (
              <div className={styles.errors}>{props.errors.email}</div>
            ) : null}

            <button type="submit">Enviar</button>
          </form>
        )
      }
    </Formik>
  );
};
