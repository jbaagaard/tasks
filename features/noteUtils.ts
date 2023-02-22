import { INote, INoteBlock, JSONINote, JSONINoteBlock, Status } from "./types";
import NoteBlock from "./NoteBlock";

export function emptyNote(text?: string): INote {
  return {
    lastUpdatedTimeSpend: new Date().getTime(),
    data: "",
    id: Math.random() + "" + Math.random(),
    timeSpend: 0,
    completion: "Not Started",
    text: text ? text : "",
    active: false,
  };
}

export function convertTemplate(template: INoteBlock, date: Date): INoteBlock {
  return {
    date: date,
    id: newId(),
    notes: template.notes.map((n) => ({
      id: newId(),
      text: n.text,
      data: n.data,
      timeSpend: n.timeSpend,
      completion: n.completion,
      active: n.active,
      lastUpdatedTimeSpend: n.lastUpdatedTimeSpend,
    })),
  };
}

export function newNoteBlock(date: Date): INoteBlock {
  return {
    date: date,
    id: Math.random() + "",
    notes: [
      emptyNote("//Hello world!"),
      emptyNote(),
      emptyNote(),
      emptyNote(),
      emptyNote(),
      emptyNote(),
      emptyNote(),
    ],
  };
}

export function convertJSONINoteBLock(
  JSONNodeBlock: JSONINoteBlock
): INoteBlock {
  let notes: INote[] = [];
  for (let i = 0; i < JSONNodeBlock.notes.length; i++) {
    notes.push({
      active: JSONNodeBlock.notes[i].active,
      completion: JSONNodeBlock.notes[i].completion,
      data: JSONNodeBlock.notes[i].data,
      id: JSONNodeBlock.notes[i].id,
      lastUpdatedTimeSpend: JSONNodeBlock.notes[i].lastUpdatedTimeSpend,
      text: JSONNodeBlock.notes[i].text,
      timeSpend: JSONNodeBlock.notes[i].timeSpend,
    });
  }
  return {
    date: new Date(JSONNodeBlock.date),
    id: JSONNodeBlock.id,
    notes: notes,
  };
}

function newId() {
  return Math.random() + "" + Math.random();
}
