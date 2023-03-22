import styled from "styled-components";
import { SecondaryButton } from "../styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 50rem;
  gap: 1rem;
`;

export const Button = styled(SecondaryButton)`
  width: fit-content;
  border: none;
  background-color: transparent;
  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.div`
  color: ${(props) => props.theme.text};
`;
