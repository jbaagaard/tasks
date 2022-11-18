import styled from "styled-components";
import { SecondaryButton } from "../styled-components";

const lineHeight = "42px";

export const Wrapper = styled.div`
  max-width: 800px;

  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  height: ${lineHeight};
  align-items: center;
  padding-left: 8px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const DataWrapper = styled.div`
  color: ${(props) => props.theme.text};
`;

export const RightContent = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const LineNumber = styled.div`
  color: ${(props) => props.theme.textSubtle};
  line-height: ${lineHeight};
  width: 38px;
  border-right: 2px solid ${(props) => props.theme.textSubtler};
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
