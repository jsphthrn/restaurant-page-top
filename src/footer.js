import { current, parentElement } from ".";

export let localeFooter = {

    "en": {
        
        "trademark": "jsphthrn 2026. All rights reserved.",
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

    const trademark = document.createElement("div");
    trademark.setAttribute("id", "trademark");
    trademark.textContent = localeFooter[current["lang"]]["trademark"];

    const positions = document.createElement("div");
    positions.setAttribute("id", "positions");

    const social = document.createElement("div");
    social.setAttribute("id", "social");

    footer.appendChild(trademark);
    footer.appendChild(positions);
    footer.appendChild(social);

}