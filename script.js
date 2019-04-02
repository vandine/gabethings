
  
class card {
  constructor(tags, name, description, link, image){
    this.tags = tags;
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
  }
}

var testWordsCard = new card(["words", "dogs", "cats", "trees"], "Test Words", "a test words post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg")
var testSoundsCard = new card(["sounds", "trees", "rocks"], "Test Sounds", "a test sounds post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg")
var testPicturesCard = new card(["tax", "fraud", "kakashi"], "Your Fave Commits Tax Fraud", "tax fraud...", "https://www.tumblr.com/tagged/your-fave-commits-tax-fraud", "https://66.media.tumblr.com/adeef6769cd9e4d80256be48958eb539/tumblr_inline_pkf896sTm41vcbfc4_540.jpg")
var resultsList = new Map();

//dummy tags
var pages = [testWordsCard, testSoundsCard, testPicturesCard];

//find pages with tags matching things
function search(){
  
  
  var searchVal = $(".pagelist").val();
  
  
  for(var i=0; i < pages.length; i++){
    //this should really also be removing results that dont match lol
    
    if(pages[i].tags.includes(searchVal)){
       console.log("added one.");
       resultsList.set(pages[i].name, makeCard(pages[i].name, pages[i].description, pages[i].image));
    }
    else if(!(Object.keys(resultsList).includes(searchVal))){
      console.log("removed one.");
      resultsList.delete(pages[i].name);
    }
}
var showResults = "";
  for (let [name, card] of resultsList) {
    showResults+= card;
}
  $(".results").html(showResults);
  console.log(resultsList);
}



//generate cards for search testing
function makeCard(name, blurb, link){
  return "<li class='proj-card'>"+makePicLink(link)+makeName(name)+makeBlurb(blurb)+"</li>"
}


function makeName(name){
  var htmlName = "<h1>"+name+"</h1>";
  return htmlName;
}

function makeBlurb(blurb){
  var htmlBlurb = "<p>"+blurb+"</p>";
  return htmlBlurb;
} 
 
//for now it links to imgur whether you want it to or not. i hate it too. die mad about it
function makePicLink(pic, link){
  var htmlLink = "<a href='"+link"' target='_blank'><img src="+pic+" style='width:100%;' class='proj-img'></a>"
  return htmlLink
  }








  