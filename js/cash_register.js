var cashButtonsClass = document.getElementsByClassName('cashButtons');

var depositStorage;
var balanceStorage;

cashButtonsClass[0].addEventListener('click', function() { //deposit addEventListener
    depositStorage = parseFloat(calScreen.innerHTML);
    balanceStorage += depositStorage;
    calScreen.innerHTML = null;
})

cashButtonsClass[1].addEventListener('click', function() { //withdrawal addEventListener
    var withdrawalStorage = parseFloat(calScreen.innerHTML);
    if(!balanceStorage) {
       balanceStorage = depositStorage - withdrawalStorage;
    } else {
        balanceStorage = balanceStorage - withdrawalStorage 
    }
    
    calScreen.innerHTML = null;
})

cashButtonsClass[2].addEventListener('click', function() { //balance addEventListener
    if(!balanceStorage) {
        calScreen.innerHTML = 'Balance = $' + depositStorage;
    } else {
        calScreen.innerHTML = 'Balance = $' + balanceStorage;
    }
})