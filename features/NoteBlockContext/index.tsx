import { INote, INoteBlock } from "../types";
import { createContext, ReactNode, useEffect, useState } from "react";

interface NoteBlockContextProps {
  noteBlock: INoteBlock;
  notes: INote[];
  setNotes: (notes: INote[]) => void;
  focusIndex: number;
  setFocusIndex: (index: number) => void;
}

export const NoteBlockContext = createContext<NoteBlockContextProps>(null!);

interface noteBlockContextProviderProps {
  noteBlock: INoteBlock;
  children: ReactNode;
}

export const NoteBlockContextProvider = ({
  noteBlock,
  children,
}: noteBlockContextProviderProps) => {
  const [notes, setNotes] = useState<INote[]>(noteBlock.notes);
  const [focusIndex, setFocusIndex] = useState(0);

  useEffect(() => {
    setNotes(noteBlock.notes);
  }, [noteBlock]);

  const values: NoteBlockContextProps = {
    noteBlock: noteBlock,
    focusIndex: focusIndex,
    setFocusIndex(index: number): void {
      setFocusIndex(index);
    },
    notes: notes,
    setNotes(notes: INote[]): void {
      setNotes([...notes]);
    },
  };

  return (
    <NoteBlockContext.Provider value={values}>
      {children}
    </NoteBlockContext.Provider>
  );
};
