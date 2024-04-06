const API_KEY = '7ca4fc02';
const page = 3;
const title = "Blade Runner";
const id = "tt0083658";
export let movieArray = [];
// let inputValue = document.getElementById("searchIp").value;
// console.log(inputValue)

document.getElementById("submit").addEventListener("click", function(e){
    
    let inputValue = document.getElementById("searchIp").value;
    console.log(inputValue)
    e.preventDefault();
    
    getFeedHtml(inputValue);
});



function getFeedHtml(value){
    document.getElementById("content").innerHTML = '';
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.Search);
        data.Search.map(movie => {
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(data => {
            // console.log(data);
            document.getElementById("content").innerHTML += `
            <div class="card">
                <img src="${data.Poster}" />
                <div class="details">
                    <div class="head">
                        <p class="title">${data.Title}</p>
                        <p><i class="fa-solid fa-star"></i>&nbsp;${data.imdbRating}</p>
                    </div>
                    <div class="det">
                        <p>${data.Runtime}</p>
                        <p>${data.Genre}</p>
                        <button id="watch" data-watch=${data.imdbID} class="watch"><i class="fa-solid fa-plus plus"></i>&nbsp;Watchlist</button>
                    </div>
                    <div class="plot">
                        <p>${data.Plot}</p>
                    </div>
                </div>
            </div>
            `
                
            });
            
        })
    });
}
// document.getElementById("watch").addEventListener("click", function(){
//     console.log("watchhhhhhhhh")
// });

document.addEventListener("click", function(e){
    if(e.target.dataset.watch){
        console.log(e.target.dataset.watch)
        movieArray.push(e.target.dataset.watch)
        console.log("Movie Array "+movieArray)
    }
    // console.log("inside" + movieArray)
})


