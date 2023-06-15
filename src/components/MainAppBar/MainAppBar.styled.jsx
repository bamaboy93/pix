import { styled, alpha } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import { AppBar, Box, InputBase } from "@mui/material";

export const AppBarLine = styled(AppBar)(({ theme, visible }) => ({
  height: "65px",
  top: visible ? "0" : "-65px",
  backgroundColor: theme.palette.primary.light,
  transition: "top 0.4s ease-out",
}));

export const Logo = styled(NavLink)(({ theme }) => ({
  fontFamily: theme.typography.logoFont,
  fontWeight: "bold",
  fontSize: "24px",
  color: theme.palette.common.black,
}));

export const Form = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(6),
  marginLeft: theme.spacing(6),
  width: "100%",
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
  },
}));

export const Actions = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const MobileActions = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
