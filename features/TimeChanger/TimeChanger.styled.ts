import styled from "styled-components";
import { SecondaryButton } from "../styled-components";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
  padding: 16px;
  border-radius: 2px;
  display: flex;
  gap: 8px;
`;

export const TimeWrapper = styled.div`
  border: 2px ${(props) => props.theme.text} solid;
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  height: 39px;
  box-sizing: border-box;
`;
export const Time = styled.input`
  all: unset;
  width: 68px;
  background-color: ${(props) => props.theme.bgDark};
  color: ${(props) => props.theme.text};
  height: 100%;
  padding: 0 8px;
  text-align: right;
`;

export const TypeSelect = styled.select`
  border: none;
  font-size: 16px;
  color: ${(props) => props.theme.text};
  border-left: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgDark};
  box-sizing: border-box;
  padding: 0 10px;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export const TypeOption = styled.option``;

export const AcceptButton = styled(SecondaryButton)`
  width: 42px;
  height: 39px;
  line-height: 34px;
`;
