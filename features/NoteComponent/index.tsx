import * as S from "./NoteComponent.styled"
import {INote} from "../types";
import {useState} from "react";

interface NoteComponentProps{
    note:INote
    onChange:(note:INote) => void
}
const NoteComponent = ({note,onChange}:NoteComponentProps) => {
    const [text,setText] = useState(note.text)
    function handleTextOnChange(changeEvent:any) {
        setText(changeEvent.currentTarget.value)
        let tempNote = note
        tempNote.text = changeEvent.currentTarget.value
        onChange(tempNote)
    }

    return (
        <S.Wrapper>
            <S.DataWrapper>
                {"data"}
            </S.DataWrapper>
            <S.InputWrapper>
                <S.Input value={text} onChange={handleTextOnChange}/>
            </S.InputWrapper>
            <S.TimeWrapper>
                {note.minutesSpend}
            </S.TimeWrapper>
        </S.Wrapper>
    )
}

export default NoteComponent