import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.text};
`;

export const Text = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.bg};
  padding: 0 8px;
  line-height: 22px;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.text};
  font-size: 14px;
  color: ${(props) => props.theme.bg};
  padding: 0 8px;
  line-height: 22px;
`;

export const Option = styled.option`
  font-size: 14px;
  color: ${(props) => props.theme.bg};
  padding: 0 8px;
  line-height: 22px;

  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;
