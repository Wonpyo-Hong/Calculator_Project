// Find a display screen tag to show the result of calculation
// There is only one tag using 'screen' as a selector, so you can use querySelector
const screenValue = document.querySelector(".screen");

// Find tags related with number button in index.html
// There are a lot of tags related with 'number' as a selector, you need to use querySelectorAll
const numButton = document.querySelectorAll(".calculator-button.number");

// Find tags related with function of calculation including plus, minus, divide, multiply
const plusButton = document.querySelector(".calculator-button.function.plus");
const minusButton = document.querySelector(".calculator-button.function.minus");
const divideButton = document.querySelector(
  ".calculator-button.function.divide"
);
const multiplyButton = document.querySelector(
  ".calculator-button.function.multiply"
);

// Find tags related with function of delete, run, floating and remainder
const clearButton = document.querySelector(".calculator-button.function.clear");
const enterButton = document.querySelector(".calculator-button.function.enter");
const floatButton = document.querySelector(".calculator-button.function.float");
const remainderButton = document.querySelector(
  ".calculator-button.function.remainder"
);

// In order to make calculation program, you need to use at least two numbers.
// You have to keep track of the numbers that used in calculation program.
// Also, in calculate() function, it depends on operation variable to make different type of calculation
let currentInput = ""; // Save current input number
let previousInput = ""; // Save previous input number
let operation = null; // Save operator

// numButton has a lot of choices from 0 to 9.
// However, they all have same class as 'number'. So you need to distinguish them with another standard.
// Using forEach() statement, you can approach to each number button,
// and these number buttons would be currentInput value, when you click each number button.
numButton.forEach(function (button) {
  button.addEventListener("click", function () {
    // You can't use '0' behind of '0'
    if (currentInput === "0") {
      currentInput = button.textContent;
    } else {
      currentInput += button.textContent;
    }
    screenValue.textContent = currentInput;
  });
});

// Using calculate() function to make calculation with previousInput and currentInput
// According to switch() statement, you can easily access any kind of arithmetic through operators.
// Also, the result of calculation would be moved to currentInput which is triggered by 'Enter' button.
const calculate = () => {
  let result = 0;

  let prevInput = parseFloat(previousInput);
  let curInput = parseFloat(currentInput);

  switch (operation) {
    case "+":
      result = prevInput + curInput;
      break;
    case "-":
      result = prevInput - curInput;
      break;
    case "/":
      result = prevInput / curInput;
      break;
    case "*":
      result = prevInput * curInput;
      break;
    case "%":
      result = prevInput % curInput;
      break;

    default:
      break;
  }

  currentInput = result.toString();
};

// When you click '+' button, then it listens event and activate function to set operator as '+'.
// Befor you click '+' button, you have to click number button first. This clicked number button is currentInput now.
// However, you click '+' button, then currentInput becomes previousInput and currentInput will be initialized.
// Because you need to select second number to add with first number, now previousInput.
plusButton.addEventListener("click", function () {
  if (currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
    operation = "+";
  }
});

// When you click '-' button, then it listens event and activate function to set operator as '-'.
// Befor you click '-' button, you have to click number button first. This clicked number button is currentInput now.
// However, you click '-' button, then currentInput becomes previousInput and currentInput will be initialized.
// Because you need to select second number to minus with first number, now previousInput.
minusButton.addEventListener("click", function () {
  if (currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
    operation = "-";
  }
});

// When you click '/' button, then it listens event and activate function to set operator as '/'.
// Befor you click '/' button, you have to click number button first. This clicked number button is currentInput now.
// However, you click '/' button, then currentInput becomes previousInput and currentInput will be initialized.
// Because you need to select second number to divide with first number, now previousInput.
divideButton.addEventListener("click", function () {
  if (currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
    operation = "/";
  }
});

// When you click '*' button, then it listens event and activate function to set operator as '*'.
// Befor you click '*' button, you have to click number button first. This clicked number button is currentInput now.
// However, you click '*' button, then currentInput becomes previousInput and currentInput will be initialized.
// Because you need to select second number to multiply with first number, now previousInput.
multiplyButton.addEventListener("click", function () {
  if (currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
    operation = "*";
  }
});

// Initialize the screen with set currentInput as "0"
clearButton.addEventListener("click", function () {
  currentInput = "0";
  screenValue.textContent = currentInput;
});

// Activate calculate() function with pressing 'Enter' button.
// calculate() function will set currentInput as result value.
// Set textcontent of screenValue as currentInput and it shows on display screen.
enterButton.addEventListener("click", function () {
  if (currentInput !== "" && previousInput !== "" && operation != null) {
    calculate();
    screenValue.textContent = currentInput;
  }
});

// When you click '.' button, it changes currentInput into float number.
// if currentInput already contains '.', then you don't need to transform it into float number.
// However, if not, then it adds '.' with currentInput depending on status of currentInput.
// Finally, currentInput becomes the textcontent of screenValue to be displayed on screen sector.
floatButton.addEventListener("click", function () {
  if (!currentInput.includes(".")) {
    if (currentInput === "" || currentInput === "0") {
      currentInput = "0.";
    } else {
      currentInput += ".";
    }
    screenValue.textContent = currentInput;
  }
});

// When you click '%' button, then it listens event and activate function to set operator as '%'.
// Befor you click '%' button, you have to click number button first. This clicked number button is currentInput now.
// However, you click '%' button, then currentInput becomes previousInput and currentInput will be initialized.
// Because you need to select second number to get remainder when you divide second number with first number.
remainderButton.addEventListener("click", function () {
  if (currentInput !== "") {
    previousInput = currentInput;
    currentInput = "";
    operation = "%";
  }
});
