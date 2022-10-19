export const setActive = (page) => {
  const links = document.querySelectorAll(".link");
  links.forEach((link) => {
    link.classList.remove("active");
  });
  page.classList.add("active");
};
