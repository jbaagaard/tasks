import {INoteBlock, JSONINoteBlock} from "./types";
import {convertJSONINoteBLock} from "./noteUtils";

const v = "3"

function dateToDaySignature(date:Date){
    return date.getFullYear()+"-"+date.getMonth()+"/"+date.getDate()
}

export async function saveBlock(noteBlock:INoteBlock){
    if(noteBlock.id === "global")
        window.localStorage.setItem("block: global",JSON.stringify(noteBlock))
    else
        window.localStorage.setItem("block:"+dateToDaySignature(noteBlock.date),JSON.stringify(noteBlock))
    window.localStorage.setItem("v",v)

}

export async function loadBlock(date:Date){
    if(window.localStorage.getItem("v")!==v){
        window.localStorage.removeItem("block:"+dateToDaySignature(date))
        return
    }
    let res = window.localStorage.getItem("block:"+dateToDaySignature(date))
    if(!!res){
        let parsedRes = JSON.parse(res) as JSONINoteBlock
        return convertJSONINoteBLock(parsedRes)
    }
}