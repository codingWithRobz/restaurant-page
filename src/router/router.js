import { contact } from "../pages/contact";
import { drinks } from "../pages/drinks";
import { food } from "../pages/food";
import { home } from "../pages/home";
import { createElement } from "../utils/createElement";

export const router = (route, content) => {
  //if there is content on the route, clear it out
  if (content.querySelector("#page")) {
    content.querySelector("#page").remove();
  }

  const page = createElement("div", "page", "");
  page.setAttribute("id", "page");
  //switch to newly selected route
  if (route.id === "home") {
    //call home function
    home(page);
  } else if (route.id === "food") {
    food(page);
  } else if (route.id === "drinks") {
    drinks(page);
  } else if (route.id === "contact") {
    contact(page);
  }
  content.appendChild(page);
};
