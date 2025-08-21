console.log("Hello, This is functions.js file");

// Function declaration
function add() {
  return 10 + 20;
}

// Function expression
const sub1 = function (a, b) {
  return a - b;
};

// Arrow function
const mul2 = (a, b) => a * b;

// Function declaration with default paramters
function div3(a, b = 10) {
  return a / b;
}

function calculate() {
  let sum = add();
  let sub = sub1(10, 20);
  let mul = mul2(10, 20);
  let div = div3(10, 20);

  console.log("Sum: " + sum);
  console.log("Diffrence : " + sub);
  console.log("Multiplication: " + mul);
  console.log("Division: " + div);
}

calculate();
