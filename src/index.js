import "./style.css";

import { localeHome, deployHome } from "./home";

import { deployHeader, localeNavigation, refreshHeader } from "./header";

import { deployOrder, localeOrder } from "./order";

import { deployMenu, menu} from "./menu";

import { deployContacts } from "./contact";

import { localeFooter, deployFooter, refreshFooter } from "./footer";
 
function deployTabs () {
    container.innerHTML = "";

    switch (current['page']) {
        case "home":
            deployHome();
            break;

        case "menu":
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
            deployHome();
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
    'user': 'admin',
    'lang': parentElement.getAttribute("lang"),
    'cart': {
        'selected': {},
        'ordered': {},
    },
};

deployHeader();
deployTabs();
deployFooter();

export {deployTabs, pageHeader, current, parentElement, container, languages}

