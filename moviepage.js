let params = new URLSearchParams(document.location.search);
let id= params.get('movieID');
console.log(id);
async function getMovie(id) {
    let Movie = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=d18c11f9`);
    let individualMovie = await Movie.json();
    console.log(individualMovie);
    console.log(individualMovie.Title);
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
                  <p> <span class="additional-detail-title"> Genre: </span> <br> ${individualMovie.Genre} <br><br> 
                  <span class="additional-detail-title"> Director: </span> <br>${individualMovie.Director} <br><br> 
                  <span class="additional-detail-title"> Release Date: </span> <br> ${individualMovie.Released} <br><br>
                  <span class="additional-detail-title"> Runtime: </span> <br> ${individualMovie.Runtime} <br><br>
                  <span class="additional-detail-title"> Awards: </span> <br> ${individualMovie.Awards} <br><br>
                  <span class="additional-detail-title"> Cast: </span> <br> ${individualMovie.Actors} </p>
        
            <p class="plot-text">Plot: ${individualMovie.Plot}</p>
        </div>`

}
getMovie(id);
