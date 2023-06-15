import { styled, Box } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(5),
}));
