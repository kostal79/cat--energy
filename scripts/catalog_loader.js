
const products = {
    '1': {
        name: "Cat Energy PRO",
        mass: 500,
        flavor: "Курица",
        price: 700,
        src: "./images/catalog/catalog-1-desktop.png",
    },

    '2': {
        name: "Cat Energy PRO",
        mass: 1000,
        flavor: "Курица",
        price: 1000,
        src: "./images/catalog/catalog-2-desktop.png",
    },

    '3': {
        name: "Cat Energy PRO",
        mass: 500,
        flavor: "Рыба",
        price: 700,
        src: "./images/catalog/catalog-3-desktop.png",
    },

    '4': {
        name: "Cat Energy PRO",
        mass: 1000,
        flavor: "Рыба",
        price: 100,
        src: "./images/catalog/catalog-4-desktop.png",
    },

    '5': {
        name: "Cat Energy SLIM",
        mass: 500,
        flavor: "Гречка",
        price: 400,
        src: "./images/catalog/catalog-5-desktop.png",
    },


    '6': {
        name: "Cat Energy SLIM",
        mass: 1000,
        flavor: "Гречка",
        price: 700,
        src: "./images/catalog/catalog-6-desktop.png",
    },

    '7': {
        name: "Cat Energy SLIM",
        mass: 1000,
        flavor: "Рис",
        price: 500,
        src: "./images/catalog/catalog-7-desktop.png",
    },

    '8': {
        name: "Cat Energy PRO",
        mass: 500,
        flavor: "Курица",
        price: 700,
        src: "./images/catalog/catalog-1-desktop.png",
    },

    '9': {
        name: "Cat Energy PRO",
        mass: 1000,
        flavor: "Курица",
        price: 1000,
        src: "./images/catalog/catalog-2-desktop.png",
    },

    '10': {
        name: "Cat Energy PRO",
        mass: 500,
        flavor: "Рыба",
        price: 700,
        src: "./images/catalog/catalog-3-desktop.png",
    },

    '11': {
        name: "Cat Energy PRO",
        mass: 1000,
        flavor: "Рыба",
        price: 100,
        src: "./images/catalog/catalog-4-desktop.png",
    },

    '12': {
        name: "Cat Energy SLIM",
        mass: 500,
        flavor: "Гречка",
        price: 400,
        src: "./images/catalog/catalog-5-desktop.png",
    },


    '13': {
        name: "Cat Energy SLIM",
        mass: 1000,
        flavor: "Гречка",
        price: 700,
        src: "./images/catalog/catalog-6-desktop.png",
    },

    '14': {
        name: "Cat Energy SLIM",
        mass: 1000,
        flavor: "Рис",
        price: 500,
        src: "./images/catalog/catalog-7-desktop.png",
    },

    getName(number) {
        return this[number].name;
    },

    getMass(number) {
        return this[number].mass;
    },

    getFlavor(number) {
        return this[number].flavor;
    },

    getPrice(number) {
        return this[number].price;
    },

    getPicture(number) {
        return this[number].src;
    },
}



function load(startNumber, finishNumber) {
    let toggle = document.querySelector(".toggle")
    let currentNumber = startNumber;
    while (currentNumber <= finishNumber) {
        let product = document.createElement("section");
        product.classList.add("catalog__item");
        product.classList.add("item");
        product.setAttribute("data-number", String(currentNumber));
        product.innerHTML = `<div class="item__img-box">
        <img class="item__img" src="${products.getPicture(String(currentNumber))}" alt="product image">
    </div>
    <div class="item__info">
        <table class="table item__table">
            <caption class="caption item__caption">${products.getName(String(currentNumber))} ${products.getMass(String(currentNumber))}&nbsp;г</caption>
            <tr>
                <td class="table__category">Масса</td>
                <td class="table__value">${products.getMass(String(currentNumber))} г</td>
            </tr>
            <tr>
                <td class="table__category">Вкус</td>
                <td class="table__value">${products.getFlavor(String(currentNumber))}</td>
            </tr>
            <tr>
                <td class="table__category">Цена</td>
                <td class="table__value">${products.getPrice(String(currentNumber))} Р.</td>
            </tr>
        </table>
    </div>
    <button class="item__button" name="order"><span>заказать</span></button>`;
        toggle.before(product);
        currentNumber++;
    }
}

load(1, 7)

document.addEventListener('click', loadAll);

function loadAll(event) {
    if (!event.target.closest('.toggle__button')) return;
    else {
        let toggle = document.querySelector('.toggle')
        load(8, 14);
        document.removeEventListener('click', loadAll)
        toggle.style.display = 'none';
    }
}