const number_of_dice = Number(prompt('Enter the number of dice.'))
const sum_of_dice = Number(prompt('Enter the expected sum to find the probability.'))

max_sum = number_of_dice * 6;
min_sum = number_of_dice;

if (max_sum < sum_of_dice || min_sum > sum_of_dice ) {
    console.log('This Cannot be calculated.')
}
else {
    let successful_count = 0;
    let total_loop_count = 0;
    const simulation_count = 10000;

    while (total_loop_count < simulation_count) {
        let result = 0;
        for (i = 0; i < number_of_dice; i++) {
            const random_number = Math.floor(Math.random() * 6) + 1;
            result = result + random_number;
        }
        if (result === sum_of_dice) {
            successful_count++;
        }

        total_loop_count++;
    } 
    const find_provability = successful_count / total_loop_count; 
    const final_percentage = find_provability * 100;
    document.querySelector('#result').innerHTML = final_percentage.toFixed(2)
}


