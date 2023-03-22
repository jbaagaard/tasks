import styled from "styled-components";

export const SecondaryButton = styled.button`
  all: unset;
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
