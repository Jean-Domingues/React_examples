import React from 'react';
import { useFormik } from 'formik';

// Como o componente Formik funciona
// Contexto que dá a origem da forma de utilização atual do Formik

// Criando o contexto
const FormikContext = React.createContext({});

export const Formik = ({ children, ...props }) => {

  // Recebe as props vindas do Form e aplica no useFormik
  const formikStateAndHelpers = useFormik(props);
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function'
        ? children(formikStateAndHelpers) //Caso seja uma função, a executa passando
        //passando como parâmetro o retorno de useFormik()
        : children}
    </FormikContext.Provider>
  );
};