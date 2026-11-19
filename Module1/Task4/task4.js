'use strict';
const room = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const names = prompt("Enter your name.")

const random_number = Math.floor(Math.random() * 4) + 1

let result;

if (random_number === 1) {
    result = room[0];
} else if (random_number === 2) {
    result = room[1];
} else if (random_number === 3) {
    result = room[2];
} else {
    result = room[3];
}

document.querySelector('#result').innerHTML = (names + ', you are ' + result);
