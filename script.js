let api = 'https://www.omdbapi.com/?apikey=b3a16730&t=';

let title = document.getElementById('title');
let year = document.getElementById('year');
let rated = document.getElementById('rated');
let released = document.getElementById('released');
let runtime = document.getElementById('runtime');
let genre = document.getElementById('genre');
let director = document.getElementById('director');
let writer = document.getElementById('writer');
let actors = document.getElementById('actors');
let plot = document.getElementById('plot');
let language = document.getElementById('language');
let country = document.getElementById('country');
let awards = document.getElementById('awards');
let imdbRatings = document.getElementById('imdbRatings');
let boxOffice = document.getElementById('boxOffice');
let poster = document.getElementById('poster');


const click = document.getElementById('click');

click.addEventListener('click',async ()=>{

    let movieName = document.getElementById('movieName');
    let query = api+movieName.value;

    let movieLogo = document.getElementById('movie-logo');
    movieLogo.style.display = 'none';

    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block';

    await fetch(query).then((data)=>{
        return data.json();
    }).then((data)=>{

        spinner.style.display = 'none';
        title.innerHTML = data.Title;
        year.innerHTML = `Year : ${data.Year}`;
        rated.innerHTML = `Rated : ${data.Rated}`;
        released.innerHTML = `Released : ${data.Released}`;
        runtime.innerHTML = `Runtime : ${data.Runtime}`;
        genre.innerHTML = `Genre ${data.Genre}`;
        director.innerHTML = `Director : ${data.director}`;
        writer.innerHTML = `Writer : ${data.Writer}`;
        actors.innerHTML = `Actors : ${data.Actors}`;
        plot.innerHTML = `Plot : ${data.Plot}`;
        language.innerHTML = `Language : ${data.Language}`;
        country.innerHTML = `Country : ${data.Country}`;
        awards.innerHTML = `Awards : ${data.Awards}`;
        imdbRatings.innerHTML = `IMDB Rating : ${data.imdbRating}`;
        boxOffice.innerHTML = `BoxOffice : ${data.BoxOffice}`;
        poster.src = data.Poster;

    })

    movieName.value = "";
})

let logo = document.getElementById('logo');

logo.addEventListener('click',()=>{
    window.location.reload();
})