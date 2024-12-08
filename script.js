const api = 'https://www.omdbapi.com/?apikey=b3a16730&t=';

const title = document.getElementById('title');
const year = document.getElementById('year');
const rated = document.getElementById('rated');
const released = document.getElementById('released');
const runtime = document.getElementById('runtime');
const genre = document.getElementById('genre');
const director = document.getElementById('director');
const writer = document.getElementById('writer');
const actors = document.getElementById('actors');
const plot = document.getElementById('plot');
const language = document.getElementById('language');
const country = document.getElementById('country');
const awards = document.getElementById('awards');
const imdbRatings = document.getElementById('imdbRatings');
const boxOffice = document.getElementById('boxOffice');
const poster = document.getElementById('poster');

const click = document.getElementById('click');

click.addEventListener('click', async () => {

    const movieName = document.getElementById('movieName');
    const movie = document.getElementById('movie');
    const errors = document.getElementById('error');
    const errorMessage = document.getElementById('error-message');
    const movieLogo = document.getElementById('movie-logo');
    const spinner = document.getElementById('spinner');

    movieLogo.style.display = 'none';
    spinner.style.display = 'block';

    // Validate input
    if (!movieName.value) {
        movie.style.display = 'none';
        errors.style.display = 'flex';
        errorMessage.innerHTML = "The search box is empty ! <br> Type something to begin your search...";  // Empty input field error
        spinner.style.display = 'none';
        return;
    }

    // Prepare the query
    const query = api + encodeURIComponent(movieName.value);

    try {
        // Fetch data from the API
        const response = await fetch(query);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);  // Fetching error
        }

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error("We couldn’t find any matching TV show or movie. Please double-check the spelling or try a different title.");  // Movie not found
        }

        // Populate the UI with movie details
        spinner.style.display = 'none';
        movie.style.display = 'flex';
        errors.style.display = 'none';

        title.innerHTML = data.Title;
        year.innerHTML = `Year: ${data.Year}`;
        rated.innerHTML = `Rated: ${data.Rated}`;
        released.innerHTML = `Released: ${data.Released}`;
        runtime.innerHTML = `Runtime: ${data.Runtime}`;
        genre.innerHTML = `Genre: ${data.Genre}`;
        director.innerHTML = `Director: ${data.Director}`;
        writer.innerHTML = `Writer: ${data.Writer}`;
        actors.innerHTML = `Actors: ${data.Actors}`;
        plot.innerHTML = `Plot: ${data.Plot}`;
        language.innerHTML = `Language: ${data.Language}`;
        country.innerHTML = `Country: ${data.Country}`;
        awards.innerHTML = `Awards: ${data.Awards}`;
        imdbRatings.innerHTML = `IMDB Rating: ${data.imdbRating}`;
        boxOffice.innerHTML = `BoxOffice: ${data.BoxOffice}`;
        poster.src = data.Poster;

    } 
    
    catch (error) {

        // Handle errors
        spinner.style.display = 'none';
        movie.style.display = 'none';
        errors.style.display = 'flex';

        // Specific error handling 
        
        if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
            errorMessage.innerHTML = "Please check your internet connection or try again later...";  // Network error
        } 

        else if (error.message.includes("HTTP error")) {
            errorMessage.innerHTML = "Something went wrong while fetching data. <br> Please try again later...";  // Fetching error
        } 
        
        else {
            errorMessage.innerHTML = "No match found ! <br> Double-check the spelling or try a different title...";  // Movie not found
        }

    } 
    
    finally {
        // Clear the input field after fetching
        movieName.value = "";
    }

});

const logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    window.location.reload();
});
