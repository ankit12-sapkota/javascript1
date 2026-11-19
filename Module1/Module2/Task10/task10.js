const candicate_number = Number(prompt('Number of candidate?: '));
const candidate_list = []
for (i = 1; i <= candicate_number; i++){
    const candidates_name = prompt(`Name for candidate ${i}:`);

    let candidate = {
        name:candidates_name , 
        votes:0
    };

    candidate_list.push(candidate);
}

const number_of_voter = Number(prompt('Enter the number of total voters.'));

for (i = 1; i <= number_of_voter; i++){
    const voting = prompt('Name the candidate you want to vote for:');
    
    const candidate_index = candidate_list.findIndex(
        candidate => candidate.name ===voting
    );
    if (candidate_index !== -1) {
        candidate_list[candidate_index].votes += 1;
    }
}

candidate_list.sort((a, b) => b.votes - a.votes);


if (candidate_list.length > 0) {
    console.log(`The winner is ${candidate_list[0].name} with ${candidate_list[0].votes} votes.`)
    console.log('results:')
    for (j = 0; j < candidate_list.length; j++){
        console.log(`${candidate_list[j].name}: ${candidate_list[j].votes} votes`);
    }
}
