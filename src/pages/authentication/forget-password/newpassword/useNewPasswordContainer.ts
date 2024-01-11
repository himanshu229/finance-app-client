import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";

const useNewPasswordContainer = () => {
  //   const [isVerify, setIsVerify] = useState<boolean>(false);
  const [CurrentPassword, setCurrentPassword] = useState<string>("");
  const [Newpassword, setNewpassword] = useState<string>("");
  const [isOtpVerify, setIsOtpVerify] = useState<boolean>(false);
  const [NewpasswordError, setNewpasswordError] = useState<string>("");
  const [CurrentPasswordError, setCurrentPasswordError] = useState<string>("");
  const SubmitNewPassword = (Newpassword: any, CurrentPassword: any) => {
    console.log(Newpassword, CurrentPassword);
  };

  function ValidateNewPassword(event: any) {
    let new_pass = event.target.value;
    setNewpassword(new_pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
      setNewpasswordError("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setNewpasswordError("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setNewpasswordError("Password should contains numbers also!");
    } else if (new_pass.length < 8) {
      setNewpasswordError("Password length should be more than 10.");
    } else {
      setNewpasswordError("");
    }
  }
  function ValidateCurrentPasswordValidate(event: any) {
    let new_pass1 = event.target.value;
    setCurrentPassword(new_pass1);

    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass1.match(lowerCase)) {
      setCurrentPasswordError("Password should contains lowercase letters!");
    } else if (!new_pass1.match(upperCase)) {
      setCurrentPasswordError("Password should contain uppercase letters!");
    } else if (!new_pass1.match(numbers)) {
      setCurrentPasswordError("Password should contains numbers also!");
    } else if (new_pass1.length < 8) {
      setCurrentPasswordError("Password length should be more than 10.");
    } else {
      setCurrentPasswordError("");
    }
  }

  return {
    setNewpassword,
    ValidateNewPassword,
    setCurrentPassword,
    CurrentPassword,
    Newpassword,
    SubmitNewPassword,
    setIsOtpVerify,
    isOtpVerify,
    NewpasswordError,
    ValidateCurrentPasswordValidate,
    CurrentPasswordError
  };
};

export default useNewPasswordContainer;
