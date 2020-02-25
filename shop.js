let getId = x => document.getElementById(x);
let countBeer;
let countVine;
let countPepsi;
let beerPrise = 30;
let vinePrise = 150;
let pepsiPrise = 25;
getId('radio_beer').onclick = () => {
    countBeer = getId('amounte').value;
    getId('amounte').value = '';
}
getId('radio_vine').onclick = () => {
    countVine = getId('amounte').value;
    getId('amounte').value = '';
}
getId('radio_pepsi').onclick = () => {
    countPepsi = getId('amounte').value;
    getId('amounte').value = '';
}


const shopModule = (function () {
    let balance = +getId('many').value;
    let howWeHaveBeer = +getId('beer').value;
    let howWeHaveVine = +getId('vine').value;
    let howWeHavePepsi = +getId('pepsi').value;

    if (countBeer == undefined) {
        countBeer = 0;
    };
    if (countVine == undefined) {
        countVine = 0;
    };
    if (countPepsi == undefined) {
        countPepsi = 0;
    };

    function money() {

        let bank = countBeer * beerPrise + countVine * vinePrise + countPepsi * pepsiPrise;
        let change = balance - bank;
        getId('many').value = change;
    }
    return {
        buyBeer: function () {
            if (countBeer > howWeHaveBeer) {
                alert('на складі недостатньо пива');
                countBeer = 0;
            } else {
                howWeHaveBeer -= countBeer;
                getId('beer').value = howWeHaveBeer;
                money()
            }
        },
        buyVine: function () {
            if (countVine > howWeHaveVine) {
                alert('на складі недостатньо вина');
                countVine = 0;
            } else {
                howWeHaveVine -= countVine;
                getId('vine').value = howWeHaveVine;
                money()
            }
        },
        buyPepsi: function () {
            if (countPepsi > howWeHavePepsi) {
                alert('на складі недостатньо пепсі');
                countPepsi = 0;
            } else {
                howWeHavePepsi -= countPepsi;
                getId('pepsi').value = howWeHavePepsi;
                money()
            }
        },

        balance: function () {
            return balance
        },
        howWeHaveBeer: function () {
            return howWeHaveBeer
        },
        howWeHaveVine: function () {
            return howWeHaveVine
        },
        howWeHavePepsi: function () {
            return howWeHavePepsi
        }
    }


}());
getId('add_drink').addEventListener('click', () => {
    if (countBeer == 0) {
        getId('product').innerHTML += ''
    } else {
        getId('product').innerHTML += 'Пиво: ' + `${countBeer}` + 'шт;' + '<br>'
    };
    if (countVine == 0) {
        getId('product').innerHTML += ''
    } else {
        getId('product').innerHTML += 'Вино: ' + `${countVine}` + 'шт;' + '<br>'
    };
    if (countPepsi == 0) {
        getId('product').innerHTML += ''
    } else {
        getId('product').innerHTML += 'Пепсі: ' + `${countPepsi}` + 'шт;' + '<br>'
    };
})

getId('buy').addEventListener('click', () => {
    shopModule.balance();
    if (countBeer == 0) {
        getId('myShoping').innerHTML += ''
    } else {
        getId('myShoping').innerHTML += 'Пиво: ' + `${countBeer}` + 'шт;' + '<br>'
    };
    if (countVine == 0) {
        getId('myShoping').innerHTML += ''
    } else {
        getId('myShoping').innerHTML += 'Вино: ' + `${countVine}` + 'шт;' + '<br>'
    };
    if (countPepsi == 0) {
        getId('myShoping').innerHTML += ''
    } else {
        getId('myShoping').innerHTML += 'Пепсі: ' + `${countPepsi}` + 'шт;' + '<br>'
    };
    getId('myShoping').innerHTML += 'Всього: ' + `${countBeer * beerPrise + countVine * vinePrise + countPepsi * pepsiPrise}` + 'грн;' + '<br>';
    shopModule.buyBeer();
    shopModule.buyVine();
    shopModule.buyPepsi();
})