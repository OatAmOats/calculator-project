let numOne;
let numTwo;
let operator;

add = function(a,b){
    return(a+b);
}

subtract = function(a,b){
    return(a-b);
}

multiply = function(a,b){
    return(a*b);
}

divide = function(a,b){
    if(b!= 0){
        return(a/b);
    }
    else{
        return("error");
    }
}

operate = function(numOne, operator, numTwo){
    if(operator == "a"){
        add(numOne, numTwo);
    }
    if(operator == "s"){
        subtract(numOne, numTwo);
    }
    if(operator == "m"){
        multiply(numOne, numTwo);
    }
    if(operator == "d"){
        divide(numOne, numTwo);
    }
}