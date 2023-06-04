window.addEventListener("scroll", scrollEvent);

let elem = document.querySelector("header");

function scrollEvent() {
  if (window.pageYOffset > elem.getBoundingClientRect().height - 64) {
    document.querySelector(".navbar").style.visibility = "visible";
  } else {
    document.querySelector(".navbar").style.visibility = "hidden";
  }
}
