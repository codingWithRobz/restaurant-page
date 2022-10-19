import { createElement } from "../utils/createElement";

export const contact = (content) => {
  const page = createElement("div", "page-content", "Contact Page");
  content.appendChild(page);
};
