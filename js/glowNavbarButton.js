const navbarButtons = document.querySelectorAll(".header-nav-list__item");
const currentLocation = document.location.pathname
    .split("/")
    .reverse()[0]
    .split(".")[0];

navbarButtons.forEach((button) =>
    button.classList.remove("header-nav-list__item--glowed")
);

switch (currentLocation) {
    case "index":
        navbarButtons[0].classList.add("header-nav-list__item--glowed");
        break;
    case "about":
        navbarButtons[1].classList.add("header-nav-list__item--glowed");
        break;
    case "contact":
        navbarButtons[2].classList.add("header-nav-list__item--glowed");
        break;
}
