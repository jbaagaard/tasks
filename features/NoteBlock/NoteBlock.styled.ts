import styled from "styled-components";
import { SecondaryButton } from "../styled-components";
export const Wrapper = styled.div``;

export const Content = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 0 40px 0;
`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 8px;
`;

export const AddNoteButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const AddNoteButton = styled(SecondaryButton)`
  width: fit-content;
  padding: 6px 32px;
  height: fit-content;
`;

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 24px;
  font-size: 14px;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.bg};
  padding-left: 8px;
  line-height: 22px;
`;
