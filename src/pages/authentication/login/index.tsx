import { IMG_Rupess } from "@/assests/images";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { AccountCircle, ArrowRightAlt, Lock } from "@mui/icons-material";
import { Box } from "@mui/material";
import Image from "next/image";
import useLoginContainer from "./useLoginContainer";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useLoginContainer();
  const t = useTranslations("lang");
  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <Box className="border-2 bg-white w-1/2 h-96 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <Box className="text-black m-auto hidden lg:block lg:col-span-1">
          <Image src={IMG_Rupess} alt="Rupee image" />
        </Box>
        <Box className="xl:w-80">
          <Box className="mt-4 mb-8 lg:mt-12 lg:mb-6">
            <p className="font-semibold text-xl m-0 text-lighterBlue">
              {t.rich("app_customer_login")}
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
                  placeholder={`${t.rich("app_username")}`}
                  name="username"
                  value={values.username}
                  type={"username"}
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
                  placeholder={`${t.rich("app_password")}`}
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
                  text={`${t.rich("app_submit_btn")}`}
                />
              </Box>
            </form>
          </Box>
          <Box className="text-center">
            <p className="text-whitestBlue text-sm font-normal cursor-pointer underline">
              {t.rich("app_forget_username")}
            </p>
          </Box>
          <Box>
            <Box className="flex justify-center items-center text-sm cursor-pointer gap-2 text-lightestBlue font-semibold mt-8">
              <p> {t.rich("app_create_account")} </p>
              <ArrowRightAlt />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
