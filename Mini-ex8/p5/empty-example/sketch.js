var api = "https://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=6fGMBZG8tNDSStDqV3shbMT098idqiSR"
var query = "&q=";
var input;
var x = 0;
var y = 0;
var company;

function setup() {
noCanvas();
var button = select('#submit');
button.mousePressed(askWord);
input = select('#city');
company = loadJSON("fortune500.json");

}

function askWord(){
  var url = api + apiKey + query + input.value() + " " + company.companies[x];
  loadJSON(url, gotData);
  x=x+100;
  if(x>=500){
    x=0;
  }
  y=y+1;
  if(y>=9){
    y=0;
  }
}

function gotData(giphy){
  createImg(giphy.data[y].images.original.url);
}
