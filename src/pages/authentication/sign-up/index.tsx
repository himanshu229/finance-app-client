import {
  KeyboardBackspace,
  RemoveRedEye,
  VisibilityOff,
} from "@mui/icons-material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CustomButton, CustomInput, CustomSelect } from "../../../components";
import useSingupContainer from "./useSingupContainer";
import CustomDatePicker from "../../../components/CustomDatePicker";
import dayjs, { Dayjs } from "dayjs";

const SingupPage = () => {
  const navigate = useNavigate();
  const {
    values,
    handleChange,
    setFieldValue,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    GenderOption,
    isVisible,
    setIsVisible,
  } = useSingupContainer();
  return (
    <Box className="min-h-screen flex md:items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <Box className="border-2 bg-white w-2/3 sm:w-1/2 pb-10 rounded-xl p-6 overflow-auto my-10 lg:my-0">
        <form onSubmit={handleSubmit}>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:m-4">
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your first name <span className="text-red-600">*</span>
              </p>
              <CustomInput
                id="firstname"
                value={values.firstname}
                placeholder="Enter"
                name={"firstname"}
                type={"text"}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.firstname && Boolean(errors.firstname)}
                helperText={
                  !!touched.firstname && !!errors.firstname
                    ? errors.firstname
                    : ""
                }
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your last name <span className="text-red-600">*</span>
              </p>
              <CustomInput
                id="lastname"
                name={"lastname"}
                type={"text"}
                placeholder="Enter"
                value={values.lastname}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.lastname && Boolean(errors.lastname)}
                helperText={
                  !!touched.lastname && !!errors.lastname ? errors.lastname : ""
                }
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your email <span className="text-red-600">*</span>
              </p>
              <CustomInput
                id="email"
                placeholder="Enter"
                name={"email"}
                type={"email"}
                value={values.email}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.email && Boolean(errors.email)}
                helperText={
                  !!touched.email && !!errors.email ? errors.email : ""
                }
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your phone number <span className="text-red-600">*</span>
              </p>
              <CustomInput
                id="phonenumber"
                placeholder="Enter"
                name={"phonenumber"}
                type={"text"}
                value={values.phonenumber}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.phonenumber && Boolean(errors.phonenumber)}
                helperText={
                  !!touched.phonenumber && !!errors.phonenumber
                    ? errors.phonenumber
                    : ""
                }
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your Date of Birth <span className="text-red-600">*</span>
              </p>
              <CustomDatePicker
                id="dateofbirth"
                value={values.dateofbirth}
                name={"dateofbirth"}
                onChange={(e) => setFieldValue("dateofbirth", e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.dateofbirth && Boolean(errors.dateofbirth)}
                helperText={
                  !!touched.dateofbirth && !!errors.dateofbirth
                    ? errors.dateofbirth
                    : ""
                }
                maxDate={dayjs().subtract(18, "year")}
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your Gender <span className="text-red-600">*</span>
              </p>
              <CustomSelect
                id="gender"
                name={"gender"}
                value={values.gender}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.gender && Boolean(errors.gender)}
                helperText={
                  !!touched.gender && !!errors.gender ? errors.gender : ""
                }
                displayEmpty
                data={GenderOption}
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Password <span className="text-red-600">*</span>
              </p>
              <CustomInput
                id="password"
                placeholder="Enter"
                type={isVisible ? "text" : "password"}
                endAdornment={
                  isVisible ? (
                    <VisibilityOff
                      className="cursor-pointer"
                      onClick={() => setIsVisible(!isVisible)}
                    />
                  ) : (
                    <RemoveRedEye
                      className="cursor-pointer"
                      onClick={() => setIsVisible(!isVisible)}
                    />
                  )
                }
                name={"password"}
                value={values.password}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.password && Boolean(errors.password)}
                helperText={
                  !!touched.password && !!errors.password ? errors.password : ""
                }
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Distributor Referral ID
              </p>
              <CustomInput
                id="distributorID"
                placeholder="User ID"
                name={"distributorID"}
                type={"text"}
                value={values.distributorID}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.distributorID && Boolean(errors.distributorID)}
                helperText={
                  !!touched.distributorID && !!errors.distributorID
                    ? errors.distributorID
                    : ""
                }
              />
            </Box>
          </Box>
          <Box className="text-center">
            <CustomButton
              className="w-48 mt-6 sm:mt-3"
              text={"Register"}
              type="submit"
            />
          </Box>
        </form>
        <Box className="text-center">
          <CustomButton
            onClick={() => navigate("/auth/login")}
            startIcon={<KeyboardBackspace />}
            variant="outlined"
            className="w-48 mt-4"
            text={"Go to Login"}
            type="button"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SingupPage;
