import { Box, Typography, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(19),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: "bold",
  textShadow:
    "2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(255, 255, 255, 0.3)",
}));
