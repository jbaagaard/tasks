import { BlockType, INoteBlock, JSONINoteBlock } from "./types";
import { convertJSONINoteBLock } from "./noteUtils";

const v = "4";

function dateToDaySignature(date: Date) {
  return date.getFullYear() + "-" + date.getMonth() + "/" + date.getDate();
}

export async function saveBlock(noteBlock: INoteBlock, type: BlockType) {
  if (type === "global" || type === "template")
    window.localStorage.setItem(type + ":", JSON.stringify(noteBlock));
  else
    window.localStorage.setItem(
      type + ":" + dateToDaySignature(noteBlock.date),
      JSON.stringify(noteBlock)
    );
  window.localStorage.setItem("v", v);
}

export async function loadBlock(date: Date, prefix: BlockType) {
  //await wait(50);
  if (window.localStorage.getItem("v") !== v) {
    window.localStorage.removeItem(prefix + ":" + dateToDaySignature(date));
    return;
  }
  let res;

  if (prefix === "global" || prefix === "template")
    res = window.localStorage.getItem(prefix + ":");
  else
    res = window.localStorage.getItem(prefix + ":" + dateToDaySignature(date));

  if (!!res) {
    let parsedRes = JSON.parse(res) as JSONINoteBlock;
    return convertJSONINoteBLock(parsedRes);
  }
}

export async function wait(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return;
}

export async function getAllData() {
  return window.localStorage;
}
