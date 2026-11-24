const result = document.querySelector('form');

result.addEventListener('submit', async function(event) {

    event.preventDefault();
    
    const query = document.querySelector('#query').value;

    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
        const jsonData = await response.json();

        const content = document.querySelector('#results');
    

        content.innerHTML = '';

        for (let i = 0; i < jsonData.length; i ++ ) {
        const article = document.createElement('article');

        const create_header = document.createElement('h2');
        create_header.textContent = jsonData[i].show.name;

        const create_url = document.createElement('a');
        create_url.target = '_blank';
        create_url.href = jsonData[i].show.url;
        create_url.textContent = jsonData[i].show.url;

        const image = document.createElement('img');

        image.src = jsonData[i].show.image ? jsonData[i].show.image.medium : 
        'img/defaultimg.svg';

        image.alt = jsonData[i].show.name;
        const summary = document.createElement('div');
        summary.innerHTML = jsonData[i].show.summary;


        
        article.appendChild(image);
        article.appendChild(create_header);
        article.appendChild(create_url);
        article.appendChild(summary);

        content.appendChild(article);

        }
     
    } catch (error) {
        console.log(error.message);
    }  
})