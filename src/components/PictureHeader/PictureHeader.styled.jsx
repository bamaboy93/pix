import styled from "@emotion/styled";

import { Button, styled as muiStyled } from "@mui/material";

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const MuiButton = muiStyled(Button)(({ theme }) => ({
  fontWeight: "bold",
  color: theme.palette.common.black,
  border: `1px solid ${theme.palette.primary.main}`,
}));
