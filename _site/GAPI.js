$(document).ready(function() {
$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=qbgzuh9db2dke2gym45p59wb&show-fields=all&order-by=newest&section=uk-news",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
          if  (i === 0) {
            //$("uk-news").append("<img src='" + data.response.results[i].thumbnail + "'>");
            console.log("hello");
          }
          
        $("#uk-news").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>" +
               data.response.results[i].webTitle + "</a><br>");
            }
            console.log(data);
        }
    });

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=qbgzuh9db2dke2gym45p59wb&show-fields=webTitle,%20shortUrl,%20trailText&order-by=newest&section=football",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
            $("#football").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>" +
               data.response.results[i].webTitle + "</a><br>");
            }
            console.log(data);
        }
    });
    
    
$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=qbgzuh9db2dke2gym45p59wb&show-fields=webTitle,%20shortUrl,%20trailText&order-by=newest&section=travel",
    success: function(data) {
        for (var i = 0; i < 5; i++) {
      $("#travel").append((i+1) + ". " + "<a target='_blank' href='"
            + data.response.results[i].webUrl + "'>" +
               data.response.results[i].webTitle + "</a><br>");
            }
            console.log(data);
        }
    });
    
 });