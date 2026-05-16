import {deployTabs, pageHeader, current, container, languages, parentElement } from './index';

function deployHeader() {

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
    let k = 0

    for (let i in localeNavigation[current['lang']]) {

        aux[k] = document.createElement("button");
        aux[k].setAttribute("id", "button-" + i);
        aux[k].setAttribute("class", "navigation-button");
        aux[k].textContent = localeNavigation[current['lang']][i];
        aux[k].onclick = () => {
            console.log(current['page']);
            console.log(i);
            current['page'] = i;
            deployTabs ();

        };

        navigation.appendChild(aux[k]);
        k++;

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

    selector.value = current['lang'];

    selector.addEventListener("change", () => {

        current['lang'] = selector.value;
        parentElement.setAttribute("lang", current['lang']);
        refreshHeader();
        deployTabs();

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

function refreshHeader () {
    let currentLaguage = parentElement.getAttribute("lang");
    for (let i in localeNavigation[currentLaguage]) {
        document.getElementById("button-" + i).textContent = localeNavigation[currentLaguage][i];
    }

}

export { deployHeader, localeNavigation, refreshHeader}