import { Box, Button, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const Item = styled(Button)(({ theme }) => ({
  fontSize: 12,
  color: theme.palette.common.white,
  border: `1px solid ${theme.palette.secondary.light}`,
  transition: theme.transitions.create(["background-color"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeIn,
  }),

  "&:hover, &:focus": {
    backgroundColor: theme.palette.primary.main,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
}));
