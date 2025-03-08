const Convert = () => {
    const dropdownButtonFrom = document.getElementById('dropdownButtonFrom');
    const dropdownButtonTo = document.getElementById('dropdownButtonTo');
    const fromValue = document.getElementById('fromValue').value;
    const result = document.getElementById('result');
    if (dropdownButtonFrom.innerText != "Оберіть валюту" && dropdownButtonTo.innerText != "Оберіть валюту") {
        axios.get('/js/currencies.json')
            .then(resp => {
                const { data } = resp;
                data.forEach(item => {
                    if (item.baseCcy == dropdownButtonFrom.innerText) {
                        if (dropdownButtonTo.innerText == "USD") {
                            fromCurrency.innerText = "1 " + dropdownButtonFrom.innerText + " = " + item.USD + " USD";
                            result.innerText = parseFloat(fromValue) * item.USD;
                        }
                        else if (dropdownButtonTo.innerText == "EUR") {

                            fromCurrency.innerText = "1 " + dropdownButtonFrom.innerText + " = " + item.EUR + " EUR";
                            result.innerText = parseFloat(fromValue) * item.EUR;
                        }
                        else if (dropdownButtonTo.innerText == "UAH") {
                            fromCurrency.innerText = "1 " + dropdownButtonFrom.innerText + " = " + item.UAH + " UAH";
                            result.innerText = parseFloat(fromValue) * item.UAH;
                        }
                        else if (dropdownButtonTo.innerText == "PLN") {
                            fromCurrency.innerText = "1 " + dropdownButtonFrom.innerText + " = " + item.PLN + " PLN";
                            result.innerText = parseFloat(fromValue) * item.PLN;
                        }
                    }
                })

            });
    }
}