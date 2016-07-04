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


// skill set

// Skills Bars Animation
setTimeout(function() {
  $('#html-percent').html('100%');
}, 2600);

setTimeout(function() {
  $('#css-percent').html('60%');
}, 3500);

setTimeout(function() {
  $('#javascript-percent').html('50%');
}, 4200);

setTimeout(function() {
  $('#git-percent').html('70%');
}, 4200);
