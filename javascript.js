//values
let userInput = document.querySelector('.userInput')
let results = document.querySelector('.results')

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const point = document.querySelector('.point');

const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.mult');
const div = document.querySelector('.divide');
const equals = document.querySelector('.equals');

const clr = document.querySelector('.clear')
const del = document.querySelector('.del');

add = function(a,b){
    console.log("hmm");
    return(Number(`${a}`)+Number(`${b}`));
}

subtract = function(a,b){
    return(Number(`${a}`)-Number(b));
}

multiply = function(a,b){
    return(Number(a)*Number(b));
}

divide = function(a,b){
    if(b!= 0){
        return(Number(a)/Number(b));
    }
    else{
        return("error");
    }
}

operate = function(ui){
    const inputArray = ui.split(" ");
    let a = inputArray[0];
    let b = inputArray[2];
    if(inputArray[1] == "+"){
        return(add(a,b));
    }
    if(inputArray[1] == "-"){
        return(subtract(a,b));
    }
    if(inputArray[1] == "×"){
        return(multiply(a,b));
    }
    if(inputArray[1] == "÷"){
        return(divide(a,b));
    }
}

numWrite = function(num){
    userInput.textContent = userInput.textContent + String(num);
}

calc = function(ui){
    results.textContent = operate(ui);
}

clr.addEventListener('click', function(){
    userInput.textContent = '';
    results.textContent = '';
})

one.addEventListener('click', function(){
    numWrite(1);
})
two.addEventListener('click', function(){
    numWrite(2);
})
three.addEventListener('click', function(){
    numWrite(3);
})
four.addEventListener('click', function(){
    numWrite(4);
})
five.addEventListener('click', function(){
    numWrite(5);
})
six.addEventListener('click', function(){
    numWrite(6);
})
seven.addEventListener('click', function(){
    numWrite(7);
})
eight.addEventListener('click', function(){
    numWrite(8);
})
nine.addEventListener('click', function(){
    numWrite(9);
})
zero.addEventListener('click', function(){
    numWrite(0);
})

plus.addEventListener('click', function(){
    numWrite(" + ");
} )
minus.addEventListener('click', function(){
    numWrite(" - ");
} )
times.addEventListener('click', function(){
    numWrite(" × ");
} )
div.addEventListener('click', function(){
    numWrite(" ÷ ");
} )

equals.addEventListener('click', function(){
    results.textContent = operate(userInput.textContent);
})

point.addEventListener('click', function(){
    numWrite(".");
})