import { createHomePage } from "./home";
import { createAboutPage } from "./aboutPage";

export const createHeader = () => {
  const menu = document.querySelector(".nav-button");

  const homeButton = document.createElement("button");
  homeButton.setAttribute("id", "home-button");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.setAttribute("id", "menu-button");
  menuButton.textContent = "Menu";

  const aboutButton = document.createElement("button");
  aboutButton.setAttribute("id", "about-button");
  aboutButton.textContent = "About";

  menu.appendChild(homeButton);
  menu.appendChild(menuButton);
  menu.appendChild(aboutButton);

  homeButton.addEventListener("click", () => {
    clearContent();
    createHomePage();
  });

  menuButton.addEventListener("click", () => {
    clearContent();
    createMenuPage();
  });

  aboutButton.addEventListener("click", () => {
    clearContent();
    createAboutPage();
  });
};

const clearContent = () => {
  const content = document.querySelector(".container");
  const pageContent = document.querySelector(".page-content");
  const aboutContent = document.querySelector(".about-page");

  if (pageContent) {
    content.removeChild(pageContent);
  } else if (aboutContent) {
    content.removeChild(aboutContent);
  }
};
