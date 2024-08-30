import "normalize.css";
import "./index.css";
import imageCarousel from "./imageCarousel";

const images = document.querySelectorAll("div#slide > img");

const carCollection = imageCarousel(images);
carCollection.showImage();
