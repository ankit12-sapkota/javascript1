const number1 = document.querySelector('#num1');
const number2 = document.querySelector('#num2');
const button = document.querySelector('#start');
const results = document.querySelector('#result')
const operation = document.querySelector('#operation');
function calculate(number1, number2, operation) {
    let result = 0;
    if (operation === 'div') {
        result = number1 / number2;
    }
    else if (operation === 'sub') {
        result = number1 - number2;
  
    }
    else if (operation === 'multi') {
        result = number1 * number2;
   
    }
    else {
        result = number1 + number2;
    
    }
return result;
};

button.addEventListener('click', function() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    const selected_operation = operation.value;

    const result = calculate(num1, num2, selected_operation);

    results.textContent = result;
});

