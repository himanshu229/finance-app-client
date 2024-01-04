import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import * as yup from "yup";

const useLoginContainer = () => {
  const t = useTranslations("lang");
  const validationSchema = yup.object({
    username: yup.string().required(`${t.rich("app_username_error")}`),
    password: yup
      .string()
      .min(8, `${t.rich("app_password_error_max")}`)
      .required(`${t.rich("app_password_error")}`),
  });
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });

  return { values, handleChange, handleBlur, touched, errors, handleSubmit };
};

export default useLoginContainer;
