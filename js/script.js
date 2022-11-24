/* const searchGenre = document.getElementById('search').value; */


/* 
function fetchMovies() { 
    fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=38243ac70a30fecdb6afc3cf99a81c1b&language=en-US') */
        /* fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=38243ac70a30fecdb6afc3cf99a81c1b&language=en-US') */
/*         .then(resp =>resp.json()).then(data => console.log(data))
}
fetchMovies(); */
let movies = [];
const movieElement = document.querySelector("#search_list");

function fetchMovies(){
    fetch("https://api.themoviedb.org/3/search/keyword?api_key=38243ac70a30fecdb6afc3cf99a81c1b&page=1") 
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log("I need to add a query from keyword to search for a movie" )
    })
}

function loadData(data, element){
    if (data){
        element.innerHtml = "";
        let innerElement = "";
        data.forEach((item) => {
            innerElement += `
            <li>${item}</li>`;
        });
        element.innerElement = innerElement;
    }
}







fetchMovies();
