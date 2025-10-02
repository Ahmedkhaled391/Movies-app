let Container = document.querySelector('.movies');

fetch('https://api.themoviedb.org/3/discover/movie?api_key=f3b906d9bbb6e80bab1c1a72f2fa5dfa')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let movies = data.results;
    movies.forEach(movie => {
      let card = document.createElement('div');
      card.className = "col-md-4 col-lg-3 col-sm-6 d-flex justify-content-center";

      card.innerHTML = `
        <div class="card " style="width: 18rem; margin-bottom:20px;">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="...">
          <div class="card-body d-flex flex-column ">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">${movie.overview}</p>
            <a href="#" class="btn btn-primary mt-auto align-self-center">Go somewhere</a>
          </div>
        </div>
      `;
      Container.append(card);
    });
  });

{/*<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>*/}



