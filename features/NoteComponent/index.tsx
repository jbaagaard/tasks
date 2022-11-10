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

function getTotalTime(active:boolean,lastUpdated:number,timeSpend:number) {
    const currentTime = new Date().getTime()

    return active? timeSpend + (currentTime - lastUpdated) : timeSpend
}

const NoteComponent = ({note, onChange, onDelete, index}: NoteComponentProps) => {
    const [text, setText] = useState(note.text)
    const [active, setActive] = useState(note.active)
    const [timeSpendPreviously, setTimeSpendPreviously] = useState(note.timeSpend)
    const [lastUpdatedTimeSpend, setLastUpdatedTimeSpend] = useState(note.lastUpdatedTimeSpend)
    const [comment, setComment] = useState(false)
    const [totalTime, setTotalTime] = useState(getTotalTime(note.active,note.lastUpdatedTimeSpend,note.timeSpend))

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
            setTotalTime(getTotalTime(active,lastUpdatedTimeSpend,timeSpendPreviously))
    }

    function handleStartButtonOnClick(value: boolean) {
        let tempNote = note

        if (value) {
            //start timer
            const currentTime = new Date().getTime()
            setLastUpdatedTimeSpend(new Date().getTime())
            tempNote.lastUpdatedTimeSpend = currentTime
            tick();
        }
        else
        {
            //pause timer
            const currentTime = new Date().getTime()
            const tempTotalTime = timeSpendPreviously+((currentTime - lastUpdatedTimeSpend))
            setTimeSpendPreviously(tempTotalTime)
            setLastUpdatedTimeSpend(currentTime)
            tempNote.timeSpend = tempTotalTime
            tempNote.lastUpdatedTimeSpend = currentTime
        }
        tempNote.active = value
        setActive(value)
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
            <S.RightContent>
                {!comment &&
                    <>
                        <TimeToggle time={totalTime} value={active} onChange={handleStartButtonOnClick}/>
                        <S.DataWrapper>
                        </S.DataWrapper>
                    </>
                }
                <S.DeleteButton onClick={handleOnDeleteClick}>x</S.DeleteButton>
            </S.RightContent>
        </S.Wrapper>
    )
}

export default NoteComponent