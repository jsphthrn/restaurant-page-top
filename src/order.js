import { parentElement, current, deployTabs, container } from ".";

import { menu_content } from "./menu";

function calcCart () {

    let sum = 0;
    for (let i in current["cart"]["selected"]) {
        sum += (current["cart"]["selected"][i] * menu_content[i]["price"]);
    }
    return sum;

}

function calcBill () {

    let sum = 0;
    for (let i in current["cart"]["ordered"]) {
        sum += (current["cart"]["ordered"][i] * menu_content[i]["price"]);
    }
    return sum;

}

export let localeOrder = {

    'en': {

        'cart': "Current cart",
        'make-order': "Make order",
        'bill': "Current bill",
        'item': "Item",
        'quantity': "Quantity",
        'unit-price': 'Unit price',
        'extended-price': 'Extended price',
        'total': 'Total: ',
        'pay': 'Pay bill',
        'order-made': 'Order received!',
        'bill-paid': 'Payment received! Please visit us again. Thank you!',

    },

    'es': {

        'cart': "Carrito",
        'make-order': "Ordernar",
        'bill': "Cuenta",
        'item': "Ítem",
        'quantity': 'Cantidad',
        'unit-price': 'Precio unitario',
        'extended-price': 'Subtotal',
        'total': 'Total: ',
        'pay': 'Pagar',
        'order-made': '¡Orden recibida!',
        'bill-paid': '¡Pago recibido! Muchas gracias por su visita, ¡Vuelva pronto!',

    },

    'zh-Hans': {

        'cart': "购物车",
        'make-order': "下订单",
        'bill': "账单",
        'item': "物品",
        'quantity': "量",
        'unit-price': '単价',
        'extended-price': '小计',
        'total': '账单: ',
        'pay': '支付',
        'order-made': '下订单了！',
        'bill-paid': '谢谢，下订单支付了! 请很少久回来!',

    },

    'ja': {

        'cart': "カート",
        'make-order': "ご注文する",
        'bill': "お会計",
        'item': "アイテム",
        'quantity': "量",
        'unit-price': '単価',
        'extended-price': '小計',
        'total': '合計: ',
        'pay': 'お支払う',
        'order-made': 'ご注文を受けました！',
        'bill-paid': 'お支払を受けました！　本日のいただきありがとうございます。',

    },


}

