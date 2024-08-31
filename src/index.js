import "normalize.css";
import "./index.css";
import imageCarousel from "./imageCarousel";

const images = document.querySelectorAll("div#slide > img");
const arrowButtons = document.querySelectorAll('img[src$=".svg"]');

const carCollection = imageCarousel(images, arrowButtons[0], arrowButtons[1]);
