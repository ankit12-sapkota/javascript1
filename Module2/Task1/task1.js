const number_list = [];
for (let i= 0; i < 5; i++){
    const number = Number(prompt('Input 5 different numbers.'));
    number_list.push(number);
}


    
console.log('Numbers in reverse order.')

for (let i = number_list.length - 1; i >= 0; i--) {
    console.log(number_list[i]);
}