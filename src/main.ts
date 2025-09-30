import "./style.css";
import { cx0, cy0, gSamples, r0, samples, svgns } from "./constant.ts";

// Retrouver <g class="samples"></g> et y ajouter <samples> elements circle avec cx, cy, r

for (let i = 0; i < samples; i++) {
  console.log("i = ", i);
  const circle = document.createElementNS(svgns, "circle");

  const angle = (i * (Math.PI * 2)) / samples + Math.PI / 2;
  const cx = cx0 + r0 * Math.cos(angle);
  const cy = cy0 + r0 * Math.sin(angle);

  circle.setAttribute("cx", cx + "");
  circle.setAttribute("cy", cy + "");
  circle.setAttribute("r", "1");

  gSamples.appendChild(circle);
}
