import "../src/styles/style.css";
import {loadHomePage} from "../src/modules/pageLoad.js"; 
import {loadMenu} from "../src/modules/menuLoad.js"; 
import {loadContacts} from "../src/modules/contactsLoad.js"; 

const homeBtn = document.querySelectorAll(".homeBtn");
const menuBtn = document.querySelectorAll(".menuBtn");
const contactBtn = document.querySelectorAll(".contactBtn");
const burgerMenu = document.querySelector(".burger-menu");
const sideBar = document.getElementById("sidebar")

document.addEventListener("DOMContentLoaded" , () => {
    loadHomePage();
})

burgerMenu.addEventListener("click" , () => {
    if(sideBar.dataset.active === "true")
    {
        sideBar.classList.remove("showSideBar")
        sideBar.classList.add("hideSideBar");
        sideBar.dataset.active = "false";
    }
    else
    {
        sideBar.classList.remove("hideSideBar")
        sideBar.classList.add("showSideBar");
        sideBar.dataset.active = "true";
    }
})

homeBtn.forEach(button => {
    button.addEventListener("click" , () => {
        loadHomePage();
    });
});

menuBtn.forEach(button => {
    button.addEventListener("click" , () => {
        loadMenu();
    });
});

contactBtn.forEach(button => {
    button.addEventListener("click" , () => {
        loadContacts();
    });
});