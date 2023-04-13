export type Status = "Not Started" | "In Progress" | "Done";

export type BlockType = "daily" | "template" | "global";

export interface FullDataImportDto {}

export interface INoteBlock {
  id: string;
  date: Date;
  notes: INote[];
}

export interface JSONINoteBlock extends Omit<INoteBlock, "date"> {
  date: string;
}

export interface INote {
  id: string;
  text: string;
  data: string;
  timeSpend: number;
  completion: Status;
  active: boolean;
  lastUpdatedTimeSpend: number;
}

export interface JSONINote extends Omit<INote, "lastUpdatedTimeSpend"> {
  lastUpdatedTimeSpend: string;
}
