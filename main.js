const parallax = document.getElementById("parallax");
/* -------------------------------------------------------------------------- */
/*               esta función se activa con la acción del scroll              */
/* -------------------------------------------------------------------------- */
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  console.log("offset" + offset);
});
