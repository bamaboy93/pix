import HeroAppBar from "../HeroAppBar/HeroAppBar";
import SearchWrapper from "../SearchWrapper/SearchWrapper";
import Categories from "../Categories/Categories";

import { Wrapper } from "./Hero.styled";

const Hero = ({ categories, onSubmit }) => {
  return (
    <Wrapper>
      <HeroAppBar />
      <SearchWrapper onSubmit={onSubmit} />
      <Categories categories={categories} />
    </Wrapper>
  );
};

export default Hero;
