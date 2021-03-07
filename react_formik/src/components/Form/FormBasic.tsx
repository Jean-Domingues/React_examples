import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export const SignupForm = () => {
  const formik = useFormik({ // Iniciando um novo form com Formik
    initialValues: {  // Valores iniciais do nosso formulário
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({  //validação dos campos do formulário com yup
      firstName: Yup.string() // As chaves do objeto devem ser iguais ao initialValues
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => { // Função a ser executada com o submit do Form
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName" // o nome e id devem ser iguais aos que foram declarados no initialValues
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      {formik.touched.firstName && formik.errors.firstName ? ( 
        //Faz a verificação dos erros e se o usuário já visitou o campo no form
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
};