import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { CustomButton, CustomInput } from "../../../components";
import useForgetPasswordContainer from "./useForgetPasswordContainer";
import NewPassword from "./newpassword";

const ForgetPassword: FunctionComponent = () => {
  const {
    isVerify,
    isOtpVerify,
    username,
    otp,
    setuserName,
    setotp,
    handleVerifyOTP,
    handleVerifyUserName,
  } = useForgetPasswordContainer();

  return (
    <Box className=" min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <Box className="border-2 bg-white w-2/3 sm:w-1/3 h-100 rounded-xl grid grid-cols-1 lg:grid-cols-1 gap-4 p-6">
        <Box className="pt-5 text-center ...">
          <Box>
            <img
              src={
                "data:image/jpeg;base64,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"
              }
              className="max-w-49 max-h-20	"
              alt="Logo"
            />
          </Box>
        </Box>
        <Box>
          <Box className="p-4 ">
            <p className="font-semibold text-xl m-0 text-lighterBlue items-center justify-center">
              {isVerify ? "Reset your password" : "Forgot Password ?"}
            </p>
            <p className=" text-xl m-0 text-neutral-400 items-center justify-center">
              {isOtpVerify?"now you can change your password ":
              <>
              {isVerify
                ? "we have sent you a otp on your e-mail id please check"
                : " please enter your mobile number or username we will send you OTP for verification"}
              </>
              }
            </p>
          </Box>
          {isOtpVerify ? (
            <NewPassword/>
          ) : isVerify ? (
            <Box className="p-4">
              <CustomInput
                value={otp}
                name={"username"}
                type={"number"}
                placeholder="Enter your otp"
                onChange={(e) => setotp(e.target.value)}
              />
              <Box className="text-center p-10">
                <CustomButton
                  onClick={() => handleVerifyOTP()}
                  className="w-40"
                  type="button"
                  text={"Verify OTP"}
                  disabled={!(otp.length === 6)}
                />
              </Box>
            </Box>
          ) : (
            <Box className="p-4">
              <CustomInput
                value={username}
                name={"username"}
                type={"text"}
                placeholder="username / mobile no."
                onChange={(e) => setuserName(e.target.value)}
              />

              <Box className="text-center pt-5">
                <CustomButton
                  onClick={() => handleVerifyUserName()}
                  className="w-40 "
                  type="submit"
                  text={"Submit"}
                  disabled={!(username?.length > 3)}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ForgetPassword;
