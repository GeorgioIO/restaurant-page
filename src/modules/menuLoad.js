const menu = [
    {
        name : "Chicken Regiano" , 
        ingredients : ["Breaded Chicken" , "Ricotta Cheese" , "Shaved Parmesan Cheese"],
        price : "$9.99",
        url : require("../assets/images/recipes/pizza/chicken-regiano-pizza.avif"),
    },
    {
        name : "The Classic" ,
        ingredients : ["Mozzarella Cheese" , "Pepperoni" , "Tomato Sauce"],
        price : "$8.99",
        url : require("../assets/images/recipes/pizza/classic-pizza.avif"),
    },
    {
        name : "Fresh Tomato",
        ingredients : ["Sliced Vine Ripen Tomatoes" , "Fresh Mozzarella" , "Fresh Basil" , "Olive Oil"],
        price : "$7.99",
        url : require("../assets/images/recipes/pizza/fresh-tomato-pizza.avif"),
    },
    {
        name : "The Bianco",
        ingredients : ["Quattro Formaggio (blend of Italian cheeses)" , "Shaved Parmesan Cheese" , "Grated Romano Cheese" , "Mozzarella Cheese" , "Ricotta Cheese"],
        price : "$10.99",
        url : require("../assets/images/recipes/pizza/the-bianco-pizza.avif"),
    },
    {
        name : "The Boss",
        ingredients : ["Fresh Mozzarela" , "Fresh Basil" , "Tomato Sauce"],
        price : "$8.49",
        url : require("../assets/images/recipes/pizza/the-boss-pizza.avif"),
    },
    {
        name : "The Brooklyn",
        ingredients : ["Cervellata Sausage" , "Roasted Peppers" , "Onions"],
        price : "$9.49",
        url : require("../assets/images/recipes/pizza/the-brooklyn-pizza.avif"),
    },
    {
        name : "The Calabrese",
        ingredients : ["Fresh Mozzarela" , "Pesto" , "Grilled Chicken" , "Roasted Peppers"],
        price : "$10.49",
        url : require("../assets/images/recipes/pizza/the-calabrese-pizza.avif"),
    },
    {
        name : "The Captain",
        ingredients : ["Pepperoni" , "Sausage" , "Meatballs"],
        price : "$11.49",
        url : require("../assets/images/recipes/pizza/the-captain-pizza.avif"),
    },
    {
        name : "The Corleone",
        ingredients : ["Italian Sausage" , "Roasted Mushrooms" , "Basil" , "Spicy Pomodoro" , "Touch of White Truffle Oil"],
        price : "$12.99",
        url : require("../assets/images/recipes/pizza/the-corleone-pizza.avif"),
    },
    {
        name : "The Hitman",
        ingredients : ["Sausage" , "Garlic" , "Red Peppers" , "Hot Peppers"],
        price : "$9.99",
        url : require("../assets/images/recipes/pizza/the-hitman-pizza.avif"),
    },
    {
        name : "The Joey D",
        ingredients : ["Meatballs" , "Ricotta Cheese" , "Shaved Parmesan Cheese"],
        price : "$9.49",
        url : require("../assets/images/recipes/pizza/the-joey-d-pizza.avif"),
    },
    {
        name : "The Lieutenant",
        ingredients : ["Roasted Peppers" , "Onions" , "Mushrooms"],
        price : "$8.99",
        url : require("../assets/images/recipes/pizza/the-lieutenant-pizza.avif"),
    },
    {
        name : "The Marie",
        ingredients : ["Thin Sliced Eggplant" , "Pomodoro Sauce" , "Grated Romano Cheese"],
        price : "$7.99",
        url : require("../assets/images/recipes/pizza/the-marie-pizza.avif"),
    },
    {
        name : "The Mona Lisa",
        ingredients : ["Fresh Mozzarella" , "Sliced Tomatoes" , "Prosciutto" , "Kalamata Olives" , "Fresh Basil"],
        price : "$11.99",
        url : require("../assets/images/recipes/pizza/the-mona-lisa.avif"),
    },
    {
        name : "The Popeye",
        ingredients : ["Blend of Four Italian Cheeses" , "Spinach" , "Mushrooms"],
        price : "$9.99",
        url : require("../assets/images/recipes/pizza/the-popeye-pizza.avif"),
    },
    {
        name : "The Queen of Sicily",
        ingredients : ["Fresh Mozzarella" , "Vine Ripen Tomatoes" , "Fried Eggplant" , "Fresh Basil" , "Balsamic Glaze"],
        price : "$10.99",
        url : require("../assets/images/recipes/pizza/the-queen-of-sicily-pizza.avif"),
    },
];

function loadMenu(){
    const content = document.getElementById("content");
    content.innerHTML = ""

    const menuContainer = document.createElement("ul");
    menuContainer.classList.add("menu");

    menu.forEach(menuItem => {
        const menuListItem = document.createElement("li");
        menuListItem.classList.add("menu-item");

        

        // Create image of menu item
        const menuListItemImage = new Image();
        menuListItemImage.src = new URL(menuItem.url, import.meta.url).href;;
        menuListItemImage.alt = menuItem.name;
        menuListItem.appendChild(menuListItemImage);

        // Create Menu Item information - right section
        const menuItemInformation = document.createElement("div");
        menuItemInformation.classList.add("menu-item-information")

        const topSection = document.createElement("div");
        topSection.classList.add("top-information");

        const textAndPrice = document.createElement("div");
        textAndPrice.classList.add("text-price")

        const menuItemName = document.createElement("h3");
        menuItemName.innerHTML = menuItem.name;
        
        textAndPrice.appendChild(menuItemName);

        const menuItemPrice = document.createElement("p");
        menuItemPrice.innerHTML = menuItem.price;

        textAndPrice.appendChild(menuItemPrice);

        topSection.appendChild(textAndPrice);

        const line = document.createElement("div");
        line.classList.add("line");
        topSection.appendChild(line);

        menuItemInformation.appendChild(topSection);

        const ingredientsList = document.createElement("ul");
        ingredientsList.classList.add("ingredients");

        menuItem.ingredients.forEach(ingredient => {
            const ingredientListItem = document.createElement("li");
            ingredientListItem.innerText = ingredient;
            ingredientsList.appendChild(ingredientListItem);
        });

        menuItemInformation.appendChild(ingredientsList);
        menuListItem.appendChild(menuItemInformation);
        menuContainer.appendChild(menuListItem)
    });

    content.appendChild(menuContainer);
}

export {loadMenu}