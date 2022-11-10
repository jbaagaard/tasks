import styled from "styled-components";
import {SecondaryButton} from "../styled-components";

export const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
gap: 16px;
  padding-top: 16px;
`


export const Notes = styled.div`
    display: flex;
  flex-direction: column;
  padding-right: 8px;
`

export const AddNoteButtonWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`

export const AddNoteButton = styled(SecondaryButton)`
  width: fit-content;
  padding: 6px 32px;
  height: fit-content;
`