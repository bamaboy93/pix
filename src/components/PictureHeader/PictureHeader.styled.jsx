import { AppBar, Box, Button, styled } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export const Header = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
}));

export const AuthorInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  alignItems: "center",
}));

export const MuiButton = styled(Button)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  border: "none",
  outline: "none",
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

  "&:active": {
    boxShadow: "none",
  },
  "&:hover, &:focus": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: "none",
  },
}));

export const StyledFavIcon = styled(Favorite, {
  name: "StyledFavIcon",
  slot: "Button",
})({
  color: "red",
});
