import { Box, styled } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(5),
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));
