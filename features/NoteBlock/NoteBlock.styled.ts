import styled from "styled-components";
import { SecondaryButton } from "../styled-components";
export const Wrapper = styled.div``;

export const Content = styled.div`
  max-width: 62.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0 2.5rem 0;
`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
`;

export const AddNoteButtonWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const AddNoteButton = styled(SecondaryButton)`
  width: fit-content;
  padding: 0.375rem 2rem;
  height: fit-content;
`;
