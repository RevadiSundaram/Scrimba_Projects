import { movieArray } from "./script.js";
console.log(movieArray)

function watchHtml(){
    document.getElementById("watchContent").innerHTML = '';
    movieArray.map(movie => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
            .then(res => res.json())
            .then(data => {
            console.log(data);
            document.getElementById("watchContent").innerHTML += `
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
    })
    })
}

watchHtml();