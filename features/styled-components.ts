import styled from "styled-components";

export const ButtonNoStyle = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const SecondaryButton = styled(ButtonNoStyle)`
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  border-radius: 0.5rem;
  border: 0.125rem solid ${(props) => props.theme.text};
  box-sizing: border-box;
  height: 2rem;
  width: 2rem;
  text-align: center;
  cursor: pointer;
  position: relative;
`;
