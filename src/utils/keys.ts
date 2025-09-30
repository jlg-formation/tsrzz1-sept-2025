export const keys = <T extends Object>(o: T) => {
  return Object.keys(o) as (keyof T)[];
};
