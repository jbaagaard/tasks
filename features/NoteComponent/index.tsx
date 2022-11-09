import * as S from "./NoteComponent.styled"
import {INote} from "../types";
import {useEffect, useRef, useState} from "react";
import {useInterval} from "../useInterval";


interface NoteComponentProps {
    note: INote
    onChange: (note: INote) => void
    onDelete:(id:string)=>void
}

const NoteComponent = ({note, onChange, onDelete}: NoteComponentProps) => {
    const [text, setText] = useState(note.text)
    const [active, setActive] = useState(note.active)
    const [time, setTime] = useState(note.timeSpend)
    const [lastUpdatedTimeSpend, setLastUpdatedTimeSpend] = useState(note.lastUpdatedTimeSpend)

    function handleTextOnChange(changeEvent: any) {
        setText(changeEvent.currentTarget.value)
        let tempNote = note
        tempNote.text = changeEvent.currentTarget.value
        onChange(tempNote)
    }


    useEffect(() => {
        tick();
    }, [])

    useInterval(() => {
        tick();
    }, active ? 1000 : null)

    function tick() {
        if (!active) return
        let tempNote = note
        const currentTime = new Date().getTime()
        tempNote.timeSpend += (currentTime - lastUpdatedTimeSpend)
        tempNote.lastUpdatedTimeSpend = currentTime
        setLastUpdatedTimeSpend(currentTime)
        onChange(tempNote)
        setTime(tempNote.timeSpend)
    }

    function handleStartButtonOnClick() {
        if (!active) setLastUpdatedTimeSpend(new Date().getTime())
        let tempNote = note
        tempNote.active = !active
        setActive(active => !active)
        onChange(tempNote);
    }

    useEffect(() => {
        console.log({active})
    }, [active])

    function handleOnDeleteClick() {
        onDelete(note.id)
    }

    return (
        <S.Wrapper>
            <S.DataWrapper>
                {"data"}
            </S.DataWrapper>
            <S.InputWrapper>
                <S.Input value={text} onChange={handleTextOnChange}/>
            </S.InputWrapper>
            <S.StartButton onClick={handleStartButtonOnClick}>{active ? "pause" : "start"}</S.StartButton>
            <S.TimeWrapper>
                {Math.round(time / 1000)}
            </S.TimeWrapper>
            <S.DeleteButton onClick={handleOnDeleteClick}>x</S.DeleteButton>
        </S.Wrapper>
    )
}

export default NoteComponent