import * as S from "./Day.styled"
import {useEffect, useState} from "react";
import {loadBlock} from "../api";
import {INoteBlock} from "../types";
import NoteBlock from "../NoteBlock";

interface DayProps {
    day:Date
}

const Day = ({day}: DayProps) => {
    const [block, setBlock] = useState<INoteBlock | undefined>()
    console.log("day")
    useEffect(() => {
        (async () => {
            const res = await loadBlock(day);
            console.log(res)
            if (!!res)
                setBlock(res)
            else
                setBlock({date: new Date(), id: Math.random() + "", notes: []})
        })()
    }, [day])

    return (
        <S.Wrapper>
            {!!block &&
                <NoteBlock noteBlock={block}/>
            }
        </S.Wrapper>
    )
}

export default Day