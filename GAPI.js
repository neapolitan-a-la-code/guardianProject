$(document).ready(function() {
  
  
var fillNews = function(sect) {

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=" + sect,
    success: function(data) {
        //window.alert("in ajax" + sect);
        for (var i = 0; i < 5; i++) {
          if  (i === 0) {
        $("#" + sect).append("<img src='" + data.response.results[i].fields.thumbnail + "'>");
          }
          
        $("#" + sect).append((i+1) + ". " + "<a href='"
            + data.response.results[i].webUrl + "'>"
            + data.response.results[i].webTitle + "</a><br>"
               + data.response.results[i].fields.trailText + "<br><br>");
            }
        }
    });

};

fillNews ("uk-news");

fillNews ("football");

fillNews ("travel");

  
});