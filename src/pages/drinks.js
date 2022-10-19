import { createElement } from "../utils/createElement";

export const drinks = (content) => {
  const page = createElement("div", "page-content", "Drink Menu");
  content.appendChild(page);
};
