import PropTypes from "prop-types";
import { Typography, CircularProgress } from "@mui/material";
import { NotificationWrapper } from "./PaginationNotification.styled";

const PaginationNotification = ({ isFetchingNextPage, hasNextPage }) => {
  return (
    <NotificationWrapper>
      {isFetchingNextPage && <CircularProgress color="secondary" />}

      {!hasNextPage && (
        <Typography>You have viewed all available pictures</Typography>
      )}
    </NotificationWrapper>
  );
};

PaginationNotification.propTypes = {
  isFetchingNextPage: PropTypes.bool.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
};

export default PaginationNotification;
