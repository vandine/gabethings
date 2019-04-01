//dummy tags
var pages = [["words", "Test Words", "a test words post...", "https://imgur.com/"], ["pictures", "Test Pictures", "a test pictures post...", "https://imgur.com/"],
             ["sounds", "Test Sounds", "a test sounds post...", "https://imgur.com/"]];

function search(){
  
  var searchVal = $(".pagelist").val();
  
  for(var i=0; i < pages.length();i++){
    if(pages[i][0].includes(searchVal)){
       $(".results").append(makeCard(pages[i][1], pages[i][2]));
      alert("appended " + pages[i][0] + "to search results.");
    }
    else{
      return 0;
    }
  
}
}

function makeCard(name, blurb){
  return "<li class='proj-card'>"+makeName(name)+makeBlurb(blurb)+"</li>"
}


function makeName(name){
  var htmlName = "<h1>"+name+"</h1>";
  return htmlName;
}

function makeBlurb(blurb){
  var htmlBlurb = "<p>"+blurb+"</p>";
  return htmlBlurb;
}


  