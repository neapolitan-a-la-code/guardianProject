$(document).ready(function() {
  
  
var fillNews = function(sect) {

$.ajax({
    type: "GET",
    dataType: "jsonp",
    cache: false,
    url: "http://content.guardianapis.com/search?api-key=qbgzuh9db2dke2gym45p59wb&show-fields=all&order-by=newest&section=" + sect,
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

$('tabs').tabs({ selected: 2 });

var counter = 0;
var topics = ["environment", "politics", "culture", "money"];
 
    $("div#tabs").tabs();

    $("div#tabs ul li.plus").click(function() {

        var num_tabs = $("div#tabs ul li").length + 1;

  if (counter === 0) {
    
        $("div#tabs ul").append(
            "<li><a href='#politics"+ "'>" + "politics" + "</a></li>"
        );
    
        fillNews ("politics");
        }
        
        
          if (counter === 1) {
        $("div#tabs ul").append(
            "<li><a href='#environment"+ "'>" + "environment" + "</a></li>");
            
        fillNews ("environment");
        }
        
        
        counter ++;

        
//CONTENT OF NEW TAB $("div#tabs").append(
//            "<div id='tab" + num_tabs + "'>#" + num_tabs + "</div>"
//        );
  
        $("div#tabs").tabs("refresh");
    });
});

