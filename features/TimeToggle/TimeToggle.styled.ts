import styled from "styled-components";

export const Wrapper = styled.div`
  width: 7.75rem;
  position: relative;
  height: 2.0625rem;

  border-radius: 0.5rem;

  overflow: hidden;
`;

export const Content = styled.div<{ value: boolean }>`
  display: flex;
  height: fit-content;
  position: absolute;
  top: 0;
  left: ${(props) => (props.value ? "0" : "-3.875rem")};
  transition: left 0.2s;
  background-color: ${(props) => (props.value ? props.theme.green : null)};
`;

export const timeText = styled.div<{ value: boolean }>`
  width: 3.875rem;
  color: ${(props) => (props.value ? props.theme.greenText : props.theme.text)};
  line-height: 2.25rem;
  text-align: center;
`;

export const Button = styled.div<{ value: boolean }>`
  all: unset;
  color: ${(props) => props.theme.bg};
  background-color: ${(props) => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.375rem;
  width: 3.875rem;
  text-align: center;
  box-sizing: border-box;
  height: 2.0625rem;
`;
