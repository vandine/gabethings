//dummy tags
var pages = [["word", "Test Words", "a test words post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg"], 
             ["picture", "Test Pictures", "a test pictures post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg"],
             ["sound", "Test Sounds", "a test sounds post...", "https://imgur.com/", "https://pbs.twimg.com/profile_images/834978723149447172/-pe9YWrw_400x400.jpg"]];

function search(){
  
  var searchVal = $(".pagelist").val();
  
  
  for(var i=0; i < pages.length; i++){
    //this should really also be removing results that dont match lol
    
    if(searchVal.length > 3 && pages[i][0].includes(searchVal)){
       $(".results").append(makeCard(pages[i][1], pages[i][2], pages[i][3]));
    }
    else{
      return 0;
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
 

function makePicLink(link){
  var htmlLink = "<a href='https://imgur.com/' target='_blank'><img src="+link+" style='width:100%;' class='proj-img'></a>"
  return htmlLink
  }
  


  