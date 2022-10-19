import { createElement } from "../utils/createElement";

export const home = (content) => {
  const page = createElement("div", "page-content", "");
  page.appendChild(
    createElement("h1", "page-title", "Welcome to Rob's Restaurant")
  );
  page.appendChild(
    createElement(
      "p",
      "page-text",
      "We are a family owned restaurant that has been in business for about 5,000 years. We have a variety of food and drinks to choose from. We are open 7 days a week from 9:00am to 9:22am. We hope to see you soon!"
    )
  );

  const info = createElement(
    "p",
    "page-text",
    "we are located on 1234 Main St, New York, NY 10001. You can call us anytime at 111-222-3333. You can also like and subscribe to Rob on "
  );
  const youtubeLink = createElement("a", "yt-link", "Youtube!");
  youtubeLink.setAttribute(
    "href",
    "https://www.youtube.com/channel/UCOGNUEWw2BPGQg5FmMPMrBA"
  );
  youtubeLink.setAttribute("target", "_blank");
  info.appendChild(youtubeLink);

  page.appendChild(info);

  const homeImg = createElement("img", "img", "");
  homeImg.setAttribute("src", "images/home.jpg");
  page.appendChild(homeImg);

  content.appendChild(page);
};
