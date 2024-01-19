import { Verified } from "@mui/icons-material";
import { Box } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { CustomButton, CustomInput } from "../../../components";
import useVerifyAccountContainer from "./useVerifyAccountContainer";

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
    setPhoneEnable,
    setEmailEnable,
  } = useVerifyAccountContainer();
  return (
    <Dialog open={!validate.isEmailVerified || !validate.isPhoneVerified}>
      <Box className="p-6">
        <DialogTitle className="sm:font-normal text-[1rem] leading-5 italic text-[#6b7793]">
          Hey! {userInfo?.firstname} please complete your verification process.
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
                {validate?.isEmailVerified && (
                  <Verified className="text-green-500 mt-2 ml-2" />
                )}
              </Box>
              {!validate?.isEmailVerified && (
                <CustomButton
                  onClick={() =>
                    setEmailEnable({
                      ...emailEnable,
                      isOtpEnable: true,
                    })
                  }
                  text={emailEnable.isSend ? "Verify" : "Resend"}
                  className="w-24 mt-1 mr-3"
                />
              )}
            </Box>
            {emailEnable.isOtpEnable && (
              <Box className="sm:flex w-full">
                <Box className="sm:w-96 mr-3 mt-2">
                  <CustomInput
                    value={emailOtp}
                    name={"emailOtp"}
                    type={"number"}
                    onChange={(e) => {
                      if (e.target.value?.length <= 6) {
                        setEmailOtp(e.target.value);
                      }
                    }}
                  />
                </Box>
                <Box className="w-24"></Box>
              </Box>
            )}
            <Box className="sm:flex w-full text-end mt-3 sm:mt-6">
              <Box className="sm:w-96 mr-3">
                <CustomInput
                  value={userInfo?.phonenumber}
                  disabled
                  name={"phonenumber"}
                  type={"number"}
                  onChange={() => {}}
                />
                {validate?.isPhoneVerified && (
                  <Verified className="text-green-500 mt-2 ml-2" />
                )}
              </Box>
              {!validate?.isPhoneVerified && (
                <CustomButton
                  text={phoneEnable.isSend ? "Verify" : "Resend"}
                  className="w-24 mt-1 mr-3"
                />
              )}
            </Box>
            {phoneEnable.isOtpEnable && (
              <Box className="sm:flex w-full">
                <Box className="sm:w-96 mr-3 mt-2">
                  <CustomInput
                    value={phoneOtp}
                    name={"phoneOtp"}
                    type={"number"}
                    onChange={(e) => {
                      if (e.target.value?.length <= 6) {
                        setPhoneOtp(e.target.value);
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
