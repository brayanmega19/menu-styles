import slider from "./slider.js";
import darkTheme from "./slider-dark-theme.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    slider();
    darkTheme(".dark-theme-button", "dark-mode");
});