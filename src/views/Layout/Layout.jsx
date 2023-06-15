import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styled";
import Hero from "../../components/Hero/Hero";

const Layout = ({ categories }) => {
  return (
    <Box>
      <Hero categories={categories} />
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};

Layout.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Layout;
