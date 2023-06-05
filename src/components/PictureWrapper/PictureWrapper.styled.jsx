import { Box, styled as muiStyled } from "@mui/material";

import styled from "@emotion/styled";

export const Wrapper = muiStyled(Box)(({ theme }) => ({
  maxHeight: "75vh",
  minHeight: "300px",
  maxWidth: "calc(99.9738vh)",
  minWidth: "calc(199.895px)",

  marginRight: "auto",
  marginLeft: "auto",
  marginTop: theme.spacing(6),
}));

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
