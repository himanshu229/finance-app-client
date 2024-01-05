import { useFormik } from "formik";
import * as yup from "yup";

const useSingupContainer = () => {

  const GenderOption = [
    { value: "", name: "Select option" },
    { value: "Male", name: "Male" },
    { value: "Female", name: "Female" },
    { value: "Transgender", name: "Transgender" },
  ];

  const validationSchema = yup.object({
    firstname: yup.string().min(3, "Alteast 3 character").required("First Name is required"),
    lastname: yup.string().min(3, "Alteast 3 character").required("Last Name is required"),
    email: yup
      .string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
      .required("Email is required"),
    phonenumber: yup
      .string()
      .max(10, "Phone number not more than 10 digit")
      .matches(/^[6-9]\d{9}$/, "Invalid phone number (start with 6,7,8,9)")
      .required("Phone number is Required"),
    dob: yup.string().required("Date of birth is required"),
    gender: yup.string().required("Select your gender"),
  });
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        dob: "",
        gender: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return {
    values,
    GenderOption,
    touched,
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
  };
};

export default useSingupContainer;
