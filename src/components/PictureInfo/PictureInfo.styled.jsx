import { Box, styled as muiStyled } from "@mui/material";

export const InfoWrapper = muiStyled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));

export const Tags = muiStyled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(10),
}));
