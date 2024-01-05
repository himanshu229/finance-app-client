import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import { useRouter } from "@/navigation";
import { KeyboardBackspace } from "@mui/icons-material";
import { Box } from "@mui/material";
import useSingupContainer from "./useSingupContainer";

const SingupIndex = () => {
  const navigate = useRouter();
  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    GenderOption,
  } = useSingupContainer();
  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-darkBlue via-lighterBlue to-lightestBlue">
      <Box className="border-2 bg-white w-2/3 sm:w-1/2 pb-10 rounded-xl p-6">
        <form onSubmit={handleSubmit}>
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:m-4">
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your first name
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
                Your last name
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
                Your email
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
                Your phone number
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
                Your Date of Birth
              </p>
              <CustomInput
                id="dob"
                placeholder="Enter"
                name={"dob"}
                type={"date"}
                value={values.dob}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                error={touched.dob && Boolean(errors.dob)}
                helperText={!!touched.dob && !!errors.dob ? errors.dob : ""}
              />
            </Box>
            <Box>
              <p className="m-0 text-lighterBlue font-semibold text-lg pl-1">
                Your Gender
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
            onClick={() => navigate.push("/auth/login")}
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

export default SingupIndex;
