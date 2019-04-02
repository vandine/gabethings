
  
class card {
  constructor(tags, name, description, link, image){
    this.tags = tags;
    this.name = name;
    this.description = description;
    this.link = link;
    this.image = image;
  }
}

var testWordsCard = new card(["word"], "Test Words", "a test words post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg")
var testSoundsCard = new card(["sound"], "Test Sounds", "a test sounds post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg")
var testPicturesCard = new card(["picture"], "Test Pictures", "a test pictures post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg")
var resultsList = new Map();

//dummy tags
var pages = [testWordsCard, testSoundsCard, testPicturesCard];


function search(){
  
  
  var searchVal = $(".pagelist").val();
  
  
  for(var i=0; i < pages.length; i++){
    //this should really also be removing results that dont match lol
    
    if(searchVal.length > 3 && pages[i].tags.includes(searchVal)){
       resultsList.set(pages[i].name, makeCard(pages[i].name, pages[i].description, pages[i].image));
    }
    else if(!pages[i].tags.includes(searchVal)&& resultsList.has(searchVal)){
      resultsList.delete(pages[i].name);
    }
  
}
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
function makePicLink(link){
  var htmlLink = "<a href='https://imgur.com/' target='_blank'><img src="+link+" style='width:100%;' class='proj-img'></a>"
  return htmlLink
  }




  