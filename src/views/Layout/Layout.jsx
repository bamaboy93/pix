import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styled";
import Hero from "../../components/Hero/Hero";
import MainAppBar from "../../components/MainAppBar/MainAppBar";

const Layout = ({ categories, show = [] }) => {
  const { pathname } = useLocation();

  return (
    <Box>
      {!show.includes(pathname) && <MainAppBar />}
      {show.includes(pathname) && <Hero categories={categories} />}
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};

Layout.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
  show: PropTypes.arrayOf(PropTypes.string),
};

export default Layout;
