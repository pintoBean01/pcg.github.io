const tile = document.querySelectorAll(".tile_inner");

function flipTile() {
  this.classList.toggle("is-flipped");
}
tile.forEach((tile) => tile.addEventListener("click", flipTile));
