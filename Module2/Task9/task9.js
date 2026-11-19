const numbers = [2, 7, 4];

function even_result(array) {
    let even_number = [];

    for (i = 0;  i < array.length; i++){
        if (array[i] % 2 === 0) {
            even_number.push(array[i]);
            
        }    
    }
    return even_number;
}
const test = even_result(numbers);
console.log(numbers);
console.log(test);

