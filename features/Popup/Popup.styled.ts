import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
  }
  100%{
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${fadeIn} 200ms;
`;

const enter = keyframes`
  0%{
    transform: translateY(-100%);
  }
  
  100%{
    transform: translateY(0);
  }
`;

export const Popup = styled.div`
  animation: ${enter} 200ms;
`;
