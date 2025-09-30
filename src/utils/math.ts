import { cx0, r0, cy0 } from "../constant";
import type { Point } from "../types/Point";

export const getAngle = (i: number, samples: number): number => {
  return (i * (Math.PI * 2)) / samples - Math.PI / 2;
};

export const getPointFromAngle = (angle: number): Point => {
  const x = cx0 + r0 * Math.cos(angle);
  const y = cy0 + r0 * Math.sin(angle);
  return {
    x: x,
    y: y,
  };
};
