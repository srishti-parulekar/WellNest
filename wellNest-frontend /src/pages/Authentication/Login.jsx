import React from "react";
import { TextField, Box, Button } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../../redux/Auth/auth.action";
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from "formik";
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
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    dispatch(loginUserAction(values));  // Remove { data: values }
  };

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="space-y-5">
            <div className="space-y-5">
              <Box mb={2}>
                <Field
                  name="email"
                  placeholder="Email"
                  as={TextField}
                  type="email"
                  variant="outlined"
                  fullWidth
                  label="Email"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#78350f",
                      },
                      "&:hover fieldset": {
                        borderColor: "#78350f",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#78350f",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#78350f",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#78350f",
                    },
                  }}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 mt-1">{errors.email}</div>
                )}
              </Box>

              <Box mb={2}>
                <Field
                  name="password"
                  placeholder="Password"
                  as={TextField}
                  type="password"
                  variant="outlined"
                  fullWidth
                  label="Password"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#78350f",
                      },
                      "&:hover fieldset": {
                        borderColor: "#78350f",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#78350f",
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#78350f",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#78350f",
                    },
                  }}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 mt-1">{errors.password}</div>
                )}
              </Box>

              <button
                type="submit"
                className="w-full p-2 bg-[#78350f] text-white rounded hover:bg-[#5a2a0d] transition duration-300"
              >
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 justify-center items-center pt-5">
        <p>Don't have an account?</p>
        <Button sx={{ color: '#78350f' }} onClick={() => navigate("/auth/signup")}>Register</Button>
      </div>
    </>
  );
};

export default Login;