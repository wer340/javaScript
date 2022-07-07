
function division(n1,n2){
    return n1/n2;
}

function subtract(n1,n2){
    return n1-n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function add(n1,n2){
    return n1+n2;
}
function calclator(n1,n2,operator){
    return operator(n1,n2)
}
calclator(4,8,add)