import { Link, styled } from "@mui/material";

export const Header = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: theme.spacing(2),
  paddingRight: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  cursor: "pointer",
}));

export const Logo = styled(Link)(({ theme }) => ({
  fontFamily: "'Lilita One', cursive",
  fontSize: 28,
  fontWeight: "bold",
  color: theme.palette.common.white,
  textShadow:
    "2px 7px 5px rgba(0, 0, 0, 0.3),0px -4px 10px rgba(255, 255, 255, 0.3)",
}));
