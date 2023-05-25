import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
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

  //   components: {
  //     MuiPaper: {
  //       styleOverrides: {
  //         root: {
  //           backgroundColor: "#3B3B3B",
  //           color: "#fff",
  //         },
  //       },
  //     },
  //   },
});
