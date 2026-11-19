const question = confirm('Should i calculate the square root?')


let result
if (question === true) {
    number = prompt("Enter a positive number")
    if (number < 0) {
        result = ('The number is negetive');
    }
    else {
        const root_square = Math.sqrt(number)
        result = (root_square);  
    }
    document.querySelector('#result').innerHTML = 'The square root of ' + number + ' is ' + result
}
else if (question === false) {
    error_message = ("The square root is not calculated. ")
    document.querySelector('#result').innerHTML = error_message
}

