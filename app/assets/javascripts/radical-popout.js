$(document).ready(function() {
  var circularnav = document.getElementsByClassName("ss-icon")[0];

  function clickSet() {
    circularnav.classList.toggle("closed")
    circularnav.classList.toggle("clicked");
    if (circularnav.classList.contains("closed")) {
      // freshly closed button
      var pseudoBefore = window.getComputedStyle(
        document.querySelector('.ss-icon'), ':before'
      ).animation
    }
  }

  circularnav.addEventListener("click", clickSet, false);

  circularnav.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      clickSet();
    }
  });
})
