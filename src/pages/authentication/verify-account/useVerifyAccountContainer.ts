import React, { useState } from "react";
import { useAppSelector } from "../../../store";

const useVerifyAccountContainer = () => {
  const { validate, userInfo } = useAppSelector((state) => state.authInfo);
  const [emailOtp, setEmailOtp] = useState<string>("");
  const [phoneOtp, setPhoneOtp] = useState<string>("");
  const [emailEnable, setEmailEnable] = useState({
    isSend: true,
    isOtpEnable: false,
  });
  const [phoneEnable, setPhoneEnable] = useState({
    isSend: true,
    isOtpEnable: false,
  });
  return {
    validate,
    userInfo,
    emailOtp,
    setEmailOtp,
    phoneOtp,
    setPhoneOtp,
    emailEnable,
    phoneEnable,
    setEmailEnable,
    setPhoneEnable
  };
};

export default useVerifyAccountContainer;
