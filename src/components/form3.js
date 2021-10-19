import React from "react";
import { Formik, Field, Form} from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";

const FormThree = ({ handleNext }) => {



  return (
    <div>
    <div className="forms">

      <Formik
        initialValues={{ city: "" , bio: ""}}
        validationSchema={Yup.object({
          city: Yup.string()
          .max(20, "Must be 20 characters or less")
            .required("Required"),
          bio: Yup.string()
          .max(200, "Must be 200 characters or less")
            .required("Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
          localStorage.setItem('city', values.city)
          localStorage.setItem('bio', values.bio)
          handleNext();
        }}
      >
        <Form autoComplete="off">
          <Field
            fullWidth
            name="city"
            component={TextField}
            label="City"
          />
          <Field
            fullWidth
            name="bio"
            component={TextField}
            label="Bio"
          />

          <br />

          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>

    </div>
  );
};

export default FormThree;
