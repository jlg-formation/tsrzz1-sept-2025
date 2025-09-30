import {
  gLines,
  gSamples,
  multiplicationFactor,
  samples,
  svgns,
} from "./constant.ts";
import "./style.css";
import { getAngle, getPointFromAngle } from "./utils/math.ts";

// Retrouver <g class="samples"></g> et y ajouter <samples> elements circle avec cx, cy, r

for (let i = 0; i < samples; i++) {
  console.log("i = ", i);
  const circle = document.createElementNS(svgns, "circle");

  const angle = getAngle(i, samples);
  const p = getPointFromAngle(angle);

  circle.setAttribute("cx", p.x + "");
  circle.setAttribute("cy", p.y + "");
  circle.setAttribute("r", "1");

  gSamples.appendChild(circle);
}

for (let i = 0; i < samples; i++) {
  // cree une ligne et ajoute dans gLines
  const line = document.createElementNS(svgns, "line");

  const angle1 = getAngle(i, samples);
  const p1 = getPointFromAngle(angle1);

  const angle2 = getAngle(i * multiplicationFactor, samples);
  const p2 = getPointFromAngle(angle2);

  line.setAttribute("x1", p1.x + "");
  line.setAttribute("y1", p1.y + "");
  line.setAttribute("x2", p2.x + "");
  line.setAttribute("y2", p2.y + "");

  gLines.appendChild(line);
}
