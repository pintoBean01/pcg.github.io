const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");

menuToggle.addEventListener("click", () => {
  mainMenu.classList.toggle("active");

  // Optional: Animate hamburger to X
  menuToggle.classList.toggle("is-active");
});
