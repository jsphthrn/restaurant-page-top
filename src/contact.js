import { parentElement, current, container} from ".";

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

let contactPeople = ["owner", "manager", "communication-head"];

export function deployContacts () {

    const contactTitle = document.createElement("div");
    contactTitle.textContent = localeContact[current["lang"]]["contact-title"];
    contactTitle.setAttribute("class", "subheader");

    const contactParagraph = document.createElement("div");
    contactParagraph.textContent = localeContact[current["lang"]]["contact-paragraph"];
    contactParagraph.setAttribute("class", "normal-text");

    // panel for contact

    const panel = document.createElement("div");
    panel.setAttribute("class", "panel");

    /*

    const subPanelInput = document.createElement("div");
    subPanelInput.setAttribute("class", "subpanel");
    subPanelInput.setAttribute("id", "subpanel-input");

    */

    const nameInputContainer = document.createElement("div");
    nameInputContainer.setAttribute("class", "input-container")

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

    nameInputContainer.appendChild(nameInputLabel);
    nameInputContainer.appendChild(nameInput);

    const phoneInputContainer = document.createElement("div");
    phoneInputContainer.setAttribute("class", "input-container");

    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("class", "message-input");
    phoneInput.setAttribute("placeholder", localeContact[current["lang"]]["phone-placeholder"]);
    phoneInput.setAttribute("id", "phone-input");
    phoneInput.setAttribute("name", "phone-input");
    nameInput.setAttribute("type", "text");

    const phoneInputLabel = document.createElement("label");
    phoneInputLabel.setAttribute("for", "phone-input");
    phoneInputLabel.setAttribute("class", "input-label");
    phoneInputLabel.textContent = localeContact[current["lang"]]["phone-data-label"];

    phoneInputContainer.appendChild(phoneInputLabel);
    phoneInputContainer.appendChild(phoneInput);

    const emailInputContainer = document.createElement("div");
    emailInputContainer.setAttribute("class", "input-container");

    const emailInput = document.createElement("input");
    emailInput.setAttribute("placeholder", localeContact[current["lang"]]["email-placeholder"]);
    emailInput.setAttribute("class", "message-input");
    emailInput.setAttribute("id", "email-input");
    emailInput.setAttribute("name", "email-input");
    emailInput.setAttribute("type", "email");

    const emailInputLabel = document.createElement("label");
    emailInputLabel.setAttribute("for", "email-input");
    emailInputLabel.setAttribute("class", "input-label");
    emailInputLabel.textContent = localeContact[current["lang"]]["email-label"];

    emailInputContainer.appendChild(emailInputLabel);
    emailInputContainer.appendChild(emailInput);

    const messageInput = document.createElement("input");
    messageInput.setAttribute("class", "message-input");
    messageInput.setAttribute("id", "message-input");
    messageInput.setAttribute("name", "message-input");
    messageInput.setAttribute("type", "text");

    const messageInputLabel = document.createElement("label");
    messageInputLabel.setAttribute("for", "message-input");
    messageInputLabel.setAttribute("class", "input-label");
    messageInputLabel.textContent = localeContact[current["lang"]]["message-label"];

    const sendMessageButton = document.createElement("button");
    sendMessageButton.setAttribute("id", "send-message");
    sendMessageButton.setAttribute("class", "action-button");
    sendMessageButton.textContent = localeContact[current["lang"]]["send-button"];

    panel.appendChild(nameInputContainer);
    panel.appendChild(phoneInputContainer);
    panel.appendChild(emailInputContainer);
    panel.appendChild(messageInputLabel);
    panel.appendChild(messageInput);
    panel.appendChild(sendMessageButton);


    const betweenSubpanel = document.createElement("div");
    betweenSubpanel.setAttribute("class", "subheader");
    betweenSubpanel.textContent = localeContact[current["lang"]]["between-subpanel"];

    const subPanelContactInfo = document.createElement("div");
    subPanelContactInfo.setAttribute("class", "subpanel");
    subPanelContactInfo.setAttribute("id", "subpanel-info");

    for (let i = 0; i < contactPeople.length; i++) { // cycle for adding all the people in contactPeople

        // create name element for each contact

        const contactPeopleName = document.createElement("div");
        contactPeopleName.setAttribute("class", "people-name");
        contactPeopleName.setAttribute("id", contactPeople[i] + "-name");
        contactPeopleName.textContent = localeContact[current["lang"]][contactPeople[i] + "-name"];

        // create title element for each contact

        const contactPeopleTitle = document.createElement("div");
        contactPeopleTitle.setAttribute("class", "people-title");
        contactPeopleTitle.setAttribute("id", contactPeople[i] + "-title");
        contactPeopleTitle.textContent = localeContact[current["lang"]][contactPeople[i] + "-title"];

        // create email element for each contact

        const contactPeopleEmail = document.createElement("div");
        contactPeopleEmail.setAttribute("class", "people-email");
        contactPeopleEmail.setAttribute("id", contactPeople[i] + "-email");
        contactPeopleEmail.textContent = localeContact[current["lang"]][contactPeople[i] + "-email"];

        // create phone element for each contact

        const contactPeoplePhone = document.createElement("div");
        contactPeoplePhone.setAttribute("class", "people-phone");
        contactPeoplePhone.setAttribute("id", contactPeople[i] + "-phone");
        contactPeoplePhone.textContent = localeContact[current["lang"]][contactPeople[i] + "-phone"];

        // append elements to each person container

        const contactContainer = document.createElement("div");
        contactContainer.setAttribute("class", "contact-container");
        contactContainer.appendChild(contactPeopleName);
        contactContainer.appendChild(contactPeopleTitle);
        contactContainer.appendChild(contactPeopleEmail);
        contactContainer.appendChild(contactPeoplePhone);

        subPanelContactInfo.appendChild(contactContainer);

    }

    // panel.appendChild(subPanelInput);


    container.appendChild(contactTitle);
    container.appendChild(panel);
    container.appendChild(betweenSubpanel);
    container.appendChild(subPanelContactInfo);


}
