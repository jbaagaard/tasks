import * as S from "./NoteBlock.styled"
import {useState} from "react";
import * as Types from "../types";
import NoteComponent from "../NoteComponent";
import {saveBlock} from "../api";

interface NoteBlockProps{
    noteBlock:Types.INoteBlock
}
const NoteBLock = ({noteBlock}:NoteBlockProps) => {
const [notes,setNotes] = useState<Types.INote[]>(noteBlock.notes)

    function save(){

    }

    function handleNoteComponentOnChange(note:Types.INote) {
    const tempNotes = notes
        for (let i = 0; i < tempNotes.length; i++) {
            if(tempNotes[i].id === note.id){
                tempNotes[i] = note
            }
        }
        setNotes(tempNotes)
    }

    function addNote() {
    const newNote:Types.INote = {data: "", id: Math.random()+""+Math.random(), minutesSpend: 0, completion: "Not Started", text: "",active:false}
        setNotes(notes=>[...notes,newNote])
    }

    async function handleSaveOnClick() {
    let saveData =     noteBlock
        noteBlock.notes = notes
    await saveBlock(saveData)
        alert("saved")
    }

    return (
        <S.Wrapper>
            <S.Notes>
                {
                    notes.map(n=>
                        <NoteComponent key={n.id} note={n} onChange={handleNoteComponentOnChange}/>
                    )
                }
            </S.Notes>
            <button onClick={addNote}>add note</button>
            <button onClick={()=>console.log(notes)}>console</button>
            <button onClick={handleSaveOnClick}>save</button>
        </S.Wrapper>
    )
}

export default NoteBLock