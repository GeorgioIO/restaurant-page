import logoImage from "../assets/images/logo.svg";
import "../styles/style.css";

function loadHomePage(){
    const content = document.getElementById("content");

    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero");

    const heroLogoContainer = document.createElement("div");
    heroLogoContainer.classList.add("hero-logo")

    const logo = new Image();
    logo.src = logoImage;
    logo.alt = "logo image";
    heroLogoContainer.appendChild(logo);

    const logoTextContainer = document.createElement("div");
    const h2 = document.createElement("h2");
    h2.innerHTML = `Welcome to <span class="special">pizzeria</span>`;
    logoTextContainer.appendChild(h2);
    const logoTextPara = document.createElement("p");
    logoTextPara.innerText = "The Art of Pizza, The Heart of Italy.";
    logoTextContainer.appendChild(logoTextPara);
    heroLogoContainer.appendChild(logoTextContainer);

    heroContainer.appendChild(heroLogoContainer);

    const heroPara = document.createElement("p");
    heroPara.innerText = "we bring the true flavors of Sicily to Corleone with every bite. Our pizzas are made with the finest local ingredients, inspired by generations of Sicilian tradition, and baked in a classic stone oven for that perfect crispy crust and rich, smoky flavor. Whether you’re enjoying a classic Margherita or exploring our unique specialty pizzas, each dish is crafted with passion and care."

    heroContainer.appendChild(heroPara);

    content.appendChild(heroContainer)
}

export {loadHomePage}