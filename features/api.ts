import {INoteBlock, JSONINoteBlock} from "./types";
import {convertJSONINoteBLock} from "./noteUtils";

function dateToDaySignature(date:Date){
    return date.getFullYear()+"-"+date.getMonth()+"/"+date.getDate()
}

export async function saveBlock(noteBlock:INoteBlock){
    if(noteBlock.id === "global")
        window.localStorage.setItem("block: global",JSON.stringify(noteBlock))
    else
        window.localStorage.setItem("block:"+dateToDaySignature(noteBlock.date),JSON.stringify(noteBlock))
}

export async function loadBlock(date:Date){
    let res = window.localStorage.getItem("block:"+dateToDaySignature(date))
    if(!!res){
        let parsedRes = JSON.parse(res) as JSONINoteBlock
        return convertJSONINoteBLock(parsedRes)
    }
}