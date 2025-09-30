import { getAttribute } from "./utils/getAttribute";
import { querySelector } from "./utils/querySelector";

export const samples = 100;
export const multiplicationFactor = 2;

const elt = querySelector("svg>circle");
export const cx0 = +getAttribute(elt, "cx");
export const cy0 = +getAttribute(elt, "cy");
export const r0 = +getAttribute(elt, "r");

export const svgns = "http://www.w3.org/2000/svg";

export const gSamples = querySelector("g.samples");
export const gLines = querySelector("g.lines");
