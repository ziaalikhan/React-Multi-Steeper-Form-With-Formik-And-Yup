// import React from "react";
// import "./App.css";
// import { Formik } from "formik";
// import * as Yup from "yup";

// function App() {
//   const SignupSchema = Yup.object({
//     email: Yup.string().email("Invalid email").required("Password is Required"),
//     password: Yup.string()
//       .min(8, "Password is Too short Atleast 8 Characters!")
//       .max(50, "Password is Too Long!")
//       .required("Email is Required"),
//   });
//   return (
//     <div>
//       <h1>Anywhere in your app!</h1>
//       <Formik
//         initialValues={{ email: "", password: "" }}
//         validate={(values) => {
//           const errors = {};
//           if (!values.email) {
//             errors.email = "Please Fill The Email";
//           }
//           if (!values.password) {
//             errors.password = "Please Fill The password";
//           }
//           return errors;
//         }}
//         validationSchema={SignupSchema}
//         onSubmit={(values) => {
//           console.log(values);
//         }}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               name="email"
//               onChange={handleChange}
//               value={values.email}
//             />
//             <br />
//             {errors.email && touched.email && errors.email}
//             <br />
//             <br />
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               value={values.password}
//             />
//             <br />
//             {errors.password && touched.password && errors.password}
//             <br />
//             <br />
//             <button className="btn" type="submit">
//               Submit
//             </button>
//           </form>
//         )}
//       </Formik>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Navbar from './components/Navbar';
import SteeperForm from "./components/SteeperForm";

function App() {
  return (
    <div>
      <Navbar />
      <SteeperForm />
    </div>
  );
}

export default App;
