let api = 'https://v6.exchangerate-api.com/v6/11468e38e2de056bf62354b3/latest/USD'
const fromConverterSet = document.getElementById("from-currency-select");
const toConverterSet = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromConverterSet.add(option);
});

currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toConverterSet.add(option);
});

fromConverterSet.value = "BRL";
toConverterSet.value = "USD";

let convertCurrency = () => {
    const quantia = document.querySelector("#quantia").value;
    const fromCurrency = fromConverterSet.value;
    const toCurrency = toConverterSet.value;

    if (quantia.length != 0) {
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (quantia / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${quantia} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
            });
    } else {
        alert("Por favor preencha a quantia");
    }
};

document.querySelector("#convert-button").addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);