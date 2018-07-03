(function() {
    // var numbersButtonClass = document.getElementsByClassName('number-button');
    // for(var i = 0; i < numbersButtonClass.length; i++) {
    //     numbersButtonClass[i].addEventListener('click', function(){numbersOnScreen(i)});
    // }  
    // var numbersOnScreen = function(num) {
    //     var value = num;
    //     console.log(value);
    // }
    var addScreenStore;
    var subScreenStore;
    var equalsScreenStore;
    var divScreenStore;
    var multiplyScreenStore;

    calScreen.innerHTML = null;

    var operations = document.getElementsByClassName('operator')
    // console.log(operations)
    var systemsButtons = document.getElementsByClassName('systems-buttons');
    console.log(systemsButtons)


    //adding number id's and their event listeners
    var sevenId = document.getElementById('seven');
    sevenId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 7;
        }
            
    })

    var fourId = document.getElementById('four');
    fourId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 4;
        }
    })

    var oneId = document.getElementById('one');
    oneId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 1;
        }
    })

    var zeroId = document.getElementById('zero');
    zeroId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 0;
        }
    })

    var eightId = document.getElementById('eight');
    eightId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 8;
        }
    })

    var fiveId = document.getElementById('five');
    fiveId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 5;
        }
    })

    var twoId = document.getElementById('two');
    twoId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 2;
        }
    })

    var decimalId = document.getElementById('decimal');
    decimalId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        for(var i = 0; i < 10; i++) {
            if(calScreen.innerHTML === i + '.' || calScreen.innerHTML === '.' || calScreen.innerHTML === i.toString() + i.toString() + '.'
        || calScreen.innerHTML === i.toString() + i.toString() + i.toString() + '.' || calScreen.innerHTML === i.toString() + i.toString() + i.toString() + i.toString() + '.')
            return;
        }
        // if(calScreen.innerHTML === '.' || calScreen.innerHTML === 1 + '.' || calScreen.innerHTML === 2 + '.' || calScreen.innerHTML === 1 + '.'
        // || calScreen.innerHTML === 3 + '.' || calScreen.innerHTML === 4 + '.' || calScreen.innerHTML === 5 + '.' || calScreen.innerHTML === 6 + '.'
        // || calScreen.innerHTML === 7 + '.' || calScreen.innerHTML === 8 + '.' || calScreen.innerHTML === 9 + '.' || calScreen.innerHTML === 0 + '.') {
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + '.';
        }
    })
    var nineId = document.getElementById('nine');
    nineId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 9;
        }
    })

    var sixId = document.getElementById('six');
    sixId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
            calScreen.innerHTML = calScreen.innerHTML + 6;
        }
    })

    var threeId = document.getElementById('three');
    threeId.addEventListener('click', function() {
        if(calScreen.innerHTML === '-' || calScreen.innerHTML === '+' || calScreen.innerHTML === 'x' || calScreen.innerHTML === '/') {
            calScreen.innerHTML = null;
        }
        if(calScreen.innerHTML.length <= 14) {
           calScreen.innerHTML = calScreen.innerHTML + 3; 
        }
        
    })
    
    //adding systems buttons and their id's
    var clearButton = systemsButtons[2]; //C button
    clearButton.addEventListener('click', function() {
        calScreen.innerHTML = null;
    })

    var onButton = systemsButtons[0]; //On button
    onButton.addEventListener('click', function() {
        calScreen.innerHTML = 0;
    })

    var offButton = systemsButtons[1];
    offButton.addEventListener('click', function() {
        calScreen.innerHTML = null;
    })


    operations[0].addEventListener('click', equalsFunction); //add eventListener
    operations[4].addEventListener('click', addFunction); //add button
    operations[3].addEventListener('click', subtractFunction); //subtract eventListener
    operations[1].addEventListener('click', divideFunction); //divide eventListener
    operations[2].addEventListener('click', multiplyFunction); //multiply eventListener
    
    //operator functions:
    function addFunction() { //addition function
        addScreenStore = parseFloat(calScreen.innerHTML);
        calScreen.innerHTML = '+';
    }
    
    function subtractFunction() { //subtract function
        subScreenStore = parseFloat(calScreen.innerHTML);
        calScreen.innerHTML = '-';
    }

    function divideFunction() { //divide function
        divScreenStore = parseFloat(calScreen.innerHTML);
        calScreen.innerHTML = '/';
    }

    function multiplyFunction() { //multiply function
        multiplyScreenStore = parseFloat(calScreen.innerHTML);
        calScreen.innerHTML = 'x';
    }


    function equalsFunction() {
        if(addScreenStore) {
            equalsScreenStore = parseFloat(calScreen.innerHTML);
            var addResult = addScreenStore + equalsScreenStore;
            calScreen.innerHTML = addResult;
            addScreenStore = null;
        }
        else if(subScreenStore) {
            equalsScreenStore = parseFloat(calScreen.innerHTML);
            var subResult = subScreenStore - equalsScreenStore;
            calScreen.innerHTML = subResult;
            subScreenStore = null;
        }
        else if(divScreenStore) {
            equalsScreenStore = parseFloat(calScreen.innerHTML);
            var divideResult = divScreenStore / equalsScreenStore;
            calScreen.innerHTML = divideResult;
            divScreenStore = null;
        }
        else if(multiplyScreenStore) {
            equalsScreenStore = parseFloat(calScreen.innerHTML);
            var multiplyResult = multiplyScreenStore * equalsScreenStore;
            calScreen.innerHTML = multiplyResult;
            multiplyScreenStore = null;
        }
        
    }

  


// var calculatorModule = (function() {
//     var memory = 0;
//     var total = 0;

//     var load = function(num) {
//         if(typeof num === 'number') {
//             total = num;
//             return total;
//         } else {
//             throw err;
//         }
//     }
//     var getTotal = function() {
//         return total;
//     }
//     var add = function(num) {
//         if(typeof num === 'number') {
//             total+= num;
//         } else {
//             throw err;
//         }
//     var subtract = function(num) {
//         if(typeof num === 'number') {
//         total -= num;
//         } else {
//             throw err;
//         }
//     }
//     var multiply = function(num) {
//         if(typeof num === 'number') {
//         total *= num;
//         } else {
//             throw err;
//         }
//     }
//     var divide = function(num) {
//         if(typeof num === 'number') {
//         total /= num;
//         } else {
//             throw err;
//         }
//     }
//     var recallMemory = function() {
//         return memory;
//     }
//     var saveMemory = function() {
//         memory = total;
//     }
//     var clearMemory = function() {
//         memory = 0;
//     }
    // var validate = function(operation) {
    //     typeof operation 
    // }
}());