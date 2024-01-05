import { TextField, styled } from "@mui/material";
import { FunctionComponent, ReactNode, memo } from "react";

const CustomStyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: "2.4rem",
    borderRadius: "14px",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: "10px",
  },
  "& .MuiInputBase-input": {
    padding: "7.5px 14px",
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    border: "2px solid var(--lightest-blue)",
  },
});

interface PropsType {
  value: string;
  name: string;
  type: string;
  id?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  autoComplete?: string;
  disabled?: boolean;
  variant?: "filled" | "outlined" | "standard";
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
    helperText,
    endAdornment,
    startAdornment,
    onChange,
    onBlur,
    autoComplete,
    variant,
    name,
    disabled,
  } = props;
  return (
    <CustomStyledTextField
      fullWidth
      autoComplete={autoComplete}
      variant={variant}
      error={error}
      value={value}
      type={type}
      id={id}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      helperText={helperText}
      InputProps={{
        endAdornment: endAdornment,
        startAdornment: startAdornment,
      }}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur && onBlur(e)}
    />
  );
};

export default memo(CustomInput);
