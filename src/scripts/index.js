/* Desenvolva sua lógica aqui ... */

import { categories, products } from "./productsData.js";

const createCard = (product) => {
    const card = document.createElement('li');
    const cardImg = document.createElement('img');
    const cardInfos = document.createElement('p');
    const cardTitle = document.createElement('h2');
    const cardBox = document.createElement('span');
    const cardPrice = document.createElement('p');
    const buyButn = document.createElement('button');
    
    card.classList.add('card')
    cardImg.setAttribute('src', product.img);
    cardImg.setAttribute('alt', product.title);
    cardInfos.innerText = `${product.band}, ${product.year}.`
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
    
    array.forEach(element => {
        let card = createCard(element);
        list.appendChild(card);
    })
}

renderButtons(categories);
renderCards(products);
