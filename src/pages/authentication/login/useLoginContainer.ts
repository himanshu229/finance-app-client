import { unwrapResult } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../store";
import Authentication from "../../../service/authentication";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useLoginContainer = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();
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
        try {
          const res: any = unwrapResult(
            await dispatch(
              Authentication.login({
                ...values,
                device: userInfo.deviceInfo,
                location: userInfo.coordinate,
              })
            )
          );
          toast.success(res?.message);
          navigation("/");
        } catch (error: any) {
          toast.error(JSON.stringify(error?.error));
        }
      },
    });

  return { values, touched, errors, handleChange, handleBlur, handleSubmit };
};

export default useLoginContainer;
