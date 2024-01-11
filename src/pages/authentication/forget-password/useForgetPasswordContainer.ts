import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

import { useState } from "react";

const useForgetPasswordContainer = () => {
  const [isVerify, setIsVerify] = useState<boolean>(false);
  const [username, setuserName] = useState<string>("");
  const [otp, setotp] = useState<string>("");
  const [isOtpVerify, setIsOtpVerify] = useState<boolean>(false);

  const handleVerifyOTP = () => {
    setIsOtpVerify(true);
  };

  const handleVerifyUserName = () => {
    setIsVerify(true);
  };

  return {
    isVerify,
    username,
    otp,
    isOtpVerify,
    setotp,
    setIsVerify,
    setuserName,
    handleVerifyOTP,
    handleVerifyUserName,
  };
};

export default useForgetPasswordContainer;
