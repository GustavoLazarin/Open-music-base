/* Desenvolva sua lógica aqui ... */

import { categories, products } from "./productsData.js";
import { darkMode } from "./theme.js";

const createCard = (product) => {
    const card = document.createElement('li');
    const cardImg = document.createElement('img');
    const cardInfos = document.createElement('div');
    const band = document.createElement('p');
    const year = document.createElement('p');
    const cardTitle = document.createElement('h2');
    const cardBox = document.createElement('span');
    const cardPrice = document.createElement('p');
    const buyButn = document.createElement('button');
    
    card.classList.add('card')
    cardImg.setAttribute('src', product.img);
    cardImg.setAttribute('alt', product.title);
    cardInfos.append(band, year);
    band.innerText = product.band;
    year.innerText = product.year;
    cardTitle.innerText = product.title;
    cardPrice.innerText = `R$ ${product.price}.00`;
    buyButn.innerText = 'Comprar';
    buyButn.dataset.id = product.id;

    card.append(cardImg, cardInfos, cardTitle, cardBox);
    cardBox.append(cardPrice, buyButn);

    return card;
}

const renderButtons = (array) => {
    const buttonsList = document.querySelector('.filters-buttons')

    array.forEach(element => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = element;

        li.appendChild(button);
        buttonsList.appendChild(li);
    })
}

const renderCards = (array) => {
    const list = document.querySelector('.cards__list');
    list.innerHTML = '';
    
    array.forEach(element => {
        let card = createCard(element);
        list.appendChild(card);
    })
}

const addEvents = (categoriesArray, productsArray) => {
    const buttons = document.querySelectorAll('.filters-buttons > li > button');
    const inputRange = document.querySelector('input[type="range"');
    const priceValueParagraph = document.querySelector('.filters__range-info > p');

    
    let filteredArray = productsArray;
    let selectedButtonIndex = 0;
    
    //Iniciando pagina com input no máximo
    inputRange.value = inputRange.max;
    let inputValue = inputRange.value;
    priceValueParagraph.innerText = `Até R$ ${inputValue}`;

    //Evento de filtro por categoria
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.innerText;
            selectedButtonIndex = categoriesArray.findIndex(element => element===category);

            if (selectedButtonIndex == 0) {
                filteredArray = productsArray.filter(product => product.price <= inputValue);
            } else {
                filteredArray = productsArray.filter(product => product.category === selectedButtonIndex && product.price <= inputValue);
            }

            renderCards(filteredArray);
        })
    })

    //Evento de filtro por preço
    inputRange.addEventListener('input', () => {
        inputValue = inputRange.value;
        priceValueParagraph.innerText = `Até R$ ${inputValue}`;

        if (selectedButtonIndex == 0) {
            filteredArray = productsArray.filter(product => product.price <= inputValue);
        } else {
            filteredArray = productsArray.filter(product => product.category === selectedButtonIndex && product.price <= inputValue);
        }

        renderCards(filteredArray);
    })
}

renderButtons(categories);
renderCards(products);
addEvents(categories, products)
darkMode()