export function deployOrder () {

    const sectionOne = document.createElement("div");
    sectionOne.setAttribute("class", "section")

    const sectionTwo = document.createElement("div");
    sectionTwo.setAttribute("class", "section");

    const cartTitle = document.createElement("div");
    cartTitle.setAttribute("class", "subheader " + current["lang"]);
    cartTitle.setAttribute("id", "cart-title");
    cartTitle.textContent = localeOrder[current["lang"]]["cart"];

    const cartTable = document.createElement("table");
    
    const cartTableHead = document.createElement("thead");
    
    const cartHeaderRow = document.createElement("tr");
    
    const cartCountHeader = document.createElement("th");
    cartCountHeader.textContent = "i";
    cartCountHeader.setAttribute("scope", "col");
    cartCountHeader.setAttribute("class", "body " + current["lang"]);
    cartHeaderRow.appendChild(cartCountHeader);

    const cartItemHeader = document.createElement("th")
    cartItemHeader.textContent = localeOrder[current["lang"]]["item"];
    cartItemHeader.setAttribute("scope", "col");
    cartItemHeader.setAttribute("class", "body " + current["lang"]);
    cartHeaderRow.appendChild(cartItemHeader);

    const cartItemQuantityHeader = document.createElement("th");
    cartItemQuantityHeader.textContent = localeOrder[current["lang"]]["quantity"];
    cartItemQuantityHeader.setAttribute("scope", "col");
    cartItemQuantityHeader.setAttribute("class", "body " + current["lang"]);
    cartHeaderRow.appendChild(cartItemQuantityHeader);

    const cartUnitPriceHeader = document.createElement("th");
    cartUnitPriceHeader.textContent = localeOrder[current["lang"]]["unit-price"];
    cartUnitPriceHeader.setAttribute("scope", "col");
    cartUnitPriceHeader.setAttribute("class", "body " + current["lang"]);
    cartHeaderRow.appendChild(cartUnitPriceHeader);

    const cartExtendedPriceHeader = document.createElement("th");
    cartExtendedPriceHeader.textContent = localeOrder[current["lang"]]["extended-price"];
    cartExtendedPriceHeader.setAttribute("scope", "col");
    cartExtendedPriceHeader.setAttribute("class", "body " + current["lang"]);
    cartHeaderRow.appendChild(cartExtendedPriceHeader);

    const cartTableBody = document.createElement("tbody");

    let k = 1;

    for (let item in current["cart"]["selected"]) {

        const itemRow = document.createElement("tr");

        const itemI = document.createElement("td");
        itemI.setAttribute("class", "cart-cell " + current["lang"]);
        itemI.textContent = k;
        k++;

        const itemName = document.createElement("td");
        itemName.setAttribute("class", "cart-cell " + current["lang"]);
        itemName.textContent = menu_content[item][current["lang"]]["dish_title"];

        const itemQuantity = document.createElement("td");
        itemQuantity.setAttribute("class", "cart-cell " + current["lang"]);
        itemQuantity.textContent = current["cart"]["selected"][item];

        const itemUnitPrice = document.createElement("td");
        itemUnitPrice.setAttribute("class", "cart-cell " + current["lang"]);
        itemUnitPrice.textContent = "$ " + menu_content[item]["price"];

        const itemExtendedPrice = document.createElement("td");
        itemExtendedPrice.setAttribute("class", "cart-cell " + current["lang"]);
        itemExtendedPrice.textContent = "$ " + (menu_content[item]["price"] * current["cart"]["selected"][item]);

        itemRow.appendChild(itemI);
        itemRow.appendChild(itemName);
        itemRow.appendChild(itemQuantity);
        itemRow.appendChild(itemUnitPrice);
        itemRow.appendChild(itemExtendedPrice);

        cartTableBody.appendChild(itemRow);

    }

    const cartTableFooter = document.createElement("tfoot");

    const cartFooterRow = document.createElement("tr");

    const totalCart = document.createElement("td");
    totalCart.setAttribute("colspan", "4");
    totalCart.setAttribute("class", "body " + current["lang"]);
    totalCart.textContent = localeOrder[current["lang"]]["total"];

    const cartValue = document.createElement("td");
    cartValue.setAttribute("class", "body " + current["lang"]);
    cartValue.textContent = "$ " + calcCart();

    cartFooterRow.appendChild(totalCart);
    cartFooterRow.appendChild(cartValue);

    cartTableFooter.appendChild(cartFooterRow);

    cartTableHead.appendChild(cartHeaderRow);

    cartTable.appendChild(cartTableHead);
    cartTable.appendChild(cartTableBody);
    cartTable.appendChild(cartTableFooter);

    const makeOrder = document.createElement("button"); // this transfers cart to already ordered items
    makeOrder.textContent = localeOrder[current["lang"]]["make-order"];
    makeOrder.setAttribute("class", "action-button");
    makeOrder.onclick = () => {

        if (current["cart"]["selected"] !== {}) {

            for (let item in current["cart"]["selected"]) {

                if (current["cart"]["ordered"][item] === undefined) {

                    current["cart"]["ordered"][item] = current["cart"]["selected"][item];

                } else {

                    current["cart"]["ordered"][item] += current["cart"]["selected"][item];

                }

            }

            current["cart"]["selected"] = {}

            alert(localeOrder[current["lang"]]["order-made"]);

            console.log(current["cart"]["ordered"]);
            console.log(current["cart"]["selected"]);

        }
        
        k = 1;

        deployTabs();

    }

    const billTitle = document.createElement("div");
    billTitle.setAttribute("class", "subheader");
    billTitle.setAttribute("id", "bill-title");
    billTitle.textContent = localeOrder[current["lang"]]["bill"];

    const billTable = document.createElement("table");
    
    const billTableHead = document.createElement("thead");
    
    const billHeaderRow = document.createElement("tr");
    
    const billCountHeader = document.createElement("th");
    billCountHeader.textContent = "i";
    billCountHeader.setAttribute("class", "body " + current["lang"]);
    billHeaderRow.appendChild(billCountHeader);

    const billItemHeader = document.createElement("th")
    billItemHeader.textContent = localeOrder[current["lang"]]["item"];
    billItemHeader.setAttribute("class", "body " + current["lang"]);
    billHeaderRow.appendChild(billItemHeader);

    const billItemQuantityHeader = document.createElement("th");
    billItemQuantityHeader.textContent = localeOrder[current["lang"]]["quantity"];
    billItemQuantityHeader.setAttribute("class", "body " + current["lang"]);
    billHeaderRow.appendChild(billItemQuantityHeader);

    const billUnitPriceHeader = document.createElement("th");
    billUnitPriceHeader.textContent = localeOrder[current["lang"]]["unit-price"];
    billUnitPriceHeader.setAttribute("class", "body " + current["lang"]);
    billHeaderRow.appendChild(billUnitPriceHeader);

    const billExtendedPriceHeader = document.createElement("th");
    billExtendedPriceHeader.textContent = localeOrder[current["lang"]]["extended-price"];
    billExtendedPriceHeader.setAttribute("class", "body " + current["lang"]);
    billHeaderRow.appendChild(billExtendedPriceHeader);

    const billTableBody = document.createElement("tbody");

    let j = 1;

    for (let item in current["cart"]["ordered"]) {

        const itemRow = document.createElement("tr");

        const itemI = document.createElement("td");
        itemI.setAttribute("class", "cart-cell " + current["lang"]);
        itemI.textContent = j;
        j++;

        const itemName = document.createElement("td");
        itemName.setAttribute("class", "cart-cell " + current["lang"]);
        itemName.textContent = menu_content[item][current["lang"]]["dish_title"];

        const itemQuantity = document.createElement("td");
        itemQuantity.setAttribute("class", "cart-cell " + current["lang"]);
        itemQuantity.textContent = current["cart"]["ordered"][item];

        const itemUnitPrice = document.createElement("td");
        itemUnitPrice.setAttribute("class", "cart-cell " + current["lang"]);
        itemUnitPrice.textContent = "$ " + menu_content[item]["price"];

        const itemExtendedPrice = document.createElement("td");
        itemExtendedPrice.setAttribute("class", "cart-cell " + current["lang"]);
        itemExtendedPrice.textContent = "$ " + (menu_content[item]["price"] * current["cart"]["ordered"][item]);

        itemRow.appendChild(itemI);
        itemRow.appendChild(itemName);
        itemRow.appendChild(itemQuantity);
        itemRow.appendChild(itemUnitPrice);
        itemRow.appendChild(itemExtendedPrice);

        billTableBody.appendChild(itemRow);

    }

    const billTableFooter = document.createElement("tfoot");

    const billFooterRow = document.createElement("tr");

    const totalBill = document.createElement("td");
    totalBill.setAttribute("colspan", "4")
    totalBill.setAttribute("class", "body " + current["lang"]);
    totalBill.textContent = localeOrder[current["lang"]]["total"];

    const billValue = document.createElement("td");
    billValue.setAttribute("class", "body " + current["lang"]);
    billValue.textContent = "$ " + calcBill();

    billFooterRow.appendChild(totalBill);
    billFooterRow.appendChild(billValue);

    billTableFooter.appendChild(billFooterRow);

    billTableHead.appendChild(billHeaderRow);

    billTable.appendChild(billTableHead);
    billTable.appendChild(billTableBody);
    billTable.appendChild(billTableFooter);

    const makePayment = document.createElement("button");
    makePayment.textContent = localeOrder[current["lang"]]["pay"];
    makePayment.setAttribute("class", "action-button");
    makePayment.onclick = () => { // this simulates payment, I still don't know how to implement a payment syste, :P

        current["cart"]["ordered"] = {};
        alert(localeOrder[current["lang"]]["bill-paid"]);
        deployTabs();

    }

    sectionOne.appendChild(cartTitle);
    sectionOne.appendChild(cartTable);
    sectionOne.appendChild(makeOrder);

    const order = document.createElement("div");
    order.setAttribute("id", "order");
    order.setAttribute("class", "page-content");


    order.appendChild(sectionOne);

    sectionTwo.appendChild(billTitle);
    sectionTwo.appendChild(billTable);
    sectionTwo.appendChild(makePayment);

    order.appendChild(sectionTwo);

    container.appendChild(order);

}
