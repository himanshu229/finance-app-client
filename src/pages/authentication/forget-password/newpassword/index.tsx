import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import { CustomButton, CustomInput } from "../../../../components";
import useNewPasswordContainer from "./useNewPasswordContainer";

const NewPassword: FunctionComponent = () => {
  const {
    setIsOtpVerify,
    isOtpVerify,
    CurrentPassword,
    Newpassword,
    ValidateCurrentPasswordValidate,
    setNewpassword,
    SubmitNewPassword,
    setCurrentPassword,
    NewpasswordError,
    ValidateNewPassword,
    CurrentPasswordError,
  } = useNewPasswordContainer();
  return (
    <Box>
      <Box className="p-4 ">
        <Box>
          <CustomInput
            value={Newpassword}
            name={"Newpassword"}
            type={"text"}
            placeholder="New password"
            onChange={ValidateNewPassword}
            helperText={
              !!NewpasswordError && !!NewpasswordError
                ? NewpasswordError
                : ""
            }
          />
          
        </Box>
        <Box className="pt-5">
          <CustomInput
            value={CurrentPassword}
            name={"ConfirmPassword"}
            type={"text"}
            placeholder="Confirm Password"
            onChange={ValidateCurrentPasswordValidate}
            helperText={
              !!CurrentPasswordError && !!CurrentPasswordError
                ? CurrentPasswordError
                : ""
            }
          />
        </Box>
        <Box
          className="text-center p-10"
          onClick={() => SubmitNewPassword(NewPassword, CurrentPassword)}
        >
          <CustomButton
            className="w-40"
            type="button"
            text={"Submit"}
            disabled={!Newpassword || !CurrentPassword}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NewPassword;
