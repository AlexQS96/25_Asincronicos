
window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  if(localStorage.getItem('rateMovie') !== null) {
      const favsLink = document.getElementById("favorites");
      favsLink.innerHTML = '<a class="fav_link" href="favoritas.html">Mis Peliculas Favoritas</a>';
  }

  let url = "http://localhost:3031/api/movies";
  fetch(url)
      .then(response => response.json())
      .then(peliculas => {
          let data = peliculas.data;
          data.forEach((movie) => {
              const card = document.createElement("div");
              card.setAttribute("class", "card");
              
              const h1 = document.createElement("h1");
              h1.textContent = movie.title;
              
              const p = document.createElement("p");
              p.textContent = `Rating: ${movie.rating}`;
              
              const lengthMovie = document.createElement("p");
              lengthMovie.textContent = `Duración: ${movie.length}`;
              
              container.appendChild(card);
              card.appendChild(h1);
              card.appendChild(p);
              if (movie.genre !== null) {
                  const genre = document.createElement("p");
                  genre.textContent = `Genero: ${movie.genre.name}`;
                  card.appendChild(genre);
              }
              card.appendChild(lengthMovie);
          });
      });

};
