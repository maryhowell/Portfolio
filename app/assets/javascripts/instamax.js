
  $('#instamax').instamax({

   //MANDATORY --------------------------------

   //Instagram Client ID (below steps to generate your ID)
   clientId:"	77c62839bb414e9b947f13c872894d0a",

   //Any Instagram User URL
   user:'https://www.instagram.com/kittymeowmerz/',


   //GENERAL OPTIONS ------------------------------

   //Display square thumbnails or rectangular thumbnails
   coverImage: 'http://mywebsite.com/photo.jpg',

   //Instamax Skin - white|grey|none
   skin: 'grey',


   //GRID OPTIONS ---------------------------------

   //Maximum photos to be displayed in one load
   maxResults:6,

   //Distance between video thumbnails
   innerOffset: 40,

   //Minumum width of video thumbnails
   minItemWidth: 250,

   //Maximum width of video thumbnails
   maxItemWidth : 400,

   //Distance between video thumbnails and plugin conatiner
   outerOffset: 40,

   //Maximum width of the plugin container
   maxContainerWidth: 1000

  });
