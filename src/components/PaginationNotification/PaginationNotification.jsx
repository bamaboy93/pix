import { Typography, CircularProgress } from "@mui/material";
import { NotificationWrapper } from "./PaginationNotification.styled";
const PaginationNotification = ({ isFetchingNextPage, hasNextPage }) => {
  return (
    <NotificationWrapper>
      {isFetchingNextPage && <CircularProgress color="secondary" />}

      {!hasNextPage && (
        <Typography>You have viewed all available movies</Typography>
      )}
    </NotificationWrapper>
  );
};

export default PaginationNotification;
