import "./style.css";

import { localeHome, deployHome } from "./home";

import { deployHeader, localeNavigation, refreshHeader } from "./header";

/* import { deployMenu, localeMenu } from "./menu";*/ 

function deployTabs () {
    container.innerHTML = "";

    switch (current['page']) {
        case "home":
            container.appendChild(deployHome());
            break;

        case "menu":
            currentPage = "menu"
            deployMenu();
            break;
        
        case "order":
            deployOrder();
            break;

        case "check":
            deployCheck();
            break;

        case "contact":
            deployContacts();
            break;

        default:
            container.appendChild(deployHome());
            break;
    }

}

const pageHeader = document.getElementsByTagName("header")[0];

const languages = {

    'en': 'English',
    'es': 'Español',
    'ja': '日本語',
    'zh-Hans': '中文 (简单)',

}



const parentElement = document.getElementsByTagName("html")[0];

let container = document.getElementById("content");

let current = {
    'page': 'home',
    'lang': parentElement.getAttribute("lang"),
};

deployHeader();
deployTabs();

export {deployTabs, pageHeader, current, parentElement, container, languages}

