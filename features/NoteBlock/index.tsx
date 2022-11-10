import * as S from "./NoteBlock.styled"
import {FormEvent, useEffect, useState} from "react";
import NoteComponent from "../NoteComponent";
import {saveBlock} from "../api";
import {emptyNote} from "../noteUtils";
import {INote, INoteBlock} from "../types";

interface NoteBlockProps {
    noteBlock: INoteBlock
}

const NoteBLock = ({noteBlock}: NoteBlockProps) => {
    const [notes, setNotes] = useState<INote[]>(noteBlock.notes)
    const [noteTarget, setNoteTarget] = useState(0)

    useEffect(() => {
        setNotes(noteBlock.notes)
    }, [noteBlock])

    useEffect(()=>{
        document.addEventListener("keydown",e=>console.log(e))

        return () => {
            document.removeEventListener("keydown",e=>console.log(e))
        }
    },[])


    function handleNoteComponentOnChange(note: INote) {
        const tempNotes = notes
        for (let i = 0; i < tempNotes.length; i++) {
            if (tempNotes[i].id === note.id) {
                tempNotes[i] = note
            }
        }
        save(tempNotes)
        setNotes(tempNotes)
    }

    function addNote() {
        const newNote: INote = emptyNote()
        setNotes(notes => [...notes, newNote])
    }

    async function save(notes: INote[]) {
        let saveData = noteBlock
        noteBlock.notes = notes
        await saveBlock(saveData)
    }

    function handleNoteOnDelete(id: string) {
        let tempNotes = notes.filter(n => n.id !== id)
        save(tempNotes)
        setNotes(tempNotes)
    }


    return (
        <S.Wrapper>
            <S.Notes>
                {
                    notes.map((n, i) =>
                        <NoteComponent key={n.id}
                                       note={n}
                                       onChange={handleNoteComponentOnChange}
                                       onDelete={handleNoteOnDelete}
                                       index={i}
                                       ediding={i===noteTarget}
                        />
                    )
                }
            </S.Notes>
            <S.AddNoteButtonWrapper>
                <S.AddNoteButton onClick={addNote}>+ Tilføj note</S.AddNoteButton>

            </S.AddNoteButtonWrapper>
        </S.Wrapper>
    )
}

export default NoteBLock