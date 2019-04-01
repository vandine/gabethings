//dummy tags
var pages = [["words", "Test Words", "a test words post...", "https://imgur.com/"], ["pictures", "Test Pictures", "a test pictures post...", "https://imgur.com/"],
             ["sounds", "Test Sounds", "a test sounds post...", "https://imgur.com/"]];

function search(){
  
  searchVal = $(".pagelist").val();
  
  for(var i=0; i < pages.length();i++){
    if(pages[i][0].includes(searchVal){
       makePost();
    }
    if else{
      return 0;
    }
  
}

function makePost(tag, name, blurb){
  htmlTag = 