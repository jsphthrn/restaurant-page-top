import {deployTabs, pageHeader, currentPage, container, languages, parentElement } from './index';

function deployHeader(lang, currentPage) {

    pageHeader.innerHTML = "";

    const leftSection = document.createElement("div");
    leftSection.setAttribute("id", "header-logo");
    const logo = document.createElement("img");
    const bussinessName = document.createElement("span");
    bussinessName.textContent = "Kreiger's Burrow";
    bussinessName.setAttribute("id", "bussiness-name");
    leftSection.appendChild(logo);
    leftSection.appendChild(bussinessName);

    const navigation = document.createElement("nav");

    let aux = [];

    for (let i in localeNavigation[lang]) {

        aux[i] = document.createElement("button");
        aux[i].setAttribute("id", "button-" + i);
        aux[i].setAttribute("class", "navigation-button");
        aux[i].textContent = localeNavigation[lang][i];
        aux[i].addEventListener("click", () => {

            deployTabs (i, lang);

        });

        navigation.appendChild(aux[i]);

    }

    const selector = document.createElement("select");
    selector.setAttribute("name", "language");
    selector.setAttribute("id", "language-selection");
    selector.setAttribute("class", "navigation-dropdown");
    
    let supp = [];
    
    for (let j in languages) {

        supp[j] = document.createElement("option");
        supp[j].setAttribute("value", j);
        supp[j].textContent = languages[j];

        selector.appendChild(supp[j]);

    }

    selector.value = lang;

    selector.addEventListener("change", (currentPage) => {

            
        deployHeader(selector.value);
        deployTabs(currentPage, selector.value, document.getElementById("content"));
        parentElement.setAttribute("lang", selector.value);


    });

    navigation.appendChild(selector);
    pageHeader.appendChild(leftSection);
    pageHeader.appendChild(navigation);

}

const localeNavigation = {

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


export { deployHeader, localeNavigation, languages }