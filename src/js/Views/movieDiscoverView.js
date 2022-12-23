export default new (class MovieDiscoverView {
  #parentEl = document.querySelector(".discoverMovieCarousel");
  #renderQty = 5;
  renderCarousel(data) {
    const movies = data.map((movie) => movie);
    const carouselQty = Math.floor(21 / 5);
    this.#parentEl.innerHTML = "";
    for (let carindex = 0; carindex < carouselQty; carindex++) {
      // Crear botones si es el primero
      if (carindex === 0)
        this.#parentEl.insertAdjacentHTML("beforeend", this.markUpButtons());

      //Crear carousel item
      this.#parentEl.insertAdjacentHTML(
        "beforeend",
        this.markupCarousel(carindex, carindex === 0 ? true : false)
      );

      //Select current carrousel
      const currCarouselItem = document.querySelector(`.car${carindex}`);
      for (let index = 0; index < this.#renderQty; index++) {
        currCarouselItem.insertAdjacentHTML(
          "beforeend",
          this.markUpCard(movies[0])
        );
        movies.shift();
      }
    }
  }
  markUpCard(movie) {
    return `
    <!-- CARD -->
    <div class="card carousel-card bg-transparent movie-card" style="width: 18rem " id="123">
    <img
    src="${movie.img}"
    class="card-img-top border-4"
    alt="..."
    />
    <div class="card-body --card-body">
     <p class="card-title">${movie.title}</p>
     <p class="card-text lead font-size-1">
     <small></small>
     </p>
     <a href="#${movie.id}" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
      <!-- CAR END -->
      `;
  }

  markUpButtons() {
    return `
    <!-- Button Previous -->
    <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span
      class="carousel-control-prev-icon bg-black"
      aria-hidden="true"
    ></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <!-- Button Next -->
  <button
  class="carousel-control-next"
  type="button"
  data-bs-target="#carouselExampleControls"
  data-bs-slide="next"
>
  <span
    class="carousel-control-next-icon bg-black"
    aria-hidden="true"
  ></span>
  <span class="visually-hidden">Next</span>
</button>
    `;
  }

  markupCarousel(number, active) {
    return `
    <div class="carousel-item  ${active ? "active" : ""} px-5 ">
    <div class="d-flex gap-5  justify-content-center px-5  movie-cards car${number}" data> 
    </div> 
    `;
  }
  loading() {
    this.#parentEl.innerHTML = "";
    this.#parentEl.insertAdjacentHTML("beforeend", "<h1>LOADING...</h1>");
  }
})();
