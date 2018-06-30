var cashButtonsClass = document.getElementsByClassName('cashButtons');
var balanceStorage;
var depositStorage;
cashButtonsClass[0].addEventListener('click', function() { //deposit addEventListener
    if(!depositStorage && !balanceStorage) {
        depositStorage = parseFloat(calScreen.innerHTML);
        balanceStorage = depositStorage;
        calScreen.innerHTML = '$' + depositStorage + ' deposited';
        console.log(depositStorage)
    }
    else if(depositStorage && balanceStorage) {
        depositStorage = parseFloat(calScreen.innerHTML);
        balanceStorage += depositStorage;
        calScreen.innerHTML = '$' + depositStorage + ' deposited';  
     }
     else if(depositStorage && !balanceStorage) {
        depositStorage = parseFloat(calScreen.innerHTML);
        balanceStorage += depositStorage;
        calScreen.innerHTML = '$' + depositStorage + ' deposited'; 
     }
    setTimeout(function() {
        calScreen.innerHTML = null;
    }, 2000)
})

cashButtonsClass[1].addEventListener('click', function() { //withdrawal addEventListener
    var withdrawalStorage = parseFloat(calScreen.innerHTML);
    if(!balanceStorage) {
       calScreen.innerHTML = 'Insufficient funds';
    } else {
        balanceStorage = balanceStorage - withdrawalStorage;
        calScreen.innerHTML = '$' + withdrawalStorage + ' withdrawn';
    }
    setTimeout(function() {
        calScreen.innerHTML = null;
    }, 2000)
})

cashButtonsClass[2].addEventListener('click', function() { //balance addEventListener
    if(!balanceStorage) {
        calScreen.innerHTML = 'No balance';
    } else {
        calScreen.innerHTML = 'Balance = $' + balanceStorage;
    }
    setTimeout(function() {
        calScreen.innerHTML = null;
    }, 2000)
})