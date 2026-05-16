import "./style.css";

import { localeHome, deployHome } from "./home";

import { deployHeader, localeNavigation, } from "./header";

/* import { deployMenu, localeMenu } from "./menu";*/ 

function deployTabs (tab, lang, container) {

    switch (tab) {
        case "home":
            currentPage = "home";
            container.appendChild(deployHome(lang, container));
            break;

        case "menu":
            deployMenu(lang, container);
            break;
        
        case "order":
            deployOrder(lang, container);
            break;

        case "check":
            deployCheck(lang, container);
            break;

        case "contact":
            deployContacts(lang, container);
            break;

        default:
            deployHome(lang, container);
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

let currentPage = "home";

const parentElement = document.getElementsByTagName("html")[0];

let container = document.getElementById("content");

deployHeader(parentElement.getAttribute("lang"));

container.innerHTML = "";

container.appendChild(deployHome(parentElement.getAttribute("lang"), container));

export {deployTabs, pageHeader, currentPage, parentElement, container, languages}

