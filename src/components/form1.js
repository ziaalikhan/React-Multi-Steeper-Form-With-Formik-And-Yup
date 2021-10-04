import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';


const FormOne = ({ handleNext }) => {
  return (
      <div className='forms'>
    <Formik
      initialValues={{ firstName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext();
        }, 400);
      }}
    >
      <Form autoComplete='off'>
        <Field fullWidth name="firstName" component={TextField} label='First Name' />
        <ErrorMessage name="firstName" />

        <br />

        <button className='btn' type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

export default FormOne;