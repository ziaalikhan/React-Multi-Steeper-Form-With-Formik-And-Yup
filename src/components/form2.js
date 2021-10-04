import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {TextField} from 'formik-material-ui'
import * as Yup from 'yup';


const FormTwo = ({ handleNext }) => {
  return (
    <div className='forms'>
    <Formik
      initialValues={{lastName: '' }}
      validationSchema={Yup.object({
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          // setSubmitting(false);
          handleNext()
        }, 400);
      }}
    >
     <Form autoComplete='off'>
        <Field fullWidth name="lastName" component={TextField} label='Last Name' />
        <ErrorMessage name="lastName" />

        <br />

        <button className='btn' type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

export default FormTwo;