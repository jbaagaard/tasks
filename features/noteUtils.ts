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

export function getTotalTime(
  active: boolean,
  lastUpdated: number,
  timeSpend: number
) {
  const currentTime = new Date().getTime();

  return active ? timeSpend + (currentTime - lastUpdated) : timeSpend;
}
export function formatTime(time: number) {
  let seconds = time / 1000;
  if (seconds < 60) return Math.floor(seconds) + "s";
  else if (seconds < 3600) return Math.floor(seconds / 60) + "m";
  else return Math.round(seconds / 360) / 10 + "h";
}

export function getFormattedTimeFromNotes(notes: INote[]) {
  return formatTime(
    notes
      .map((n) => getTotalTime(n.active, n.lastUpdatedTimeSpend, n.timeSpend))
      .reduce((partialSum, a) => partialSum + a, 0)
  );
}
