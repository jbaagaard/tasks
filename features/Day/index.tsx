import * as S from "./Day.styled";
import { useEffect, useState } from "react";
import { loadBlock } from "../api";
import { INoteBlock } from "../types";
import NoteBlock from "../NoteBlock";
import { newNoteBlock } from "../noteUtils";

interface DayProps {
  day: Date;
}

const Day = ({ day }: DayProps) => {
  const [block, setBlock] = useState<INoteBlock | undefined>();
  useEffect(() => {
    (async () => {
      const res = await loadBlock(day);
      console.log(res);
      if (!!res) setBlock(res);
      else setBlock(newNoteBlock(day));
    })();
  }, [day]);

  return <S.Wrapper>{!!block && <NoteBlock noteBlock={block} />}</S.Wrapper>;
};

export default Day;
