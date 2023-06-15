import PropTypes from "prop-types";
import HeroAppBar from "../HeroAppBar/HeroAppBar";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Categories from "../Categories/Categories";

import { Wrapper } from "./Hero.styled";

const Hero = ({ categories }) => {
  return (
    <Wrapper>
      <HeroAppBar />
      <SearchWrapper />
      <Categories categories={categories} />
    </Wrapper>
  );
};

Hero.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Hero;
