import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 467,
      md: 870,
      lg: 1080,
      xl: 1920,
    },
  },
});

export default theme;
