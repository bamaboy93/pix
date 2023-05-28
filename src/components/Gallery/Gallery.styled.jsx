import styled from "@emotion/styled";

export const Grid = styled.ul`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-auto-flow: dense;
`;
