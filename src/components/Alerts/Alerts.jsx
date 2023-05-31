import PropTypes from "prop-types";
import { Alert } from "@mui/material";
import Container from "../Container/Container";
import { AlertWrapper } from "./Alerts.styled";

const Alerts = ({ message }) => {
  return (
    <Container>
      <AlertWrapper>
        <Alert variant="filled" severity="info" color="error">
          <b>{message}</b>
        </Alert>
      </AlertWrapper>
    </Container>
  );
};

Alerts.propTypes = {
  message: PropTypes.string,
};

export default Alerts;
