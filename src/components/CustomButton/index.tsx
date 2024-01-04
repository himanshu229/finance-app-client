import { Button, styled } from "@mui/material";
import { FunctionComponent, ReactNode, memo } from "react";

const CustomStyledButton = styled(Button)({
  borderRadius: "26px !important",
});

interface PropsType {
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  text: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}

const CustomButton: FunctionComponent<PropsType> = (props) => {
  const {
    variant = "contained",
    disabled = false,
    text,
    startIcon,
    endIcon,
    type,
    onClick,
    className = "",
  } = props;
  return (
    <CustomStyledButton
      className={className}
      type={type}
      fullWidth
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={() => onClick && onClick()}
    >
      {text}
    </CustomStyledButton>
  );
};

export default memo(CustomButton);
