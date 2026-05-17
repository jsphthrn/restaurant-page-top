import "./style.css";

import { localeHome, deployHome } from "./home";

import { deployHeader, localeNavigation, refreshHeader } from "./header";

import { deployContacts, localeContact } from "./contact";

import { deployMenu, menu} from "./menu";

function deployTabs () {
    container.innerHTML = "";

    switch (current['page']) {
        case "home":
            container.appendChild(deployHome());
            break;

        case "menu":
            container.appendChild(deployMenu());
            break;
        
        case "order":
            container.appendChild(deployOrder());
            break;

        case "check":
            container.appendChild(deployCheck());
            break;

        case "contact":
            container.appendChild(deployContacts());
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

