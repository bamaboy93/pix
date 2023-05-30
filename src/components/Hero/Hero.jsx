import AppBar from "../AppBar/AppBar";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Categories from "../Categories/Categories";

import { Wrapper } from "./Hero.styled";

const Hero = () => {
  return (
    <Wrapper>
      <AppBar />
      <SearchWrapper />
      <Categories />
    </Wrapper>
  );
};

export default Hero;
