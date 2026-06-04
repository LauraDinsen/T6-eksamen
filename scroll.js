const knap = document.getElementById("scrollTopBtn");

knap.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
