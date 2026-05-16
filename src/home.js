import { parentElement } from ".";

export let localeHome = {

    'en': {

        'welcome-message': "Welcome!",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "Popular dishes",
        'subheader-drinks': "Popular drinks",
        'subheader-bussiness': "Bussiness hours",
        'workdays': 'Mon - Fri: ',
        'weekends': 'Sat & Sun: ',
        'hour-work': '10:00 am - 09:00 pm',
        'hour-end': '10:00 am - 06:00 pm',

    },

    'es': {

        'welcome-message': "¡Bienvenidos!",
        'sub-message': "Para ordernar, por favor navegar a la pestaña Menú y seleccionar los alimentos deseados.",
        'subheader-dishes': "Platillos populares",
        'subheader-drinks': "Bebidas populares",
        'subheader-bussiness': "Horarios de servicio",
        'workdays': 'Lun - Vie: ',
        'weekends': 'Sáb - Dom: ',
        'hour-work': '10:00 am - 09:00 pm',
        'hour-end': '10:00 am - 06:00 pm',

    },

    'ja': {

        'welcome-message': "いらっしゃいませ!",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "人気な食べ物",
        'subheader-drinks': "人気な飲み物",
        'subheader-bussiness': "営業時間",
        'workdays': '月 ~ 金: ',
        'weekends': '土 ~ 日: ',
        'hour-work': '午前10時 - 午後9時',
        'hour-end': '午前10時 - 午後6時',

    },

    'zh-Hans': {

        'welcome-message': "欢迎您们！",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "有名菜",
        'subheader-drinks': "有名饮料",
        'subheader-bussiness': "营业时间",
        'workdays': '周一 ~ 周五: ',
        'weekends': '周六和周日: ',
        'hour-work': '上午10小时 - 晚上9小时',
        'hour-end': '上午10小时 - 下午6小时',

    },


}

export function deployHome () {

    let lang = parentElement.getAttribute("lang");
    
    const base = document.createElement("div");

    base.setAttribute("id", "base");

    const sectionOne = document.createElement("div");

    const welcomeMessage = document.createElement("div");
    welcomeMessage.setAttribute("id", "welcome-message");
    welcomeMessage.textContent = localeHome[lang]["welcome-message"]
    
    const subMessage = document.createElement("div");
    subMessage.setAttribute("id", "sub-message");
    subMessage.textContent = localeHome[lang]["sub-message"];

    sectionOne.appendChild(welcomeMessage);
    sectionOne.appendChild(subMessage);
    sectionOne.setAttribute("class","section");
    sectionOne.setAttribute("id","section-one");
    
    const sectionTwo = document.createElement("div");


    const subsectionTwoOne = document.createElement("div");
    subsectionTwoOne.setAttribute("class", "subsection");
    

    const subsectionTwoTwo = document.createElement("div");
    subsectionTwoTwo.setAttribute("class", "subsection");

    const subHeaderDishes = document.createElement("div");
    subHeaderDishes.setAttribute("class","subheader");
    subHeaderDishes.setAttribute("id","subheader-dishes");
    subHeaderDishes.textContent = localeHome[lang]["subheader-dishes"];

    subsectionTwoOne.appendChild(subHeaderDishes);

    const elementContainer = document.createElement("div");
    elementContainer.appendChild(document.createElement("div"));
    elementContainer.appendChild(document.createElement("div"));
    elementContainer.appendChild(document.createElement("div"));

    subsectionTwoOne.appendChild(elementContainer);

    sectionTwo.appendChild(subsectionTwoOne);    

    const subHeaderDrinks = document.createElement("div");
    subHeaderDrinks.setAttribute("class", "subheader");
    subHeaderDrinks.setAttribute("id", "subheader-drinks");
    subHeaderDrinks.textContent = localeHome[lang]["subheader-drinks"];

    subsectionTwoTwo.appendChild(subHeaderDrinks);

    const elementContainer1 = document.createElement("div");
    elementContainer1.appendChild(document.createElement("div"));
    elementContainer1.appendChild(document.createElement("div"));
    elementContainer1.appendChild(document.createElement("div"));

    subsectionTwoTwo.appendChild(elementContainer1);


    sectionTwo.appendChild(subsectionTwoTwo); 
    sectionTwo.setAttribute("id","section-two");
    sectionTwo.setAttribute("class", "section")

    const subHeaderBussiness = document.createElement("div");
    subHeaderBussiness.setAttribute("class","subheader");
    subHeaderBussiness.setAttribute("id","subheader-drinks");
    subHeaderBussiness.textContent = localeHome[lang]["subheader-bussiness"];

    const sectionThree = document.createElement("div");
    sectionThree.setAttribute("id", "section-three");
    sectionThree.setAttribute("class", "subsection");

    const bussinessPanel = document.createElement("div");
    bussinessPanel.setAttribute("class", "panel");

    const bussinessTable = document.createElement("table");
    bussinessTable.setAttribute("id", "bussiness-table");
    bussinessTable.appendChild(document.createElement("tr"));
    bussinessTable.firstChild.appendChild(document.createElement("th"));
    bussinessTable.firstChild.firstChild.textContent = localeHome[lang]["workdays"];
    bussinessTable.firstChild.appendChild(document.createElement("td"));
    bussinessTable.firstChild.lastChild.textContent = localeHome[lang]["hour-work"];
    bussinessTable.appendChild(document.createElement("tr"));
    bussinessTable.lastChild.appendChild(document.createElement("th"));
    bussinessTable.lastChild.firstChild.textContent = localeHome[lang]["weekends"];
    bussinessTable.lastChild.appendChild(document.createElement("td"));
    bussinessTable.lastChild.lastChild.textContent = localeHome[lang]["hour-end"]
    
    bussinessPanel.appendChild(bussinessTable);

    sectionThree.appendChild(subHeaderBussiness);
    sectionThree.appendChild(bussinessPanel);

    base.appendChild(sectionOne);
    base.appendChild(sectionTwo);
    base.appendChild(sectionThree);

    return base;

}
