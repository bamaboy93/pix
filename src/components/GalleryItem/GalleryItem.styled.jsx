import { styled } from "@mui/material";

export const Image = styled("img")(({ theme }) => ({
  objectFit: "cover",
  width: "100%",
  height: "100%",
  display: "block",
  borderRadius: "5px",
}));
