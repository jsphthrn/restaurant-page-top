import { current, parentElement } from ".";
import logo from "./assets/company-logo-generic.svg";

export let localeFooter = {

    "en": {
        
        "trademark": "jsphthrn 2026. All rights reserved. Images and social media icons are property of their respective owners. Assets used for non-commercial purposes.",
        "positions": "Open positions",
        "social": "Follow us on social media",

    },

    "es": {
        
        "trademark": "",
        "positions": "",
        "social": "",

    },

    "ja": {
        
        "trademark": "",
        "positions": "",
        "social": "",

    },

    "zh-Hans": {
        
        "trademark": "",
        "positions": "",
        "social": "",

    },

}

export function deployFooter () {

    const footer = document.getElementsByTagName("footer")[0];

    const identityContainer = document.createElement("div");
    identityContainer.setAttribute("id", "identity-container");

    const myLogo = document.createElement("img");
    myLogo.src = logo;
    myLogo.setAttribute("id", "my-logo");

    const trademark = document.createElement("div");
    trademark.setAttribute("id", "trademark");
    trademark.textContent = localeFooter[current["lang"]]["trademark"];
    trademark.setAttribute("class", "footer-element body " + current["lang"]);

    identityContainer.appendChild(myLogo);
    identityContainer.appendChild(trademark);

    const positions = document.createElement("div");
    positions.setAttribute("id", "positions");
    positions.setAttribute("class", "footer-element body " + current["lang"]);

    const social = document.createElement("div");
    social.setAttribute("id", "social");
    social.setAttribute("class", "footer-element body " + current["lang"]);

    footer.appendChild(identityContainer);
    footer.appendChild(positions);
    footer.appendChild(social);

}