export const getAttribute = (elt: Element, attrName: string) => {
  const value = elt.getAttribute(attrName);
  if (value === null) {
    throw new Error(
      `Attribut ${attrName} non trouvé dans l'élement ${elt.nodeName}`
    );
  }
  return value;
};
