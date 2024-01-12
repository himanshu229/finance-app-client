import styled from "@emotion/styled";
import { Box, FormHelperText } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import { FunctionComponent } from "react";

const CustomStyledTextField = styled(Box)({
  "& .MuiInputBase-root": {
    height: "2.5rem",
    borderRadius: "14px",
    overflow: "hidden",
  },
  "& .MuiFormControl-root": {
    width: "100%",
  },
});

interface PropsType {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  format?: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  onBlur?: (e: any) => void;
  id?: string;
  maxDate?: Dayjs;
  minDate?: Dayjs;
}

const CustomDatePicker: FunctionComponent<PropsType> = (props) => {
  const {
    value,
    onChange,
    format,
    name,
    disabled,
    error,
    helperText,
    onBlur,
    id,
    maxDate,
    minDate,
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <CustomStyledTextField>
          <DatePicker
            format={format}
            value={value}
            name={name}
            onChange={(newValue) => onChange(newValue)}
            disabled={disabled}
            maxDate={maxDate}
            minDate={minDate}
            slotProps={{
              textField: {
                id: id,
                error: error,
                onBlur: (e) => onBlur && onBlur(e),
                helperText: !!helperText ? (
                  <FormHelperText className="ml-0">{helperText}</FormHelperText>
                ) : (
                  ""
                ),
              },
            }}
          />
        </CustomStyledTextField>
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
