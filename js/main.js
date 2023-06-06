/* JavaScript. */

// Elements.
let elem = {
    "banner": document.querySelector(".banner"),
    "social": document.querySelector(".social"),
    "navbar": document.querySelector(".navbar"),
    "menu": document.querySelector("#menu"),
    "aside": document.querySelector(".aside"),
    "navZone": document.querySelector("#zone"),
};

let ancles = [
    document.querySelector("#home"),
    document.querySelector("#about"),
    document.querySelector("#knowledge"),
    document.querySelector("#education"),
];

function main() {
    // Event Handlers.
    window.addEventListener("scroll", handleScrollEvent);
    elem.menu.addEventListener("click", toggleMenu);

    for (let e of elem.aside.querySelectorAll("ul li a")) {
        e.addEventListener("click", () => {
            setTimeout(toggleMenu, 200);
        });
    }

    document.querySelector("#themeToggle").addEventListener("click", toggleTheme);
}

let lastHight = elem.aside;

function toggleTheme() {
    let theme = document.querySelector("#theme");

    const dark = "css/themes/catppuccin/mocha.css";
    const light = "css/themes/catppuccin/latte.css";

    if (theme.getAttribute("href") == dark) {
        theme.setAttribute("href", light)
    } else {
        theme.setAttribute("href", dark)
    }
}

function handleScrollEvent() {
    // Show Navbar or hide this.
    if (window.pageYOffset != 0) {
        elem.navbar.classList.add("active");
    } else {
        elem.navbar.classList.remove("active");
    }

    // Change Navbar Text.
    let changed = false;


    for (let ancle of ancles.toReversed()) {
        if (ancle.getBoundingClientRect().y < 1) {
            changed = true;
            let currentHight = elem.aside
                .querySelector(`li a[href*='${ancle.getAttribute("id")}']`)
                .parentElement

            if (currentHight == lastHight) {
                break;
            }
            lastHight.classList.remove("active");

            lastHight = currentHight;
            currentHight.classList.add("active");

            elem.navZone.classList.add("hide");
            setTimeout(() => {
                elem.navZone.innerText = ancle.innerText;
            }, 400);
            setTimeout(() => {
                elem.navZone.classList.remove("hide");
            }, 400);
            break;
        }
    }

    if (!changed && elem.navZone.innerText != "PERFIL") {
        elem.navZone.classList.add("hide");
        setTimeout(() => {
            elem.navZone.innerText = "Perfil";
        }, 400);
        setTimeout(() => {
            elem.navZone.classList.remove("hide");
        }, 400);
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