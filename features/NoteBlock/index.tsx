import * as S from "./NoteBlock.styled";
import { useEffect, useState } from "react";
import NoteComponent from "../NoteComponent";
import { saveBlock } from "../api";
import { emptyNote } from "../noteUtils";
import { BlockType, INote, INoteBlock } from "../types";

interface NoteBlockProps {
  noteBlock: INoteBlock;
  blockType: BlockType;
}

const NoteBLock = ({ noteBlock, blockType }: NoteBlockProps) => {
  const [notes, setNotes] = useState<INote[]>(noteBlock.notes);
  const [noteTarget, setNoteTarget] = useState(0);

  useEffect(() => {
    setNotes(noteBlock.notes);
  }, [noteBlock]);

  useEffect(() => {
    if (noteTarget < 0) setNoteTarget(0);
    if (noteTarget >= notes.length) setNoteTarget(notes.length - 1);
  }, [noteTarget]);

  function handleEventKeydown(e: KeyboardEvent) {
    console.log(noteTarget);
    if (e.code === "ArrowDown") {
      setNoteTarget((nt) => nt + 1);
    } else if (e.code === "ArrowUp") {
      setNoteTarget((nt) => nt - 1);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEventKeydown);

    return () => {
      document.removeEventListener("keydown", handleEventKeydown);
    };
  }, []);

  function handleNoteComponentOnChange(note: INote) {
    const tempNotes = notes;
    for (let i = 0; i < tempNotes.length; i++) {
      if (tempNotes[i].id === note.id) {
        tempNotes[i] = note;
      }
    }
    save(tempNotes);
    setNotes(tempNotes);
  }

  function addNote() {
    const newNote: INote = emptyNote();
    const tempNotes = [...notes, newNote];
    setNotes(tempNotes);
    save(tempNotes);
  }

  function insetNote(index: number) {
    const newNote: INote = emptyNote();
    let tempNotes = notes;
    tempNotes.splice(index, 0, newNote);
    setNotes(tempNotes);
  }

  async function save(notes: INote[]) {
    let saveData = noteBlock;
    noteBlock.notes = notes;
    await saveBlock(saveData, blockType);
  }

  function handleNoteOnDelete(id: string) {
    let tempNotes = notes.filter((n) => n.id !== id);
    save(tempNotes);
    setNotes(tempNotes);
  }

  function handleNoteComponentOnActive(index: number) {
    setNoteTarget(index);
  }

  return (
    <S.Wrapper>
      <S.Notes>
        {notes.map((n, i) => (
          <NoteComponent
            key={n.id}
            note={n}
            onChange={handleNoteComponentOnChange}
            onDelete={handleNoteOnDelete}
            index={i}
            ediding={i === noteTarget}
            onActive={handleNoteComponentOnActive}
            blockType={blockType}
          />
        ))}
      </S.Notes>
      <S.AddNoteButtonWrapper>
        <S.AddNoteButton onClick={addNote}>+ Tilføj note</S.AddNoteButton>
      </S.AddNoteButtonWrapper>
    </S.Wrapper>
  );
};

export default NoteBLock;
