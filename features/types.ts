export type Status = "Not Started" | "In Progress" | "Done"

export interface INoteBlock {
    id:string
    date:Date
    notes:INote[]
}

export interface JSONINoteBlock extends Omit<INoteBlock, "date"> {
    date:string
}

export interface INote {
    id:string
    text:string
    data:string
    minutesSpend:number
    completion:Status
    active:boolean
    lastUpdatedMinutesSpend:Date
}

export interface JSONINote extends Omit<INote, "lastUpdatedMinutesSpend"> {
    lastUpdatedMinutesSpend: string
}