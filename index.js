const nav = document.querySelector("#primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the button menu
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    // if the menu is closed, open it
    nav.setAttribute("data-visible", "true");
  } else {
    // if the menu is open, close it
    nav.setAttribute("data-visible", "false");
  }
});
