import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {TextField} from 'formik-material-ui';
import * as Yup from 'yup';


const FormThree = ({ handleNext }) => {
  return (
    <div className='forms'>
    <Formik
      initialValues={{  email: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          handleNext()
        }, 400);
      }}
    >
      <Form autoComplete='off'>
        <Field fullWidth name="email" component={TextField} label='Enter Your Email' />
        <ErrorMessage name="email" />

        <br />

        <button className='btn' type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  );
};

export default FormThree;