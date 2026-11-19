'use strict';
const dice_rolls = Number(prompt('Enter the number of dice to roll.'));

let number = 0;
for (let i = 1; i < dice_rolls; i++) {
    const random_number = Math.floor(Math.random() * 6) + 1;
    number = number + random_number;
}

document.querySelector('#result').textContent = number;
