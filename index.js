async function movieList() {
    try{
        const movies = await fetch('https://8tlaxypk7l.execute-api.us-east-1.amazonaws.com/api/movies');
        const movienames = await movies.json();
        console.log(movienames);
        console.log(movienames.Year);
    }
    catch{
        console.log('Something went wrong');
    }
}

// movieList();

setTimeout(function(){
    const load = document.getElementById("spinner");
    load.remove();
    console.log('Set timeout executed');
},2000)

