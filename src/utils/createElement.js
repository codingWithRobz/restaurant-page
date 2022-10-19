export const createElement = (tag, className, textContent) => {
  const elem = document.createElement(tag);
  elem.className = className;
  elem.textContent = textContent;
  return elem;
};
