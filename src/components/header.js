export const header = (content) => {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "Rob's Restaurant";
  const subTitle = document.createElement("h2");
  subTitle.textContent =
    "a simple, yet elegant place to eat, drink, or just hang out";
  header.appendChild(title);
  header.appendChild(subTitle);
  content.appendChild(header);
};
