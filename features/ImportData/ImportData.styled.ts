import styled from "styled-components";
import { ButtonNoStyle } from "../styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Button = styled(ButtonNoStyle)`
  padding: 8px;
  border-radius: 0.5rem;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
`;

export const Input = styled.input`
  all: unset;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgLight};

  font-size: 1em;
  width: 100%;
  padding: 4px;
  border-radius: 0.5rem;
  box-sizing: border-box;
`;
