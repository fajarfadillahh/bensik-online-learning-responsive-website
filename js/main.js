// ===== SHOW HEADER MENU =====
function showMenu(menuId, toggleId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle");

// ===== SCROLLUP =====
const scrollY = window.pageYOffset;

function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
