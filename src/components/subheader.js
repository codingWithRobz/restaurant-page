import { router } from "../router/router";
import { routes } from "../router/routes";
import { setActive } from "../utils/setActive";

export const subheader = (content) => {
  const header = document.createElement("div");
  header.classList.add("sub-header");

  const ul = document.createElement("ul");
  routes.forEach((route) => {
    const li = document.createElement("li");
    li.textContent = route.name;
    li.classList.add("link");

    if (route.id === "home") {
      li.classList.add("active");
    }
    //add event listener to change route
    li.addEventListener("click", () => {
      router(route, content);
      setActive(li);
      //todo change style of active route
    });
    ul.appendChild(li);
  });
  header.appendChild(ul);
  content.appendChild(header);
};
