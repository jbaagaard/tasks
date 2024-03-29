import * as S from "./NoteBlockRenderer.styled";
import { useEffect, useState } from "react";
import { loadBlock } from "../api";
import { BlockType, INoteBlock } from "../types";
import NoteBlock from "../NoteBlock";
import { convertTemplate, newNoteBlock } from "../noteUtils";
import { NoteBlockContextProvider } from "../NoteBlockContext";

interface DayProps {
  day: Date;
  type: BlockType;
}

const NoteBlockRenderer = ({ day, type }: DayProps) => {
  const [block, setBlock] = useState<INoteBlock | undefined>();
  useEffect(() => {
    (async () => {
      setBlock(undefined);
      const res = await loadBlock(day, type);
      if (!!res) setBlock(res);
      else {
        const template = await loadBlock(day, "template");
        if (!!template && type === "daily")
          setBlock(convertTemplate(template, day));
        else setBlock(newNoteBlock(day));
      }
    })();
  }, [day, type]);

  return (
    <S.Wrapper>
      {!!block && (
        <NoteBlockContextProvider noteBlock={block}>
          <NoteBlock noteBlock={block} blockType={type} />
        </NoteBlockContextProvider>
      )}
    </S.Wrapper>
  );
};

export default NoteBlockRenderer;
