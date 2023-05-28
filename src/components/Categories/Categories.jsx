import { Wrapper } from "./Categories.styled";
import { Button, Stack } from "@mui/material";

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
          <Button variant="outlined" key={label}>
            {label}
          </Button>
        ))}
      </Stack>

      {/* <List>
        {buttons.map(({ label }) => (
          <Item key={label}>
            <Button>{label}</Button>
          </Item>
        ))}
      </List> */}
    </Wrapper>
  );
};

export default Categories;
