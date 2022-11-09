import * as S from "./Day.styled"
import {useEffect, useState} from "react";
import {loadBlock} from "../api";
import {INoteBlock} from "../types";
import NoteBlock from "../NoteBlock";

interface DayProps {

}

const Day = ({}: DayProps) => {
    const [block, setBlock] = useState<INoteBlock | undefined>()
    useEffect(() => {
        (async () => {
            const res = await loadBlock(new Date());
            console.log(res)
            if (!!res)
                setBlock(res)
            else
                setBlock({date: new Date(), id: Math.random() + "", notes: []})
        })()
    }, [])

    return (
        <S.Wrapper>
            {block &&
                <NoteBlock noteBlock={block}/>
            }
        </S.Wrapper>
    )
}

export default Day