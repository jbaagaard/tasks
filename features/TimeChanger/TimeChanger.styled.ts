import styled from "styled-components";
import { SecondaryButton } from "../styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 1rem;
  border-radius: 0.125rem;
  display: flex;
  gap: 0.5rem;
`;

export const TimeWrapper = styled.div`
  border: 0.125rem ${(props) => props.theme.text} solid;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 2.4375rem;
  box-sizing: border-box;
`;
export const Time = styled.input`
  all: unset;
  width: 4.25rem;
  background-color: ${(props) => props.theme.bgDark};
  color: ${(props) => props.theme.text};
  height: 100%;
  padding: 0 0.5rem;
  text-align: right;
`;

export const TypeSelect = styled.div`
  border: none;
  line-height: 2.0625rem;
  font-size: 1.125rem;
  color: ${(props) => props.theme.text};
  border-left: 0.125rem solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgDark};
  box-sizing: border-box;
  padding: 0 0.625rem;
  :focus {
    outline: none;
  }
`;

export const TypeOption = styled.option``;

export const AcceptButton = styled(SecondaryButton)`
  width: 2.625rem;
  height: 2.4375rem;
  line-height: 2.125rem;
`;
