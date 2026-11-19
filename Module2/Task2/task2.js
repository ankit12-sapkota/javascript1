const number_ofparticipant =  Number(prompt('Enter the number of participant?. '));
const participant = []

for (let i = 0; i < number_ofparticipant; i++) {
    const participant_name = prompt("Enter the name of participant. ");
    participant.push(participant_name);
}    

participant.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const html_list = document.querySelector('#Names');
for (let j = 0; j < participant.length; j++){
    const item = document.createElement('ol');
    item.textContent = participant[j];
    html_list.appendChild(item);
}
