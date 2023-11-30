// toggle menu
const navbarNav = document.querySelector(".navbar-nav");
// tombol menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar menu, menyembunyikan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// perubahan background navbar ketika di scroll
document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  window.scrollY > 0
    ? navbar.classList.add("scrolled")
    : navbar.classList.remove("scrolled");
});
