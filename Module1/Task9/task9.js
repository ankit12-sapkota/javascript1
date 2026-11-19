const number = prompt("Enter a number to check if it is a prime number. ")

let isprime = true;

if (number <= 1){
    isprime = false;
} else {
    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            isprime = false;
            break;
        }
    }
}

if (isprime) {
    document.querySelector('#result').innerHTML = 'The number given is a prime number. ';
}
else {
    document.querySelector('#result').innerHTML = 'The number given is not a prime number. ';
} 