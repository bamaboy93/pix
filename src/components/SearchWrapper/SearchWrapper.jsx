import SearchBar from "../SearchBar/SearchBar";
import { Title, Wrapper } from "./SearchWrapper.styled";

const SearchWrapper = () => {
  return (
    <Wrapper>
      <Title variant="h2">Explore pictures world now</Title>
      <SearchBar />
      <Title variant="h5">
        Millions of photos and images from talanted authors
      </Title>
    </Wrapper>
  );
};

export default SearchWrapper;
