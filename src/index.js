// initialize the website and set the homepage as the current route

import { header } from "./components/header";
import { subheader } from "./components/subheader";
import { router } from "./router/router";
import { routes } from "./router/routes";

const app = () => {
  const content = document.querySelector("#content");
  //header component with the restaurant title
  header(content);
  subheader(content);
  //sub header with route links

  //initialize the website and call the router function with the homepage route
  router(routes[0], content);
};

app();
