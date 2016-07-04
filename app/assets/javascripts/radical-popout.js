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

// Instagram feed


$(function(){
  var accessToken = '190735197.1677ed0.9933a619f0c04b708bf8b0fb50784bf6';
  $.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken+'&callback=?',function (insta) {
    $.each(insta.data,function (photos,src) {
      if ( photos === 6 ) { return false; }
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
