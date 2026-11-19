
const start_year = prompt("Enter the starting year.");
const end_year = prompt("Enter the ending year. ");

let year_list = []
for (let i= start_year; i < end_year; i++) {
    if (i % 400 === 0) {
        year_list.push(i)
    }else if (i % 100 === 0) {
    
    }else if (i % 4 === 0) {
        year_list.push(i)
    }else {

    }
}

const html_list = document.querySelector('#list')
for (let j = 0; j < year_list.length; j++){
    const item = document.createElement('li');
    item.textContent = year_list[j]
    html_list.appendChild(item);
}

