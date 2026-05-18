import {current} from "./index.js";
import menu from "./menu.json";

function deployMenu() {

    const base = document.createElement("div");

    base.setAttribute("id", "base");
    
    const dishSubsection = document.createElement("div");
    dishSubsection.setAttribute("id", "dish-container");
    dishSubsection.setAttribute("class", "subsection-menu");

    const dishTitle = document.createElement("div");
    dishTitle.setAttribute("class", "subheader");
    dishTitle.textContent = "Dishes";

    dishSubsection.appendChild(dishTitle);

    const dishContainer = document.createElement("div");
    dishContainer.setAttribute("class", "menu-container");

    const drinkSubsection = document.createElement("div");
    drinkSubsection.setAttribute("id", "drink-container");
    drinkSubsection.setAttribute("class", "subsection-menu");

    const drinkTitle = document.createElement("div");
    drinkTitle.setAttribute('class', 'subheader');
    drinkTitle.textContent = "Drinks";

    drinkSubsection.appendChild(drinkTitle);

    const drinkContainer = document.createElement("div");
    drinkContainer.setAttribute("class", "menu-container");

    
    for (let entry in menu) {

        const entries = document.createElement("div");
        entries.setAttribute("class", "entry");
        entries.setAttribute("id", entry);

        const images = document.createElement("img");
        images.setAttribute("src", menu[entry]["image_src"]);

        const titles = document.createElement("div");
        titles.textContent = menu[entry][current["lang"]]["dish_title"];
        titles.setAttribute("class", "entry-title");

        const descs = document.createElement("div");
        descs.setAttribute("class", "entry-desc");
        descs.textContent = menu[entry][current["lang"]]["dish_description"];

        const inds = document.createElement("div");
        inds.textContent = menu[entry][current["lang"]]["sensitive_ingredients"];
        inds.setAttribute("class", "entry-ind");

        const prices = document.createElement("div");
        prices.textContent = menu[entry]["price"] + " MXN";
        prices.setAttribute("class", "entry-price");

        const aux = document.createElement("div");
        aux.setAttribute("class", "entry-aux");

        entries.appendChild(images);
        entries.appendChild(titles);
        entries.appendChild(descs);
        entries.appendChild(inds);
        entries.appendChild(prices);

        if (menu[entry]["type"] === "dish") {
            
            dishContainer.appendChild(entries);

        } else {

            drinkContainer.appendChild(entries);

        }

    }

    dishSubsection.appendChild(dishContainer);
    drinkSubsection.appendChild(drinkContainer);

    base.appendChild(dishSubsection);
    base.appendChild(drinkSubsection);

    return base;


}

export { deployMenu, menu };