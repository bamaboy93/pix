import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Main } from "./Layout.styled";

const Layout = () => {
  return (
    <Box display="flex" overflow="hidden">
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};

export default Layout;
