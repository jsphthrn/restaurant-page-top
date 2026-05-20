import { parentElement, current} from ".";

export let localeContact = {

    'en': {

        "contact-title": "We want to hear from you",
        "name-placeholder": "Type your name",
        "name-input-label": "Your name: ",
        "phone-data-label": "Phone number: ",
        "phone-placeholder": "+1 55 5555 5555",
        "email-label": "Your email: ",
        "email-placeholder": "someone@someplace.com",
        "message-label": "Your message (optional): ",
        "send-button": "Send message",
        "between-subpanel": "Or, if you prefer reaching out directly",
        "owner-name": "John Doe",
        "owner-title": "Owner / Main Chef",
        "owner-email": "johndo@kburrow.com",
        "owner-phone": "+52 XX 9999 9999",
        "manager-name": "Dors Venabili",
        "manager-title": "Manager",
        "manager-email": "dorsve@kburrow.com",
        "manager-phone": "+52 YY 0000 0000",
        "communication-head-name": "Bruce Levenspiel",
        "communication-head-title": "Head of Communication",
        "communication-head-email": "brucele@kburrow.com",
        "communication-head-phone": "+52 ZZ 6464 6464",
    },

    'es': {

        "contact-title": "Queremos saber de ti",

    },

    'ja': {

        "contact-title": "お客様からお興味をご存知欲しくていただきます。",

    },

    'zh-Hans': {

        "contact-title": "请让我们关于您更知道",

    },


}

export function deployContacts () {

    const contactTitle = document.createElement("div");
    contactTitle.textContent = localeContact[current["lang"]]["contact-title"];
    contactTitle.setAttribute("class", "subheader");

    const contactParagraph = document.createElement("div");
    contactParagraph.textContent = localeContact[current["lang"]]["contact-paragraph"];
    contactParagraph.setAttribute("class", "normal-text");

    const panel = document.createElement("div");
    panel.setAttribute("class", "panel");

    const subPanelInput = document.createElement("div");
    subPanelInput.setAttribute("class", "subpanel");
    subPanelInput.setAttribute("id", "subpanel-input");

    const nameInput = document.createElement("input");
    nameInput.setAttribute("placeholder", localeContact[current["lang"]]["name-placeholder"]);
    nameInput.setAttribute("class", "message-input");
    nameInput.setAttribute("id", "name-input");
    nameInput.setAttribute("name", "name-input");
    nameInput.setAttribute("type", "text");

    const nameInputLabel = document.createElement("label");
    nameInputLabel.setAttribute("for", "name-input");
    nameInputLabel.textContent = localeContact[current["lang"]]["name-input-label"];
    nameInputLabel.setAttribute("class", "input-label");

    subPanelInput.appendChild(nameInputLabel);
    subPanelInput.appendChild(nameInput);


    const betweenSubpanel = document.createElement("div");
    betweenSubpanel.setAttribute("class", "subheader");
    betweenSubpanel.textContent = localeContact[current["lang"]]["between-subpanel"];

    const subPanelContactInfo = document.createElement("div");
    subPanelContactInfo.setAttribute("class", "subpanel");
    subPanelContactInfo.setAttribute("id", "subpanel-info");

    panel.appendChild(subPanelInput);
    panel.appendChild(betweenSubpanel);
    panel.appendChild(subPanelContactInfo);

    const base = document.createElement("div");
    base.appendChild(contactTitle);
    base.appendChild(panel);

    return base;

}
