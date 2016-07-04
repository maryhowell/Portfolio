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


// instafeed

var userFeed = new Instafeed({
  get: 'user',
  userId: '77c62839bb414e9b947f13c872894d0a',
  accessToken: '58277269686b45a5a1f6aa60d0824d29',
  //limit: 6,
  sortBy: 'random',
  resolution: 'standard_resolution',
  template: '<a class="l-fluidbox" data-aos="zoom-in-up" data-aos-offset="150" href="{{image}}"><img src="{{image}}" /></a>',
  after: function() {
    var images = $("#instafeed a").fluidbox();
        AOS.init();
    },
});
userFeed.run();












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
