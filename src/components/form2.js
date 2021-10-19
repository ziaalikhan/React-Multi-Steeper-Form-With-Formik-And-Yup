import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const FormTwo = ({ handleNext }) => {



  return (
    <div className="forms">
     
      <Formik
        initialValues={{ email: "" , profession: ""}}
        validationSchema={Yup.object({
          email: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          profession: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          localStorage.setItem('email', values.email)
          localStorage.setItem('profession', values.profession)
          handleNext();
        }}
      >
        <Form autoComplete="off">
          <Field
            fullWidth
            name="email"
            component={TextField}
            label="Email"
          />
          <Field
            fullWidth
            name="profession"
            component={TextField}
            label="Profession"
          />

          <br />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormTwo;
