let first , second , third;
first = prompt("Enter a first number.")
second = prompt("Enter a second number.")
third = prompt("Enter a third number")

const sum = parseInt(first) + parseInt(second) + parseInt(third) 
document.querySelector('#sum').innerHTML = 'The sum of given 3 integer is ' + sum