import "./styles.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

buildHomePage();
// buildMenuPage();

homeBtn.addEventListener("click", () => {
    clearContent();
    buildHomePage();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    buildMenuPage();
})

function clearContent() {
    const content = document.getElementById("content");
    content.replaceChildren();
}