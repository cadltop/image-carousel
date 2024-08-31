import "normalize.css";
import "./index.css";
import imageCarousel from "./imageCarousel";

const images = document.querySelectorAll("div#slide > img");
const arrowButtons = document.querySelectorAll('img[src$=".svg"]');
const container = document.querySelector("div#container");

imageCarousel(container, images, arrowButtons[0], arrowButtons[1]);
