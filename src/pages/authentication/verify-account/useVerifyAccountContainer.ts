import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import UserInfo from "../../../service/userInfo";
import { unwrapResult } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const useVerifyAccountContainer = () => {
  const dispatch = useAppDispatch();
  const { validate, userInfo } = useAppSelector((state) => state.authInfo);
  const [emailOtp, setEmailOtp] = useState<string>("");
  const [phoneOtp, setPhoneOtp] = useState<string>("");
  const [emailEnable, setEmailEnable] = useState({
    isSend: true,
    isOtpEnable: false,
    isTimer: false,
  });
  const [phoneEnable, setPhoneEnable] = useState({
    isSend: true,
    isOtpEnable: false,
    isTimer: false,
  });
  const [emailOtpTimer, setEmailOtpTimer] = useState<number>(120);
  const [phoneOtpTimer, setPhoneOtpTimer] = useState<number>(120);

  useEffect(() => {
    let timeInterval: any;
    if (emailOtpTimer !== 0 && emailEnable.isTimer) {
      timeInterval = setInterval(() => {
        setEmailOtpTimer(emailOtpTimer - 1);
      }, 1000);
    } else {
      setEmailEnable({
        ...emailEnable,
        isTimer: false,
      });
      setEmailOtpTimer(120);
    }
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
  }, [emailEnable.isTimer, emailOtpTimer]);

  useEffect(() => {
    let timeInterval: any;
    if (phoneOtpTimer !== 0 && phoneEnable.isTimer) {
      timeInterval = setInterval(() => {
        setPhoneOtpTimer(phoneOtpTimer - 1);
      }, 1000);
    } else {
      setPhoneEnable({
        ...emailEnable,
        isTimer: false,
      });
      setPhoneOtpTimer(120);
    }
    return () => {
      if (timeInterval) {
        clearInterval(timeInterval);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneEnable.isTimer, phoneOtpTimer]);

  const getTime = (time: number) => {
    return `0${parseInt(String(time / 60))}:${String(time % 60).padStart(
      2,
      "0"
    )}`;
  };

  const handleSendOtp = (type: string, isTimer: boolean) => {
    if (type === "email") {
      dispatch(
        UserInfo.generateOtp({
          type: "email",
          email: userInfo?.email,
        })
      );
      setEmailEnable({
        ...emailEnable,
        isOtpEnable: true,
        isTimer: isTimer,
        isSend: false,
      });
    } else {
      dispatch(
        UserInfo.generateOtp({
          type: "phonenumber",
          phonenumber: userInfo?.phonenumber,
        })
      );
      setPhoneEnable({
        ...phoneEnable,
        isOtpEnable: true,
        isTimer: isTimer,
        isSend: false,
      });
    }
  };

  const handleVerifyOtp = async (otp: string, type: string) => {
    if (type === "email") {
      try {
        unwrapResult(
          await dispatch(
            UserInfo.verifyOtp({
              otp: otp,
              data: {
                type: "email",
                email: userInfo.email,
              },
            })
          )
        );
        dispatch(UserInfo.userInfomation());
      } catch (err) {
        toast.error(JSON.stringify(err));
      }
    } else {
      try {
        unwrapResult(
          await dispatch(
            UserInfo.verifyOtp({
              otp: otp,
              data: {
                type: "phonenumber",
                phonenumber: userInfo.phonenumber,
              },
            })
          )
        );
        dispatch(UserInfo.userInfomation());
      } catch (err) {
        toast.error(JSON.stringify(err));
      }
    }
  };
  return {
    validate,
    userInfo,
    emailOtp,
    setEmailOtp,
    phoneOtp,
    setPhoneOtp,
    emailEnable,
    phoneEnable,
    handleSendOtp,
    getTime,
    emailOtpTimer,
    phoneOtpTimer,
    handleVerifyOtp
  };
};

export default useVerifyAccountContainer;
