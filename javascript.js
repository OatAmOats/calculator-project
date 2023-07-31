//values
let userInput = document.querySelector('.userInput')
let results = document.querySelector('.results')

//num keys
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

//operation keys + equals
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const times = document.querySelector('.mult');
const div = document.querySelector('.divide');
const equals = document.querySelector('.equals');

const clr = document.querySelector('.clear')
const del = document.querySelector('.del');

let divByZero = false;

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
        divByZero = true;
        return("bruh");
        
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

checkLength = function(num){ 
    if((num.toString()).length>8){
        num = num.toExponential(4);
    }
    return(num);
}
checkOp = function(str){

}
numWrite = function(num){
    if(divByZero == false){
        userInput.textContent = userInput.textContent + String(num);
    }

}

opWrite = function(op){
    if(divByZero == false){
        const old = userInput.textContent.split(" ");
        const opz = ["+", "-", "×", "÷"];
        console.log(old);
        console.log(opz);
        let check = false;
        for(let i = 0; i < 4; i++){
            if(old.includes(opz[i])){
                console.log("oh nooo there's already an operation going on");
                check = true;
            }
        }
        if(check == true){
            newRes = checkLength(operate(userInput.textContent));
            userInput.textContent = newRes + String(op);
            results.textContent = newRes;
    
        }
        else{
            userInput.textContent = userInput.textContent + String(op);
        }
    }
}

calc = function(ui){
    resNum = operate(ui);
    let resFixed;
    if(divByZero==false){
        resFixed = checkLength(resNum);
        results.textContent = resFixed;
    }
    else{
        results.textContent = resNum;
    }
    
}

clear = function(){
    userInput.textContent = '';
    results.textContent = '';
    divByZero = false;
}

delLast = function(){
    let old = userInput.textContent;
    let arr = old.split('');
    if(arr[arr.length-1] == " "){
        arr.pop();
        arr.pop();
        arr.pop();
    }
    else{
        arr.pop();
    }
    let deld = arr.toString().replaceAll(',', '');
    userInput.textContent = deld;
}

clr.addEventListener('click', function(){
    userInput.textContent = '';
    results.textContent = '';
    divByZero = false;
})

del.addEventListener('click', function(){
    let old = userInput.textContent;
    let arr = old.split('');
    if(arr[arr.length-1] == " "){
        arr.pop();
        arr.pop();
        arr.pop();
    }
    else{
        arr.pop();
    }
    let deld = arr.toString().replaceAll(',', '');
    userInput.textContent = deld;
})

keyboardStuff = function(e) {
    if (e.key >= 0 && e.key <= 9) numWrite(e.key);
    if (e.key === '.') numWrite('.');
    if (e.key === '=' || e.key === 'Enter'){
        calc(userInput.textContent);
    }
    if (e.key === 'Backspace') delLast();
    if (e.key === 'Escape') clear();
    if (e.key === '+' || e.key === '-'){
        opWrite(` ${e.key} `);
    }
    
    if(e.key === '*' || e.key === "x"){
        opWrite(" × ");
    }
        
    if(e.key === '/'){
        opWrite(" ÷ ");
    }
  }

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
    opWrite(" + ");
} )
minus.addEventListener('click', function(){
    opWrite(" - ");
} )
times.addEventListener('click', function(){
    opWrite(" × ");
} )
div.addEventListener('click', function(){
    opWrite(" ÷ ");
} )

equals.addEventListener('click', function(){
    calc(userInput.textContent);
})


point.addEventListener('click', function(){
    numWrite(".");
})

window.addEventListener('keydown', keyboardStuff);