import AppBar from "../AppBar/AppBar";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Categories from "../Categories/Categories";

import { Wrapper } from "./Hero.styled";

const Hero = ({ categories }) => {
  return (
    <Wrapper>
      <AppBar />
      <SearchWrapper />
      <Categories categories={categories} />
    </Wrapper>
  );
};

export default Hero;
