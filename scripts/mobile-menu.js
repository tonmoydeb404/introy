const mobileMenu = document.getElementById("mobileMenu");
const menuToggler = document.getElementById("menuToggler");

menuToggler.addEventListener("click", (e) => {
  mobileMenu.classList.toggle("show");
});
