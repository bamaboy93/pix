import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      light: "#b7ec67",
      main: "#89d31a",
      dark: "#6ca614",
    },
    secondary: {
      light: "#e6e6e6",
      main: "#cdcdcd",
      dark: "#b3b3b3",
    },
  },
  typography: {
    logoFont: "'Lilita One', cursive",
  },
});
