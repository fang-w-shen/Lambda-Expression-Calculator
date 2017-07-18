var multiplybutton = document.getElementById("multiply");
var addbutton = document.getElementById("add");
var subtractbutton = document.getElementById("subtract");
var dividebutton = document.getElementById("divide");
var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");


/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(a,b) {
  var num = a*b;
  return num;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(a,b) {
  var num = a+b;
  return num;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(a,b) {
  var num = a-b;
  return num;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(a,b) {
  var num = a/b;
  return num;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
 function operation (a,b, c) {
  return c(a,b);
 }

multiplybutton.addEventListener("click", function() {
var x = operation(Number(n1.value),Number(n2.value),multiply);
document.getElementById("answer").innerHTML = x;

});
addbutton.addEventListener("click", function() {
var x = operation(Number(n1.value),Number(n2.value),add);
document.getElementById("answer").innerHTML = x;
});
subtractbutton.addEventListener("click", function() {
var x = operation(Number(n1.value),Number(n2.value),subtract);
document.getElementById("answer").innerHTML = x;
});
dividebutton.addEventListener("click", function() {
var x = operation(Number(n1.value),Number(n2.value),divide);
document.getElementById("answer").innerHTML = x;
});
