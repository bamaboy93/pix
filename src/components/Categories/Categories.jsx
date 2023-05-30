import { Wrapper, Item } from "./Categories.styled";
import { Stack } from "@mui/material";

const buttons = [
  { label: "nature" },
  { label: "animals" },
  { label: "food" },
  { label: "sports" },
  { label: "travel" },
  { label: "fashion" },
  { label: "music" },
];

const Categories = () => {
  return (
    <Wrapper>
      <Stack spacing={2} direction="row">
        {buttons.map(({ label }) => (
          <Item variant="outlined" key={label}>
            {label}
          </Item>
        ))}
      </Stack>
    </Wrapper>
  );
};

export default Categories;
