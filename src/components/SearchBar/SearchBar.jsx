import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, Form, Input } from "./SearcBar.styled";

const SearchBar = () => {
  return (
    <Form>
      <Input type="search" placeholder="Search..." />
      <Button type="submit">
        <SearchRoundedIcon fontSize="medium" />
      </Button>
    </Form>
  );
};

export default SearchBar;
