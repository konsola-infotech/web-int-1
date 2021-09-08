window.addEventListener("DOMContentLoaded", function () {
  let filled = document.querySelectorAll(".skill__filled");

  filled.forEach(function (bar) {
    let width = bar.getAttribute("data-percent");
    bar.style.width = `${width}%`;
  });

  jarallax(document.querySelectorAll(".jarallax"), {
    speed: 0.2,
  });
});

function toggleNav(event) {
  let bar = document.querySelector(".header");
  if (window.pageYOffset > 35) {
    bar.classList.add("scroll-down");
  } else {
    bar.classList.remove("scroll-down");
  }
}

window.addEventListener("scroll", toggleNav);
