import { createHomePage } from "./home";
import { createHeader } from "./header";
import "./styles.css";
import "./asset/nav-logo.png";

export const initialPageLoad = () => {
  createHomePage();
  createHeader();
};
