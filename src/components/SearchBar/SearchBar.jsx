import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { Button, Form, Input } from "./SearcBar.styled";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handelQueryChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      alert("Please, enter your query !");
      return;
    }
    navigate({
      pathname: "/search",
      search: `query=${query}`,
    });

    setQuery("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="search"
        placeholder="Search..."
        onChange={handelQueryChange}
      />
      <Button type="submit">
        <SearchRoundedIcon fontSize="medium" />
      </Button>
    </Form>
  );
};

export default SearchBar;
