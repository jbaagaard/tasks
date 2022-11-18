import styled from "styled-components";

export const SecondaryButton = styled.button`
  all: unset;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bg};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.text};
  box-sizing: border-box;
  height: 32px;
  width: 32px;
  text-align: center;
  cursor: pointer;
  position: relative;
`;
