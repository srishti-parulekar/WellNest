import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { TextField, FormControlLabel, Radio, RadioGroup, FormControl, Button, Box } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerUserAction } from "../../redux/Auth/auth.action";

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
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required"),
  gender: Yup.string().required("Gender is required"),
});

const Register = () => {
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.gender = gender;
    console.log("handle submit", values);
    dispatch(registerUserAction({ data: values }));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ setFieldValue }) => (
        <Form className="space-y-5 p-5 max-w-md mx-auto bg-white rounded shadow-md">
          <Box mb={2}>
            <Field
              name="firstName"
              placeholder="First Name"
              as={TextField}
              type="text"
              variant="outlined"
              fullWidth
              label="First Name"
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500" />
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
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500" />
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
            />
            <ErrorMessage name="email" component="div" className="text-red-500" />
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
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </Box>

          <Box mb={2}>
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                aria-labelledby="gender-radio-buttons-group-label"
                name="gender"
                onChange={(event) => setFieldValue("gender", event.currentTarget.value)}
                row
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
              </RadioGroup>
            </FormControl>
            <ErrorMessage name="gender" component="div" className="text-red-500" />
          </Box>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
