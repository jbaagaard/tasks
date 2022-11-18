import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100%;
  background-color: ${(props) => props.theme.bg};
`;

export const Header = styled.div`
  height: 32px;
  background-color: ${(props) => props.theme.bgLight};
`;

export const HeaderContent = styled.div`
  display: flex;
  max-width: 800px;
  width: 100%;
  justify-content: center;
`;
