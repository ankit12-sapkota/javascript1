const Dog_list = [];
for (i = 0; i < 6; i++) {
    const dog_names = prompt('Enter the name of Dogs. ');
    Dog_list.push(dog_names);
}
Dog_list.sort((a , b) => a.toLowerCase().localeCompare(b.toLowerCase()));
Dog_list.reverse();

const html_list = document.querySelector('#Names');
for (let j = 0; j < Dog_list.length; j++) {
    const item =  document.createElement('ul');
    item.textContent = Dog_list[j];
    html_list.appendChild(item);
}