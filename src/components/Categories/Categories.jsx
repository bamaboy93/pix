import { Wrapper, Item } from "./Categories.styled";
import { Stack } from "@mui/material";

const Categories = ({ categories }) => {
  return (
    <Wrapper>
      <Stack spacing={2} direction="row">
        {categories.slice(1, 9).map(({ id, title }) => (
          <Item variant="outlined" key={id}>
            {title}
          </Item>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Categories;
