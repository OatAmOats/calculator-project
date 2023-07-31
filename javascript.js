let numOne = document.querySelector('.numOne');
let numTwo = document.querySelector('.numTwo');
let op = document.querySelector('.op');
let disTop = document.querySelector('.disTop');

let op_activated = false;

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

operate = function(a, operator, b){
    if(operator === " + "){
        console.log("hmmmmmm")
        return(add(a,b));
    }
    if(operator == " - "){
        return(subtract(a,b));
    }
    if(operator == " × "){
        return(multiply(a,b));
    }
    if(operator == " ÷ "){
        return(divide(a,b));
    }
}

numWrite = function(num, add){
    num = num * 10;
    num = num + add;
    return(num);
}

opActivate = function(operator){
    op.textContent = operator;
    op_activated = true;
}

calc = function(a, what, b){
    disTop.textContent = `${a} ${what} ${b}`;
    numOne.textContent = operate(a, what, b);
    op.textContent = '';
    numTwo.textContent = '';
    op_activated = false;
}

clr.addEventListener('click', function(){
    numOne.textContent = '';
    op.textContent = '';
    numTwo.textContent = '';
    op_activated = false;
    console.log(op_activated);
    disTop.textContent = '';
    
})

one.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 1);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 1);
    }
})
two.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 2);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 2);
    }
})
three.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 3);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 3);
    }
})
four.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 4);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 4);
    }
})
five.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 5);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 5);
    }
})
six.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 6);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 6);
    }
})
seven.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 7);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 7);
    }
})
eight.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 8);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 8);
    }
})
nine.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 9);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 9);
    }
})
zero.addEventListener('click', function(){
    if(!op_activated){
        numOne.textContent = numWrite(numOne.textContent, 0);
    }
    else{
        numTwo.textContent = numWrite(numTwo.textContent, 0);
    }
})

plus.addEventListener('click', function(){
    if(!op_activated){
        opActivate(` + `);
    }
} )
minus.addEventListener('click', function(){
    if(!op_activated){
        opActivate(" - ");
    }
} )
times.addEventListener('click', function(){
    if(!op_activated){
        opActivate(" × ");
    }
} )
div.addEventListener('click', function(){
    if(!op_activated){
        opActivate(" ÷ ");
    }
} )

equals.addEventListener('click', function(){
    disTop.textContent = `${numOne.textContent} ${op.textContent} ${numTwo.textContent}`
    console.log(operate(numOne.textContent, op.textContent,numTwo.textContent));
    numOne.textContent = operate(Number(numOne.textContent), op.textContent, Number(numTwo.textContent))
    op.textContent = '';
    numTwo.textContent = '';
    op_activated = false;
})