const Numbers = [];

let user_input = Number(prompt('Enter the numbers and press 0 to cancel'));
while (user_input !== 0) {
    Numbers.push(user_input);

    user_input = Number(prompt('Enter the numbers and press 0 to cancel'));
}
Numbers.sort((a , b) => b - a);
console.log(Numbers);