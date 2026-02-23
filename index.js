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

setTimeout(function(){
    console.log('Set timeout executed');
    const br = document.createElement("br");
    // 1️⃣ Select existing header
    const header = document.querySelector("#headers");
    
    // 2️⃣ Create section
    const section = document.createElement("section");
    section.classList.add("movie-tiles-field");
    
    // 3️⃣ Insert section after header
    header.insertAdjacentElement("afterend", section);
    header.insertAdjacentElement("afterend", br);

    // Create main card div
const movieCard = document.createElement("div");
movieCard.classList.add("movie-card");
movieCard.style.cursor = "pointer";

// Add click event
movieCard.addEventListener("click", () => {
    window.location.href = "moviepage.html";
});

// Create image wrapper
const imgWrapper = document.createElement("div");

const img = document.createElement("img");
img.classList.add("poster");
img.src = "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg";
img.alt = "Gotg";

imgWrapper.appendChild(img);

// Create details div
const details = document.createElement("div");
details.classList.add("movie-details");

// Title
const title = document.createElement("h2");
title.textContent = "Movie Title Here";

// Rating
const rating = document.createElement("p");
rating.textContent = "2024 - ⭐8.0";

// Description
const desc = document.createElement("p");
desc.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

// Append details
details.append(title, rating, desc);

// Append everything to card
movieCard.append(imgWrapper, details);

// Finally append to container
section.appendChild(movieCard);
const clone = movieCard.cloneNode(true);
section.appendChild(clone);
const clone1 = movieCard.cloneNode(true);
section.appendChild(clone1);
const clone2 = movieCard.cloneNode(true);
section.appendChild(clone2);
const clone3 = movieCard.cloneNode(true);
section.appendChild(clone3);
const clone4 = movieCard.cloneNode(true);
section.appendChild(clone4);
},2000)