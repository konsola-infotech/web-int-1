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
