import { AccountCircle, ArrowRightAlt, Lock } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { IMG_Rupess } from "../../../assests/images";
import { CustomButton, CustomInput } from "../../../components";
import useLoginContainer from "./useLoginContainer";

const LoginPage = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useLoginContainer();

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <Box className="border-2 bg-white w-2/3 sm:w-1/2 h-96 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <Box className="text-black m-auto hidden lg:block lg:col-span-1">
          <img src={IMG_Rupess} alt="showing the pic" />
        </Box>
        <Box className="xl:w-80">
          <Box className="mt-4 mb-8 lg:mt-12 lg:mb-6">
            <p className="font-semibold text-xl m-0 text-lighterBlue">
              {t("lab_customer_login")}
            </p>
          </Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <Box className="my-3">
                <CustomInput
                  startAdornment={
                    <AccountCircle className="text-lighterBlue" />
                  }
                  id="username"
                  placeholder={`${t("lab_username")}`}
                  name="username"
                  value={values.username}
                  type={"text"}
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  error={touched.username && Boolean(errors.username)}
                  helperText={
                    !!touched.username && !!errors.username
                      ? errors.username
                      : ""
                  }
                />
              </Box>
              <Box className="mb-3">
                <CustomInput
                  id="password"
                  startAdornment={<Lock className="text-lighterBlue" />}
                  name="password"
                  placeholder={`${t("lab_password")}`}
                  value={values.password}
                  type={"password"}
                  onChange={(e) => handleChange(e)}
                  onBlur={(e) => handleBlur(e)}
                  error={touched.password && Boolean(errors.password)}
                  helperText={
                    !!touched.password && !!errors.password
                      ? errors.password
                      : ""
                  }
                />
              </Box>
              <Box className="text-center">
                <CustomButton
                  className="w-40"
                  type="submit"
                  text={`${t("lab_submit_btn")}`}
                />
              </Box>
            </form>
          </Box>
          <Box className="text-center">
            <p className="text-whitestBlue text-sm font-normal cursor-pointer underline">
              {t("lab_forget_username")}
            </p>
          </Box>
          <Box>
            <Box
              onClick={() => navigation("/auth/sign-up")}
              className="flex justify-center items-center text-sm cursor-pointer gap-2 text-lightestBlue font-semibold mt-8"
            >
              <p> {t("lab_create_account")} </p>
              <ArrowRightAlt />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
