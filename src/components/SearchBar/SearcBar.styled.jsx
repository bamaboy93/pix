import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  margin-top: 44px;
  height: 42px;
  outline: 0;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-border-radius: 4px;
  border-radius: 4px;
`;

export const Input = styled.input`
  outline: 0;
  width: 650px;
  padding: 0 16px;
  opacity: 0.7;
  border: 0;
  -webkit-border-radius: 4px 0 0 4px;
  border-radius: 4px 0 0 4px;
  font-size: ${(props) => props.theme.fontSizes.s};
  transition: all 500ms ease;

  :focus {
    opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  border: 0;
  height: 42px;
  width: 42px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.darkgrey};

  -webkit-transition: background-color 500ms ease;
  transition: all 500ms ease;
  -webkit-border-radius: 0 4px 4px 0;
  border-radius: 0 4px 4px 0;
  :hover {
    background-color: ${(props) => props.theme.colors.accent};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
