import styled from "styled-components";

export const Wrapper = styled.div`
  width: 124px;
  position: relative;
  height: 33px;

  border-radius: 8px;

  overflow: hidden;
`;

export const Content = styled.div<{ value: boolean }>`
  display: flex;
  height: fit-content;
  position: absolute;
  top: 0;
  left: ${(props) => (props.value ? "0" : "-62px")};
  transition: left 0.2s;
  background-color: ${(props) => (props.value ? props.theme.green : null)};
`;

export const timeText = styled.div<{ value: boolean }>`
  width: 62px;
  color: ${(props) => (props.value ? props.theme.greenText : props.theme.text)};
  line-height: 36px;
  text-align: center;
`;

export const Button = styled.div<{ value: boolean }>`
  all: unset;
  color: ${(props) => props.theme.bg};
  background-color: ${(props) => props.theme.text};
  border-radius: 8px;
  padding: 6px;
  width: 62px;
  text-align: center;
  box-sizing: border-box;
  height: 33px;
`;
