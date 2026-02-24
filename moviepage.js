let params = new URLSearchParams(document.location.search);
let id= params.get('movieID');
console.log(id);
async function getMovieById(id) {
    let Movie = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d18c11f9`);
    let individualMovie = await Movie.json();
    LoadIndivualMovie(individualMovie);
}

function LoadIndivualMovie(individualMovie){
    const loader = document.getElementById('spinner');
    loader.remove();
    const section = document.createElement('section');
    section.classList.add("movie-page");
    const br = document.createElement('br');
    const header = document.getElementById('headers');
    header.insertAdjacentElement('afterend',section);
    header.insertAdjacentElement('afterend',br);
    section.innerHTML=`<img src="${individualMovie.Poster}" alt="gotg">
        <div class="movie-overview">
                <h2>${individualMovie.Title}</h2>
                <p>${individualMovie.Year} -⭐${individualMovie.imdbRating}</p>
                  <p> <span class="additional-detail-title"> Genre: </span> <br class='mobile-hide'> ${individualMovie.Genre} <br><br> 
                  <span class="additional-detail-title"> Director: </span> <br class='mobile-hide'>${individualMovie.Director} <br><br> 
                  <span class="additional-detail-title"> Release Date: </span> <br class='mobile-hide'> ${individualMovie.Released} <br><br>
                  <span class="additional-detail-title"> Runtime: </span> <br class='mobile-hide'> ${individualMovie.Runtime} <br><br>
                  <span class="additional-detail-title"> Awards: </span> <br class='mobile-hide'> ${individualMovie.Awards} <br><br>
                  <span class="additional-detail-title"> Cast: </span> <br class='mobile-hide'> ${individualMovie.Actors} </p>
        
            <p class="plot-text">Plot: ${individualMovie.Plot}</p>
        </div>`
}
getMovieById(id);
