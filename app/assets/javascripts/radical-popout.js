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
//
// var userFeed = new Instafeed({
//   get: 'user',
//   userId: '77c62839bb414e9b947f13c872894d0a',
//   accessToken: '58277269686b45a5a1f6aa60d0824d29',
//   //limit: 6,
//   sortBy: 'random',
//   resolution: 'standard_resolution',
//   template: '<a class="l-fluidbox" data-aos="zoom-in-up" data-aos-offset="150" href="{{image}}"><img src="{{image}}" /></a>',
//   after: function() {
//     var images = $("#instafeed a").fluidbox();
//         AOS.init();
//     },
// });
// userFeed.run();

$(function(){
  var accessToken = '58277269686b45a5a1f6aa60d0824d29';
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 20 ) { return false; }
      $('<a href="'+src.link+'" class="post">'+
        '<div class="image" style="background-image:url('+src.images.standard_resolution.url+');"></div>'+
        '<ul>'+
        '<li><i class="fa fa-camera"></i> '+src.filter+'</li>'+
        '<li><i class="fa fa-heart"></i> '+src.likes.count+'</li>'+
        '<li><i class="fa fa-comment"></i> '+src.comments.count+'</li>'+
        '</ul></a>').appendTo('#content');
    });
  });
});










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
