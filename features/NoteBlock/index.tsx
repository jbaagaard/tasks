import * as S from "./NoteBlock.styled";
import { useContext, useEffect, useState } from "react";
import NoteComponent from "../NoteComponent";
import { saveBlock } from "../api";
import { emptyNote, formatTime, getFormattedTimeFromNotes } from "../noteUtils";
import { BlockType, INote, INoteBlock } from "../types";
import { NoteBlockContext } from "../NoteBlockContext";
import Footer from "../Footer";

interface NoteBlockProps {
  noteBlock: INoteBlock;
  blockType: BlockType;
}

const NoteBLock = ({ noteBlock, blockType }: NoteBlockProps) => {
  const { notes, setNotes, focusIndex, setFocusIndex } =
    useContext(NoteBlockContext);
  useEffect(() => {
    setNotes(noteBlock.notes);
  }, [noteBlock]);

  useEffect(() => {
    if (focusIndex < 0) setFocusIndex(0);
    if (focusIndex >= notes.length) setFocusIndex(notes.length - 1);
  }, [focusIndex]);

  function handleEventKeydown(e: KeyboardEvent) {
    console.log(focusIndex);
    if (e.code === "ArrowDown") {
      setFocusIndex(focusIndex + 1);
    } else if (e.code === "ArrowUp") {
      setFocusIndex(focusIndex - 1);
    } else if (e.code === "Enter") {
      insetNote(focusIndex + 1);
      setFocusIndex(focusIndex + 1);
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEventKeydown);

    return () => {
      document.removeEventListener("keydown", handleEventKeydown);
    };
  }, [focusIndex, notes]);

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
    save(tempNotes);
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
    setFocusIndex(index);
  }

  return (
    <S.Wrapper>
      <S.Content>
        <S.Notes>
          {notes.map((n, i) => (
            <NoteComponent
              key={n.id}
              note={n}
              onChange={handleNoteComponentOnChange}
              onDelete={handleNoteOnDelete}
              index={i}
              ediding={i === focusIndex}
              onActive={handleNoteComponentOnActive}
              blockType={blockType}
            />
          ))}
        </S.Notes>
        <S.AddNoteButtonWrapper>
          <S.AddNoteButton onClick={addNote}>+ Tilføj note</S.AddNoteButton>
        </S.AddNoteButtonWrapper>
      </S.Content>
      <Footer />
    </S.Wrapper>
  );
};

export default NoteBLock;
