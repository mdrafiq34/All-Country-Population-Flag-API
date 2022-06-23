function loadPosts() {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(posts => displayPosts(posts))
}
loadPosts();


function displayPosts(posts) {
    let postsContainer = document.getElementById('post');

    for(let post of posts){
        let singlePosts = document.createElement('div');
        singlePosts.classList.add('post');
        singlePosts.innerHTML = `
        <h1 class="h" > Country Name: ${post.name.common} </h1>
        <p class="p"> Population: ${post.population}</p>
        <p class="p1"><img class="png" src= "${post.flags.png}"></p>
        `;
        postsContainer.appendChild(singlePosts);

    }
    
}
