const rowGrowcast = document.getElementById("row-growcast");
const rowFlutter = document.getElementById("row-flutter");
const rowJornada = document.getElementById("row-jornada");
const rowDiversos = document.getElementById("row-diversos");
const modalMovie = new bootstrap.Modal("#modal-movie", {});
const bodyMovie = document.getElementById("body-movie");

function openModalMovie(item) {
  bodyMovie.innerHTML = `
  <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/${item.code}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>
  `;

  modalMovie.show();
}

function addCard(item) {
  const dataString = JSON.stringify(item);
  const htmlCard = `
  <div class = "col-lg-3 col-sm-6 col-md-4 col-movies">
  <div class=" show-body my-4 ">
    <img src="https://img.youtube.com/vi/${item.code}/sddefault.jpg" class="card-img-top" alt="thumb video" />
  <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <button  onclick='openModalMovie(${dataString})' class='btn btn-primary'>Assistir</button>
  </div>
  </div>
</div>
    `;

  if (item.category === "Growcast[episódios]") {
    rowGrowcast.innerHTML += htmlCard;
  } else if (item.category === "Webinar em Flutter") {
    rowFlutter.innerHTML += htmlCard;
  } else if (item.category === "Jornada UX/UI") {
    rowJornada.innerHTML += htmlCard;
  } else {
    rowDiversos.innerHTML += htmlCard;
  }
}
movies.forEach((item) => {
  addCard(item);
});

function openEpisode() {
  bodyMovie.innerHTML = `
  <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/7OWT3lfHYvE"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>
  `;

  modalMovie.show();
}
