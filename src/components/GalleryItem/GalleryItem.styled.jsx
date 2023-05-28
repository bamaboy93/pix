import styled from "@emotion/styled";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const Item = styled.li`
  :nth-child(3) {
    grid-row: span 2;
  }

  :nth-child(4) {
    grid-column: span 2;
  }

  :nth-child(6) {
    grid-row: span 2;
  }

  :nth-child(7) {
    grid-row: span 2;
    grid-column: span 2;
  }

  :nth-child(10) {
    grid-row: span 2;
    grid-column: span 2;
  }

  :nth-child(11) {
    grid-row: span 2;
  }

  :nth-child(14) {
    grid-column: span 2;
  }

  :nth-child(15) {
    grid-column: span 2;
  }

  :nth-child(17) {
    grid-row: span 2;
    grid-column: span 2;
  }
`;
