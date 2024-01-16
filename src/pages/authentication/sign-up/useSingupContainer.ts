import { unwrapResult } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { regexEmail, regexPassword, regexPhonenumber } from "../../../helper";
import Authentication from "../../../service/authentication";
import { useAppDispatch, useAppSelector } from "../../../store";

const useSingupContainer = () => {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.authInfo.userInfo);
  const [isVisible, setIsVisible] = useState(false);
  const GenderOption = [
    { value: "", name: "Select option" },
    { value: "male", name: "Male" },
    { value: "female", name: "Female" },
    { value: "transgender", name: "Transgender" },
  ];

  const validationSchema = yup.object({
    firstname: yup
      .string()
      .min(3, "Alteast 3 character")
      .required("First Name is required"),
    lastname: yup
      .string()
      .min(3, "Alteast 3 character")
      .required("Last Name is required"),
    email: yup
      .string()
      .matches(regexEmail, "Invalid email format")
      .required("Email is required"),
    phonenumber: yup
      .string()
      .max(10, "Phone number not more than 10 digit")
      .matches(regexPhonenumber, "Invalid phone number (start with 6,7,8,9)")
      .required("Phone number is Required"),
    dateofbirth: yup.string().required("Date of birth is required"),
    gender: yup.string().required("Select your gender"),
    password: yup
      .string()
      .min(8, "Password should be 8 character")
      .matches(
        regexPassword,
        "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      )
      .required("Password is required"),
  });
  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      dateofbirth: null,
      gender: "",
      password: "",
      distributorID: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const res: any = unwrapResult(
          await dispatch(Authentication.register(values))
        );
        if (res?.success) {
          toast.success(
            "Registration successfully please check your mail and verify your's account"
          );
          navigation("/auth/login");
        }
      } catch (err: any) {
        if (err?.error?.includes("E11000")) {
          if (err?.error?.includes("phonenumber")) {
            setFieldError("phonenumber", "Number already exist.");
          }
          if (err?.error?.includes("email")) {
            setFieldError("email", "Email already exist.");
          }
        }
        if (err?.isDistributor) {
          setFieldError("distributorID", "Distributor ID not match.");
        }
      }
    },
  });

  return {
    values,
    GenderOption,
    touched,
    errors,
    isVisible,
    handleSubmit,
    handleChange,
    handleBlur,
    setIsVisible,
    setFieldValue,
  };
};

export default useSingupContainer;
