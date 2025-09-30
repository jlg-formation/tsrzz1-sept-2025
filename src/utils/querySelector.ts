export const querySelector = <T extends Element>(
  selector: string,
  type?: new () => T
): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Element avec selecteur '${selector}' non trouvé.`);
  }
  if (type && !(elt instanceof type)) {
    throw new Error(
      `Element ${selector} trouvé mais le type n'est pas bon (${type})`
    );
  }
  return elt as T;
};
