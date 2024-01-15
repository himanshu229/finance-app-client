import { unwrapResult } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store";
import Authentication from "../../../service/authentication";
import { toast } from "react-toastify";

const useLoginContainer = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const userInfo = useAppSelector((state) => state.authInfo);
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
      onSubmit: async (values) => {
        const res = unwrapResult(
          await dispatch(
            Authentication.login({
              ...values,
              device: userInfo.deviceInfo,
              location: userInfo.coordinate,
            })
          )
        );
        if (res?.isLogin) {
          toast.success(res.message);
        } else {
          toast.error(JSON.stringify(res.error));
        }
      },
    });

  return { values, touched, errors, handleChange, handleBlur, handleSubmit };
};

export default useLoginContainer;
