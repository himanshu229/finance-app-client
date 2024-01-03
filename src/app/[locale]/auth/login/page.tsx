"use client";
import { IMG_Rupess } from "@/assests/images";
import { useRouter } from "@/navigation";
import { Box, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {Email} from '@mui/icons-material';
import CustomInput from "@/components/CustomInput";
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
  password: "",
};

export default function Login() {
  const handleSubmit = (values: any) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue  text-white">
      <Box className="border-2 bg-white w-1/2 h-96 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <Box className="text-black m-auto hidden sm:block md:col-span-1">
          <Image src={IMG_Rupess} alt="Rupee image" />
        </Box>
        <Box className="text-black">
          <Box>Member Login</Box>
          <Box>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <Box className="flex gap-2">
                 
                <CustomInput value={""} type={""} onChange={function (e: any): void {
                    console.log(e)
                  } }/>
                </Box>
                <div>
                  <label htmlFor="email">Email:</label>
                  <Field type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>

                <div>
                  <label htmlFor="password">Password:</label>
                  <Field type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>

                <div>
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
