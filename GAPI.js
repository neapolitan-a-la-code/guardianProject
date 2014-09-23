$(document).ready(function() {
$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=uk-news",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
          if  (i === 0) {
        $("#uk-news").append("<img src='" + data.response.results[i].fields.thumbnail + "'>")
          }
          
        $("#uk-news").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>"
            + data.response.results[i].webTitle + "</a><br>"
               + data.response.results[i].fields.trailText + "<br><br>");
            }
        }
    });

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=football",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
          
          if  (i === 0) {
        $("#football").append("<img src='" + data.response.results[i].fields.thumbnail + "'>")
          }
          
            $("#football").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>"
            + data.response.results[i].webTitle + "</a><br>"
               + data.response.results[i].fields.trailText + "<br><br>");
            }
        }
    });
    
    
$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=test&show-fields=all&order-by=newest&section=travel",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
          
          if  (i === 0) {
        $("#travel").append("<img src='" + data.response.results[i].fields.thumbnail + "'>")
          }
          
      $("#travel").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>"
            + data.response.results[i].webTitle + "</a><br>"
               + data.response.results[i].fields.trailText + "<br><br>");
            }
        }
    });
    
 });