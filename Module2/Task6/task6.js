function dice() {
    const result = [];
    let random_number;

    do {
        random_number = Math.floor(Math.random() * 6) + 1;
        result.push(random_number);
    } while (random_number !== 6);

    return result;
}

const dice_result = dice();

const html_list = document.querySelector('#result');

for (i = 0; i < dice_result.length; i++) {
    const item = document.createElement('ul');
    item.textContent = dice_result[i];
    html_list.appendChild(item);
}