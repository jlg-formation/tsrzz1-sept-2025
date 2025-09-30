type millisecond = number;

export const sleep = (delay: millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
