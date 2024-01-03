import { Email } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { FunctionComponent } from "react";

interface PropsType {
  value: string;
  type: string;
}

const CustomInput: FunctionComponent<PropsType> = (props) => {
  const { value, type } = props;
  return (
    <TextField
      error
      value={value}
      type="text"
      id="outlined-error-helper-text"
      label="Error"
      defaultValue="Hello World"
      helperText="Incorrect entry."
      InputProps={{
        endAdornment: <Email className="text-red-500" />,
      }}
    />
  );
};
CustomInput.defaultProps = {
  value: "",
  type: "text",
};
export default CustomInput;
