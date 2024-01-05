import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const useLoginContainer = () => {
  const { t } = useTranslation();
  const validationSchema = yup.object({
    username: yup.string().required(`${t("err_username")}`),
    password: yup
      .string()
      .min(8, `${t("err_password_max")}`)
      .required(`${t("err_password")}`),
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

  return { values, touched, errors, handleChange, handleBlur, handleSubmit };
};

export default useLoginContainer;
