import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styled";
import Hero from "../../components/Hero/Hero";

const Layout = () => {
  return (
    <Box>
      <Hero />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};

export default Layout;
