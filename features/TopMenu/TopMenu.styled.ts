import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Button = styled.button<{ active: boolean }>`
  width: 100%;
  background-color: ${(props) =>
    props.active ? props.theme.bgLight : props.theme.bg};
  outline: none;
  border: none;
  color: ${(props) => props.theme.text};
  padding: 8px 0;
  cursor: pointer;
`;
