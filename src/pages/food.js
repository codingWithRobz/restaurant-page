import { createElement } from "../utils/createElement";

export const food = (content) => {
  const page = createElement("div", "page-content", "Food Menu");
  content.appendChild(page);
};
