import SearchBar from "../SearchBar/SearchBar";
import { SubTitle, Title, Wrapper } from "./SearchWrapper.styled";

const SearchWrapper = () => {
  return (
    <Wrapper>
      <Title>Explore pictures world now</Title>
      <SearchBar />
      <SubTitle>Millions of photos and images from talanted authors</SubTitle>
    </Wrapper>
  );
};

export default SearchWrapper;
