import styled from "@emotion/styled";

export const SideBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 4px 120px 4px;
`;

export const Logo = styled.a`
  font-family: ${(props) => props.theme.fonts.logo};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.xl};
  line-height: ${(props) => props.theme.lineHeights.heading};
  color: ${(props) => props.theme.colors.darkgrey};
`;
