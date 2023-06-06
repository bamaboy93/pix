import { Box, styled as muiStyled } from "@mui/material";

import styled from "@emotion/styled";

export const Wrapper = muiStyled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  marginTop: theme.spacing(6),
}));

export const ImageWrapper = muiStyled(Box)(({ theme }) => ({
  width: "100wv",
  height: "70vh",
}));

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
