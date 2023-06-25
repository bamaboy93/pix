import PropTypes from "prop-types";
import { Alert } from "@mui/material";
import { AlertWrapper } from "./Alerts.styled";

const Alerts = ({ message }) => {
  return (
    <AlertWrapper>
      <Alert variant="filled" severity="info" color="error">
        <b>{message}</b>
      </Alert>
    </AlertWrapper>
  );
};

Alerts.propTypes = {
  message: PropTypes.string,
};

export default Alerts;
