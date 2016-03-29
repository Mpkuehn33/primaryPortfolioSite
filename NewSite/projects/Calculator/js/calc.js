
//Numbers
//num1 is current value
var num1 = 0;
//num2 is stored value
var num2 = 0;
//num3 is the answer
var num3 = 0;
//Tells computer current operator
var co = "start";

//Methods that set num1 and num2
var one = function(){
    if(num1 === 0){
        num1 = 1;
    } else {
        num1 = "" + num1 + 1;
    }
    document.getElementById("screen").value = num1;
}

var two = function(){
    if(num1 === 0){
        num1 = 2;
    } else {
        num1 = "" + num1 + 2;
    }
    document.getElementById("screen").value = num1;
}

var three = function(){
    if(num1 === 0){
        num1 = 3;
    } else {
        num1 = "" + num1 + 3;
    }
    document.getElementById("screen").value = num1;
}

var four = function(){
    if(num1 === 0){
        num1 = 4;
    } else {
        num1 = "" + num1 + 4;
    }
    document.getElementById("screen").value = num1;
}

var five = function(){
    if(num1 === 0){
        num1 = 5;
    } else {
        num1 = "" + num1 + 5;
    }
    document.getElementById("screen").value = num1;
}

var six = function(){
    if(num1 === 0){
        num1 = 6;
    } else {
        num1 = "" + num1 + 6;
    }
    document.getElementById("screen").value = num1;
}

var seven = function(){
    if(num1 === 0){
        num1 = 6;
    } else {
        num1 = "" + num1 + 6;
    }
    document.getElementById("screen").value = num1;
}

var eight = function(){
    if(num1 === 0){
        num1 = 8;
    } else {
        num1 = "" + num1 + 8;
    }
    document.getElementById("screen").value = num1;
}

var nine = function(){
    if(num1 === 0){
        num1 = 9;
    } else {
        num1 = "" + num1 + 9;
    }
    document.getElementById("screen").value = num1;
}

var zero = function(){
    if(num1 === 0){
        num1 = 0;
    } else {
        num1 = "" + num1 + 0;
    }
    document.getElementById("screen").value = num1;
}

//Operator methods
var ac = function(){
    num1 = 0;
    num2 = 0;
    co = "start";
    document.getElementById("screen").value = num1;
}
var ce = function(){
    num1 = 0;
    document.getElementById("screen").value = num1;
}


//updates the numbers 
var math = function(){
    //modulus
     if(co === "modulus"){
        num2 = num2 % num1;
    } else if (co === "add"){
        num2 = num2 + num1;
    } else if (co === "divide"){
        num2 = num2 / num1;
    } else if (co === "subtract"){
        num2 = num2 - num1;
    } else if (co === "multiply"){
        num2 = num2 * num1;
    }   
    
     if (co === "start"){
        num2 = num1;
    }
}

var mod = function(){
    math();
    co = "modulus";
    num1 = 0;
    document.getElementById("screen").value = num1;
}

var add = function(){
    math();
    co = "add";
    num1 = 0;
    document.getElementById("screen").value = num1;
}

var div = function(){
    math();
    co = "divide";
    num1 = 0;
    document.getElementById("screen").value = num1;
}

var sub = function(){
    math();
    co = "subtract";
    num1 = 0;
    document.getElementById("screen").value = num1;
}

var mult = function(){
    math();
    co = "multiply";
    num1 = 0;
    document.getElementById("screen").value = num1;
}

var equal = function(){
    if (co === "add"){
        num3 = num1 + num2;
    }
    if (co === "modulus"){
        num3 = num2 % num1;
    }
    if (co === "divide"){
        num3 = num2 / num1;
    }
    if (co === "subtract"){
        num3 = num2 - num1;
    }
    if (co === "multiply"){
        num3 = num2 * num1;
    }
    document.getElementById("screen").value = num3;
}