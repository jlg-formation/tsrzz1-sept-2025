export const querySelector = (selector: string) => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Element avec selecteur '${selector}' non trouvé.`);
  }
  return elt;
};
