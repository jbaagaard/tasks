import styled from "styled-components";
import {SecondaryButton} from "../styled-components";

const lineHeight = "42px"

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  height: ${lineHeight};
  align-items: center;
`

export const DataWrapper = styled.div`
  color: ${props => props.theme.text};

`

export const LineNumber = styled.div`
  color: ${props => props.theme.textSubtle};
  line-height: ${lineHeight};
  width: 38px;
  border-right: 2px solid ${props => props.theme.textSubtle};
`

export const InputWrapper = styled.div`

`

export const Input = styled.input<{comment:boolean}>`
  all: unset;
  height: ${lineHeight};
  color: ${props => props.comment? props.theme.textSubtle : props.theme.text};
  font-size: 1em;
  width: 600px;
`

export const TimeWrapper = styled.div`
  color: ${props => props.theme.text};

`

export const DeleteButton = styled(SecondaryButton)`
`