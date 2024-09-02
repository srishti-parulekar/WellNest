import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/Auth/auth.action";

const initialValues = { email: "", password: "" };

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const Login = () => {
  const [formValue, setFormValue] = useState();
  const dispatch=useDispatch();

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    dispatch(loginUserAction({data:values}))
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-5">
          <div className="space-y-5">
            <Field
              name="email"
              placeholder="Email"
              as={TextField}
              type="email"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />

            <Field
              name="password"
              placeholder="Password"
              as={TextField}
              type="password"
              variant="outlined"
              fullWidth
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            variant="contained"
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
