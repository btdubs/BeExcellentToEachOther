var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=dc6zaTOxFJmzC";
var query = "&q=";

var queryList = ["dog","bill+ted+excellent","high+five","dog+high+five","excellent","thumbs+up"]


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getQuery(){
	var index = getRandomInt(0,queryList.length)
	return queryList[index]
}


function getSetGif() {
  var url = api + apiKey + query + getQuery();
  $.getJSON(url, function gotData(data){
    randomIndex = getRandomInt(0,data.data.length)
    var gifUrl = data.data[randomIndex].images.original.url
    $("body").css('background-image', 'url(' +gifUrl+ ')')
  });
}

$(document).ready(function(){
    $("#btn").click(function(){
      $("#btn").css('display','none')
	  $("#text").css('display','none')
      getSetGif()
      $("#btn2").css('display','block')
    });
    $("#btn2").click(function(){
      getSetGif()
    });
});