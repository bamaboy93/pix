import { styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  marginTop: theme.spacing(8),
  marginBottom: theme.spacing(8),
  height: "42px",
  outline: 0,
  boxshadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  borderRadius: "4px",
}));

export const Input = styled("input")(({ theme }) => ({
  outline: 0,
  width: "650px",
  padding: "0 16px",
  opacity: "0.7",
  border: "0",
  borderRadius: "4px 0 0 4px",
  fontSize: 16,

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.ease,
  }),

  " &:focus": {
    opacity: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
}));

export const Button = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  outline: 0,
  border: 0,
  borderRadius: "0 4px 4px 0",
  height: "42px",
  width: "42px",
  color: theme.palette.common.white,
  backgroundColor: theme.palette.secondary.dark,
  cursor: "pointer",

  transition: theme.transitions.create(["all"], {
    duration: theme.transitions.duration.complex,
    easing: theme.transitions.easing.ease,
  }),

  " &:hover, &:focus": {
    backgroundColor: theme.palette.primary.light,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  },
}));
