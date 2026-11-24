const result = document.querySelector('form');

result.addEventListener('submit', async function(event) {

    event.preventDefault();
    
    const query = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
    
})