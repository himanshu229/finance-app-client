import { FormControl, FormHelperText, MenuItem, Select, styled } from "@mui/material";
import { FunctionComponent, memo } from "react";

type DataType = {
  value: string;
  name: string;
};

const CustomStyledSelect = styled(Select)({
  borderRadius: "14px",
  height: "2.4rem",
  "& .MuiInputBase-input": {
    padding: "7.5px 14px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "2px solid var(--lightest-blue)",
  },
});

interface PropsType {
  value: string;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  data: DataType[] | [];
  displayEmpty?: boolean;
  error?:boolean
  disabled?:boolean
  helperText?: string;
}

const CustomSelect: FunctionComponent<PropsType> = (props) => {
  const {
    value,
    onChange,
    id,
    name,
    className,
    placeholder,
    data,
    displayEmpty,
    error,
    disabled,
    helperText,
    onBlur
  } = props;
  return (
    <FormControl fullWidth error={error} disabled={disabled}>
      <CustomStyledSelect
        id={id}
        name={name}
        className={className}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={(e)=>onBlur(e)}
        placeholder={placeholder}
        displayEmpty={displayEmpty}
      >
        {data.map((ele: DataType, index: number) => {
          return (
            <MenuItem key={index} value={ele.value}>
              {ele.name}
            </MenuItem>
          );
        })}
      </CustomStyledSelect>
      {!!helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default memo(CustomSelect);
