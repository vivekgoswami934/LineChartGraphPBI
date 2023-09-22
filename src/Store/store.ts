import { atom } from "nanostores";
import { emptyLineGraphData } from "../transform";

export const $lineGraphData = atom<any>(emptyLineGraphData);

export const $height = atom<number>(0);
export const $width = atom<number>(0);
