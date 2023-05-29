import styled from "@emotion/styled";
export const Card = styled.div``;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;

  transition: background-color 350ms ease;
`;

export const Top = styled.div`
  padding: 16px;
`;

export const Bottom = styled.div`
  padding: 16px;
  transform: translate3d(0,50px,0),
  transition: transform 350ms ease,
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

// export const Card = styled.div`
//   // &:hover ${Overlay} {
//   //   opacity: 1;
//   // }
// `;

// export const Item = styled.li`
//   :nth-child(3) {
//     grid-row: span 2;
//   }

//   :nth-child(4) {
//     grid-column: span 2;
//   }

//   :nth-child(6) {
//     grid-row: span 2;
//   }

//   :nth-child(7) {
//     grid-row: span 2;
//     grid-column: span 2;
//   }

//   :nth-child(10) {
//     grid-row: span 2;
//     grid-column: span 2;
//   }

//   :nth-child(11) {
//     grid-row: span 2;
//   }

//   :nth-child(14) {
//     grid-column: span 2;
//   }

//   :nth-child(15) {
//     grid-column: span 2;
//   }

//   :nth-child(17) {
//     grid-row: span 2;
//     grid-column: span 2;
//   }
// `;
