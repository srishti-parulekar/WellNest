import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  Button,
  Box,
} from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/Auth/auth.action";
import { useNavigate } from 'react-router-dom';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  gender: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("handle submit", values);
    dispatch(registerUserAction({ data: values }));
  };

  const navigate =useNavigate();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="space-y-5 p-5 max-w-md mx-auto bg-white rounded">
            <Box mb={2}>
              <Field
                name="firstName"
                placeholder="First Name"
                as={TextField}
                type="text"
                variant="outlined"
                fullWidth
                label="First Name"
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
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </Box>

            <Box mb={2}>
              <Field
                name="lastName"
                placeholder="Last Name"
                as={TextField}
                type="text"
                variant="outlined"
                fullWidth
                label="Last Name"
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
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </Box>

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
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
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
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
            </Box>

            <Box mb={2}>
              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  aria-labelledby="gender-radio-buttons-group-label"
                  name="gender"
                  onChange={(event) =>
                    setFieldValue("gender", event.currentTarget.value)
                  }
                  row
                >
                  <FormControlLabel
                    value="female"
                    control={
                      <Radio
                        sx={{
                          color: "#78350f",
                          "&.Mui-checked": {
                            color: "#78350f",
                          },
                        }}
                      />
                    }
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={
                      <Radio
                        sx={{
                          color: "#78350f",
                          "&.Mui-checked": {
                            color: "#78350f",
                          },
                        }}
                      />
                    }
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={
                      <Radio
                        sx={{
                          color: "#78350f",
                          "&.Mui-checked": {
                            color: "#78350f",
                          },
                        }}
                      />
                    }
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
              <ErrorMessage
                name="gender"
                component="div"
                className="text-red-500"
              />
            </Box>

            <button
              type="submit"
              variant="contained"
              className="w-full p-2 bg-amber-900 text-white rounded"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
      <div className="flex gap-2 justify-center items-center pt-1">
        <p>Already have an account?</p>
        <Button
          sx={{ color: "#78350f" }}
          onClick={() => navigate("/auth/signin")}
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default Register;
