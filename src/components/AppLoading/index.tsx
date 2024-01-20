import { Box, CircularProgress, styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { useAppSelector } from "../../store";

const CustomStyledDialog = styled(Dialog)({
  "& .MuiPaper-root": {
    width: "100%",
    height: "100%",
    background: "transparent",
    boxShadow: "inherit",
    display: "flex",
  },
});

const AppLoading = () => {
  const { isAppLoading } = useAppSelector((state) => state.loading);
  return (
    <CustomStyledDialog
      open={isAppLoading}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Box className="flex h-full justify-center items-center">
        <CircularProgress size={86} thickness={5} />
      </Box>
    </CustomStyledDialog>
  );
};

export default AppLoading;
