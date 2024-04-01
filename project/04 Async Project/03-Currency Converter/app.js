
const BASE_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies';

const dropDowns = document.querySelectorAll('.dropdown select');
const button = document.querySelector('form button');

const from = document.querySelector('.from select');
const to = document.querySelector('.to select');

const  amountInput = document.querySelector('.msg');

const swapButton = document.querySelector('.fa-arrow-right-arrow-left');

document.addEventListener("DOMContentLoaded", function() {
    updateExchangeRate();
});

for (let select of dropDowns) {
    for (let currencyCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currencyCode;
        newOption.value = currencyCode;
        if (select.name === 'from' && currencyCode === 'USD') {
            newOption.selected = 'selected';
        }
        if (select.name === 'to' && currencyCode === 'INR') {
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change', (e) => {
        updateFlag(e.target);
    });
}

const updateFlag = (element) => {
    let currencyCode = element.value;
    let countryCode = countryList[currencyCode];
    let newSrcForImage = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let image = element.parentElement.querySelector('img');
    image.src = newSrcForImage;
}


swapButton.addEventListener('click', () => {
    const temp = from.value;
    from.value = to.value;
    to.value = temp;

    updateFlag(from);
    updateFlag(to);

    updateExchangeRate();
});



button.addEventListener('click', (e) => {
    e.preventDefault();
    updateExchangeRate();
});


const updateExchangeRate = async() => {
    let amount = document.querySelector('#amount');
    let amountVal = amount.value;
    if (amountVal === '' || amountVal < 1) {
        amountVal = 1;
        amount.value = '1';
    }
    const fromCurr = from.value.toLowerCase()
    const toCurr = to.value.toLowerCase()

    const URL = `${BASE_URL}/${fromCurr}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    const exchangeRate = data[fromCurr][toCurr];

    let finalAmount = (exchangeRate * amountVal).toFixed(2) ;
    amountInput.innerText = `${amountVal} ${fromCurr.toUpperCase()} = ${finalAmount} ${toCurr.toUpperCase()}`;
}

