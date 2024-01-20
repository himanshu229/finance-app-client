import { Verified } from "@mui/icons-material";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CustomButton, CustomInput } from "../../../components";
import useVerifyAccountContainer from "./useVerifyAccountContainer";
import { useEffect, useMemo, useState } from "react";

const VerifyAccount = () => {
  const {
    validate,
    userInfo,
    emailOtp,
    setEmailOtp,
    phoneOtp,
    setPhoneOtp,
    phoneEnable,
    emailEnable,
    handleSendOtp,
    getTime,
    emailOtpTimer,
    phoneOtpTimer,
    handleVerifyOtp,
  } = useVerifyAccountContainer();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const text = useMemo(() => {
    if (userInfo?.isEmailVerified && userInfo?.isPhoneVerified) {
      return {
        color: "#39e239",
        text: "you are successfully verified. Please give the some moment.",
      };
    } else {
      return {
        color: "#6b7793",
        text: "please complete your verification process.",
      };
    }
  }, [userInfo?.isEmailVerified, userInfo?.isPhoneVerified]);

  useEffect(() => {
    if (validate === false) {
      setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    } else {
      if (validate) setIsOpen(validate);
    }
  }, [validate]);

  return validate === null ? (
    <></>
  ) : (
    <Dialog open={isOpen}>
      <Box className="p-6">
        <DialogTitle
          className={`sm:font-normal text-[1rem] leading-5 italic text-[${text.color}]`}
        >
          Hey! {userInfo?.firstname} {text.text}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box className="sm:flex w-full text-end">
              <Box className="sm:w-96 mr-3 flex">
                <CustomInput
                  value={userInfo?.email}
                  disabled
                  name={"email"}
                  type={"email"}
                  onChange={() => {}}
                />
                {userInfo?.isEmailVerified && (
                  <Verified className="text-green-500 mt-2 ml-2" />
                )}
              </Box>
              {!userInfo?.isEmailVerified &&
                (emailEnable.isTimer ? (
                  <p className="mr-4 mt-2 mb-1">{getTime(emailOtpTimer)}</p>
                ) : (
                  <CustomButton
                    onClick={() => handleSendOtp("email", !emailEnable.isTimer)}
                    text={emailEnable.isSend ? "Verify" : "Resend"}
                    className="w-24 mt-1 mr-3"
                  />
                ))}
            </Box>
            {!userInfo?.isEmailVerified && emailEnable.isOtpEnable && (
              <Box className="sm:flex w-full">
                <Box className="sm:w-96 mr-3 mt-2">
                  <CustomInput
                    value={emailOtp}
                    name={"emailOtp"}
                    placeholder="Enter OTP"
                    type={"number"}
                    onChange={(e) => {
                      let value = e.target.value?.length;
                      if (value <= 6) {
                        setEmailOtp(e.target.value);
                      }
                      if (value === 6) {
                        handleVerifyOtp(e.target.value, "email");
                      }
                    }}
                  />
                </Box>
                <Box className="w-24"></Box>
              </Box>
            )}
            <Box className="sm:flex w-full text-end mt-3 sm:mt-6">
              <Box className="sm:w-96 mr-3 flex">
                <CustomInput
                  value={userInfo?.phonenumber}
                  disabled
                  name={"phonenumber"}
                  type={"number"}
                  onChange={() => {}}
                />
                {userInfo?.isPhoneVerified && (
                  <Verified className="text-green-500 mt-2 ml-2" />
                )}
              </Box>
              {!userInfo?.isPhoneVerified &&
                (phoneEnable.isTimer ? (
                  <p className="mr-4 mt-2 mb-1">{getTime(phoneOtpTimer)}</p>
                ) : (
                  <CustomButton
                    onClick={() =>
                      handleSendOtp("phonenumber", !phoneEnable.isTimer)
                    }
                    text={phoneEnable.isSend ? "Verify" : "Resend"}
                    className="w-24 mt-1 mr-3"
                  />
                ))}
            </Box>
            {!userInfo.isPhoneVerified && phoneEnable.isOtpEnable && (
              <Box className="sm:flex w-full">
                <Box className="sm:w-96 mr-3 mt-2">
                  <CustomInput
                    value={phoneOtp}
                    name={"phoneOtp"}
                    type={"number"}
                    placeholder="Enter OTP"
                    onChange={(e) => {
                      let value = e.target.value?.length;
                      if (value <= 6) {
                        setPhoneOtp(e.target.value);
                      }
                      if (value === 6) {
                        handleVerifyOtp(e.target.value, "phonenumber");
                      }
                    }}
                  />
                </Box>
                <Box className="w-24"></Box>
              </Box>
            )}
          </DialogContentText>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default VerifyAccount;
