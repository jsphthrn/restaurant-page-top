export let localeHome = {

    'en': {

        'welcome-message': "Welcome to Kreiger's Burrow!",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "Popular dishes",
        'subheader-drinks': "Popular drinks",
        'subheader-bussiness': "Bussiness hours",
        'workdays': 'Mon - Fri: ',
        'weekends': 'Sat & Sun: ',

    },

    'es': {

        'welcome-message': "Bienvenido/a a Kreiger's Burrow!",
        'sub-message': "Para ordernar, por favor navegar a la pestaña Menú y seleccionar los alimentos deseados.",
        'subheader-dishes': "Platillos populares",
        'subheader-drinks': "Bebidas populares",
        'subheader-bussiness': "Horarios de servicio",
        'workdays': 'Lun - Vie: ',
        'weekends': 'Sáb - Dom: ',

    },

    'ja': {

        'welcome-message': "いらっしゃいませ!　クレイガーブラーへようこそ。",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "人気な食べ物",
        'subheader-drinks': "人気な飲み物",
        'subheader-bussiness': "営業時間",
        'workdays': '月 ~ 金: ',
        'weekends': '土 ~ 日: ',

    },

    'zh-Hans': {

        'welcome-message': "欢迎可以夹洞穴！",
        'sub-message': "Please make an order by checking the menu and select the desired items.",
        'subheader-dishes': "有名菜",
        'subheader-drinks': "有名饮料",
        'subheader-bussiness': "营业时间",
        'workdays': '周一 ~ 周五: ',
        'weekends': '周六和周日: ',

    },


}

export function deployHome (lang, container) {

    /* let aux = Object.keys(localeHome[lang]);

    for (let i = 0; i < aux.length; i++) {

        


    }

    */

    const base = document.createElement("div");

    const welcomeMessage = document.createElement("div");
    welcomeMessage.setAttribute("id", "welcome-message");
    welcomeMessage.textContent = localeHome[lang]["welcome-message"]
    
    const subMessage = document.createElement("div");
    subMessage.setAttribute("id", "sub-message");
    subMessage.textContent = localeHome[lang]["sub-message"];


    base.appendChild(welcomeMessage);
    base.appendChild(subMessage);

    return base;

}
