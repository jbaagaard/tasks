import * as S from "./NoteComponent.styled"
import {INote} from "../types";
import {useEffect, useRef, useState} from "react";
import {useInterval} from "../useInterval";
import TimeToggle from "../TimeToggle";


interface NoteComponentProps {
    note: INote
    onChange: (note: INote) => void
    onDelete: (id: string) => void
    index: number
}

const NoteComponent = ({note, onChange, onDelete, index}: NoteComponentProps) => {
    const [text, setText] = useState(note.text)
    const [active, setActive] = useState(note.active)
    const [time, setTime] = useState(note.timeSpend)
    const [lastUpdatedTimeSpend, setLastUpdatedTimeSpend] = useState(note.lastUpdatedTimeSpend)
    const [comment, setComment] = useState(false)

    // const [hide,setHide] = useState(true)

    function handleTextOnChange(changeEvent: any) {
        setText(changeEvent.currentTarget.value)
        let tempNote = note
        tempNote.text = changeEvent.currentTarget.value
        onChange(tempNote)
    }

    useEffect(() => {
        const commentRegex = /^\/\/|^#/gm;
        const isComment = !!commentRegex.exec(text) || text.length === 0
        setComment(isComment)
    }, [text])

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

    function handleStartButtonOnClick(value: boolean) {
        if (!active) setLastUpdatedTimeSpend(new Date().getTime())
        let tempNote = note
        tempNote.active = !active
        setActive(active => !active)
        onChange(tempNote);
    }

    function handleOnDeleteClick() {
        onDelete(note.id)
    }

    return (
        <S.Wrapper>
            <S.LineNumber>
                {index}
            </S.LineNumber>
            <S.InputWrapper>
                <S.Input value={text} onChange={handleTextOnChange} comment={comment}/>
            </S.InputWrapper>
            {!comment &&
                <>
                    <TimeToggle time={time} value={active} onChange={handleStartButtonOnClick}/>
                    <S.DataWrapper>
                        {"data"}
                    </S.DataWrapper>
                </>
            }
            <S.DeleteButton onClick={handleOnDeleteClick}>x</S.DeleteButton>
        </S.Wrapper>
    )
}

export default NoteComponent