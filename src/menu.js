import {current} from "./index.js";
import menu from "./menu.json";

const localeMenu = {

    'en': {

        "dish-title": "Dishes",
        "drink-title": "Drinks",
        "add": "Add to cart",
        "added": "Item added to cart!"

    },

    'es': {

        "dish-title": "Platillos",
        "drink-title": "Bebidas",
        "add": "Agregar al carrito",
        "added": "¡Item agregado al carrito!"

    },

    'ja': {

        "dish-title": "食べ物",
        "drink-title": "飲み物",
        "add": "カートに入れ込む",
        "added": "入れ込みました！",

    },

    'zh-Hans': {

        "dish-title": "菜",
        "drink-title": "饮料",
        "add": "添加到购物车",
        "added": "添加了！"

    },

};

function deployMenu() {

    const base = document.createElement("div");

    base.setAttribute("id", "base");
    
    const dishSubsection = document.createElement("div");
    dishSubsection.setAttribute("id", "dish-container");
    dishSubsection.setAttribute("class", "subsection-menu");

    const dishTitle = document.createElement("div");
    dishTitle.setAttribute("class", "subheader");
    dishTitle.textContent = localeMenu[current["lang"]]["dish-title"];

    dishSubsection.appendChild(dishTitle);

    const dishContainer = document.createElement("div");
    dishContainer.setAttribute("class", "menu-container");

    const drinkSubsection = document.createElement("div");
    drinkSubsection.setAttribute("id", "drink-container");
    drinkSubsection.setAttribute("class", "subsection-menu");

    const drinkTitle = document.createElement("div");
    drinkTitle.setAttribute('class', 'subheader');
    drinkTitle.textContent = localeMenu[current["lang"]]["drink-title"];

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

        const count = document.createElement("div");
        count.setAttribute("class", "entry-counter");
        count.setAttribute("id", entry + "-counter");
        count.textContent = 1;

        const addCart = document.createElement("button");
        addCart.setAttribute("class", "add-cart-button");
        addCart.setAttribute("id", "add-" + entry);
        addCart.onclick = () => {

            if (current['cart']['selected'][entry] === undefined) {

                current['cart']['selected'][entry] = (count.textContent * 1);

            } else {

                current['cart']['selected'][entry] += (count.textContent * 1);

            }

            count.textContent = 1;
            alert(localeMenu[current["lang"]]["added"]);
            console.log(current["cart"]["selected"]);

        };

        addCart.textContent = localeMenu[current["lang"]]["add"];

        const plus = document.createElement("button");
        plus.textContent = "+";
        plus.setAttribute("id", "plus-" + entry);
        plus.setAttribute("class", "control-button");
        plus.onclick = () => {

            document.getElementById(entry + "-counter").textContent = (document.getElementById(entry + "-counter").textContent * 1) + 1;

        }

        const minus = document.createElement("button");
        minus.textContent = "-";
        minus.setAttribute("id", "minus-" + entry);
        minus.setAttribute("class", "control-button");
        minus.onclick = () => {

            document.getElementById(entry + "-counter").textContent -= 1;

        }


        entries.appendChild(images);
        entries.appendChild(titles);
        entries.appendChild(descs);
        entries.appendChild(inds);
        entries.appendChild(prices);
        entries.appendChild(plus);
        entries.appendChild(minus);
        entries.appendChild(count);
        entries.appendChild(addCart);

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