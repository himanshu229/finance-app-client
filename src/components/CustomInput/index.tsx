import { TextField } from "@mui/material";
import { FunctionComponent, ReactNode, memo } from "react";

interface PropsType {
  value: string;
  type: string;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean;
  className?: string;
  helperText?: string;
  icons?: ReactNode;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
}

const CustomInput: FunctionComponent<PropsType> = (props) => {
  const {
    value,
    type,
    id,
    placeholder,
    defaultValue,
    error,
    className,
    helperText,
    icons,
    onChange,
    onBlur,
  } = props;
  return (
    <TextField
      error={error}
      value={value}
      type={type}
      id={id}
      placeholder={placeholder}
      defaultValue={defaultValue}
      className={""+className}
      helperText={helperText}
      InputProps={{
        endAdornment: icons,
      }}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur && onBlur(e)}
    />
  );
};
CustomInput.defaultProps = {
  value: "",
  type: "text",
};
export default memo(CustomInput);
