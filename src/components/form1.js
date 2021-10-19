import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const FormOne = ({ handleNext }) => {



  return (
    <div className="forms">

      <Formik
        initialValues={{ firstName: "" , lastName: ""}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),


        })}
        onSubmit={(values) => {
          handleNext();
          console.log(values);
          localStorage.setItem('firstName', values.firstName)
          localStorage.setItem('lastName', values.lastName)
        }}
      >
        <Form autoComplete="off">
          <Field
            fullWidth
            name="firstName"
            component={TextField}
            label="First Name"
          />
          <Field
            fullWidth
            name="lastName"
            component={TextField}
            label="Last Name"
          />
        
          <br />

          <button
          className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormOne;
