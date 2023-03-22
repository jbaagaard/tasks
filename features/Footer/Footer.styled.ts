import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.text};
`;

export const Text = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.bg};
  padding: 0 0.5rem;
  line-height: 1.375rem;
  width: fit-content;
`;

export const Select = styled.select`
  outline: none;
  border: none;
  background-color: ${(props) => props.theme.text};
  font-size: 0.875rem;
  color: ${(props) => props.theme.bg};
  padding-right: 0.5rem;
`;

export const Option = styled.option`
  font-size: 0.875rem;
  color: ${(props) => props.theme.bg};

  outline: none;
  border: none;
  &:focus {
    outline: none;
    border: none;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
`;
