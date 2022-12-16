/* const searchGenre = document.getElementById('search').value; */


/* 
function fetchMovies() { 
    fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=38243ac70a30fecdb6afc3cf99a81c1b&language=en-US') */
        /* fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=38243ac70a30fecdb6afc3cf99a81c1b&language=en-US') */
/*         .then(resp =>resp.json()).then(data => console.log(data))
}
fetchMovies(); */
/* ----------------------------------------------------- */
/* let movies = [];
const movieElement = document.querySelector("#search_list");

function fetchMovies(){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=38243ac70a30fecdb6afc3cf99a81c1b&query=${item}`) 
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



fetchMovies(); */

/* ------------------ */
const d = document;
const parameter = d.getElementById("search");
const apiKey= '38243ac70a30fecdb6afc3cf99a81c1b';
const httpCall = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${parameter}`);
// q=${search} = search es ID que viene de un Id en el Html

httpCall
.then( resp => resp.json() )
.then( data => {
    const input = data.results;
    console.log(data)
    console.log(input);


})
.catch( console.warn ); 



/* 
httpCall
    .then( resp => resp.json() )
    .then( data => {
        const url= data;
        console.log(url)        
    })
    .catch( console.warn );
    
    const searchData = document.getElementById('') */
/* return function searchFilters(input,selector){
    d.addEventListener("keyup", (e)=>{
        if(e.target.matches(input)){
            if(e.key==="Escape") e.target.value="";

        d.querySelectorAll(selector).forEach((el)=>
        el.textContent.toLowerCase().includes(e.target.value)
        ?el.classList.remove("filter")
        :el.classList.add("filter")
        )
        }
    })
} */