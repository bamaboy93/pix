import { Snackbar, Alert } from "@mui/material";

const Notification = ({ open, severity, text }) => {
  return (
    <Snackbar open={open} autoHideDuration={3000}>
      <Alert severity={severity} sx={{ width: "100%" }} variant="filled">
        {text}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
