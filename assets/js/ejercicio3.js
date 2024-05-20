const inputNumber1 = document.getElementById("valor1");
const inputNumber2 = document.getElementById("valor2");
const resultSpan = document.querySelector(".resultado");

const addition = document.getElementById("btn-sumar");
const subtraction = document.getElementById("btn-restar");


// Suma

function makeSum() {
    const num1 = Number(inputNumber1.value);
    const num2 = Number(inputNumber2.value);
    const sum = num1 + num2;
    resultSpan.innerHTML = sum
}

// resta

function doSubtraction() {
    const num1 = Number(inputNumber1.value);
    const num2 = Number(inputNumber2.value);
    let subtract = num1 - num2;
    if (subtract < 0) subtract = 0;
    resultSpan.innerHTML = subtract
}

addition.addEventListener("click", makeSum);
subtraction.addEventListener("click", doSubtraction);