const year = prompt("Enter the year to check if it is a leap year. ")

let result;


if (year % 400 === 0 ) {
    result = 'Leap Year';
} else if (year % 100 === 0) {
    result = 'Not leap year'
}
else if (year % 4 === 0) {
    result = 'Leap Year';
}else {
    result = 'Not leap year';
}

document.querySelector('#result').innerHTML = (result);