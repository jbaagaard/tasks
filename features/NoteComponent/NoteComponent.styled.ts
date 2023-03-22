import styled from "styled-components";
import { SecondaryButton } from "../styled-components";

const lineHeight = "2.625rem";

export const Wrapper = styled.div`
  max-width: 50rem;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0.5rem;
  height: ${lineHeight};
  align-items: center;
  padding-left: 0.5rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const DataWrapper = styled.div`
  color: ${(props) => props.theme.text};
`;

export const RightContent = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const LineNumber = styled.div`
  color: ${(props) => props.theme.textSubtle};
  line-height: ${lineHeight};
  width: 2.375rem;
  border-right: 0.125rem solid ${(props) => props.theme.textSubtler};
`;

export const InputWrapper = styled.div``;

export const Input = styled.input<{ comment: boolean }>`
  all: unset;
  height: ${lineHeight};
  color: ${(props) =>
    props.comment ? props.theme.textSubtle : props.theme.text};
  font-size: 1em;
  width: 100%;
`;

export const DeleteButton = styled(SecondaryButton)``;
