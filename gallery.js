var chico = [
  {
  description: "Bidwell Park",
  picture: "http://www.csuchico.edu/our-region/about-town/images/bidwell3.jpg" ,
  from: "http://www.csuchico.edu/our-region/about-town/bidwell-park.shtml"
  },
   {
  description; "Skyway",
  picture: "https://s3-media1.fl.yelpcdn.com/bphoto/mWwdfEicQJado1lNSzrlSg/ls.jpg",
  from: "https://www.yelp.com/biz/skyway-golf-park-chico"
  }
  {description: "Panera",
   picture:" http://gopalladio.com/assets/ee-images/made/assets/ee-images/uploads/storefronts/Panera4_700_400.jpg",
   from: "http://gopalladio.com/dining/store/panera-bread"
 }
 {description: "Library",
  picture: "http://www.csuchico.edu/maps/campus/images/meriam.jpg",
  from:"http://www.csuchico.edu/vpaa/planning/academic-facilities/mlib/index.shtml"
 }
 {description: "Monkey Face",
  picture: "https://s3.amazonaws.com/storage.filemobile.com/storage/25463209/15",
  from:"http://ulocal.kcra.com/mediadetail/25463209-Monkey-Face-in-Bidwell-Park,-C?gid=79861&uid=&sort=upload%20DESC&offset=2"
}
 ];
var i = 0;
function shuffleGallery()
{
  var index;
  do {
 index = Math.floor(Math.random() * chico.length);
  }
  while (index===i); // this is saying saying that the index has to be the
  //as the current in order to run again
  current = index;  //separately this is saying when current = index
  console.log(chico[i]); //to write this is the lo
