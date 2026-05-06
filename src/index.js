import "./style.css";

import { localeHome, deployHomeHome, deployHome } from "./normal-page";


const navigationMenu = document.getElementById("language-selection");
navigationMenu.addEventListener("change", () => {

    let aux = Object.keys(localeNavigation[navigationMenu.value]);

    for (let i = 0; i < aux.length; i++) {

        document.getElementById("button-" + aux[i]).textContent = localeNavigation[navigationMenu.value][aux[i]];

    }

    document.getElementsByTagName("html")[0].setAttribute("lang", navigationMenu.value);

    currentLanguage = navigationMenu.value;

    container.innerHTML = "";
    container.appendChild(deployHome(currentLanguage));

});

let currentPage = "home";

let currentLanguage = document.getElementsByTagName("html")[0].getAttribute("lang");

let localeNavigation = {

    'en': {

        'home': "HOME",
        'menu': "MENU",
        'order': "ORDER",
        'check': "CHECK",
        'contact': "CONTACT",

    },

    'es': {

        'home': "INICIO",
        'menu': "MENÚ",
        'order': "ORDENAR",
        'check': "CUENTA",
        'contact': "CONTACTO",

    },

    'ja': {

        'home': "ホーム",
        'menu': "メニュー",
        'order': "ご注文",
        'check': "お支払い",
        'contact': "連絡",

    },

    'zh-Hans': {

        'home': "首页",
        'menu': "菜单",
        'order': "点餐",
        'check': "结帐",
        'contact': "联系",

    },
    
}

let container = document.getElementById("content");

container.innerHTML = "";

container.appendChild(deployHome(currentLanguage, container));


console.log(localeNavigation["ja"]);


