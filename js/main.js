/* JavaScript. */

// Elements.
let elem = {
    "banner": document.querySelector(".banner"),
    "navbar": document.querySelector(".navbar"),
    "menu": document.querySelector("#menu"),
    "aside": document.querySelector(".aside"),
};

function main() {
    // Event Handlers.
    window.addEventListener("scroll", handleScrollEvent);
    elem.menu.addEventListener("click", toggleMenu);
}

function handleScrollEvent() {
    // Show Navbar or hide this.
    if (window.pageYOffset > elem.banner.getBoundingClientRect().height) {
        elem.navbar.classList.add("active");
    } else {
        elem.navbar.classList.remove("active");
    }
}

function toggleMenu() {
    if (elem.aside.classList.contains("active")) {
        elem.aside.classList.remove("active");
        elem.navbar.classList.remove("menu");
    } else {
        elem.aside.classList.add("active");
        elem.navbar.classList.add("menu");
    }
}

main();