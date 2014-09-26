$(document).ready(function() {
  
  
var fillNews = function(sect) {

    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "http://content.guardianapis.com/search?api-key=qbgzuh9db2dke2gym45p59wb&show-fields=all&order-by=newest&section=" + sect,
        success: function(data) {
          
          var HTMLtoAppend = "<img src='";
            for (var i = 0; i < 5; i++) {
                if  (i === 0) {
                    HTMLtoAppend += data.response.results[i].fields.thumbnail + "'> ";
                }
                HTMLtoAppend += (i+1) + ".  " + "<a href='";
                HTMLtoAppend += data.response.results[i].webUrl + "'> ";
                HTMLtoAppend += data.response.results[i].webTitle + "</a><br> ";
                HTMLtoAppend += data.response.results[i].fields.trailText + "<br><br> ";
            }
        $("#" + sect).append(HTMLtoAppend);
        }
    
    });

};


fillNews ("uk-news");
fillNews ("football");
fillNews ("travel");

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var topicCount = 0;
var topics = ["culture","politics","world","money"];


$("div #tabs").tabs();

$("#plustab a").click(function() {
    var topicToCreate = (topics[topicCount]);
    var topicCapTitle = capFirstLetter(topicToCreate);
    var num_tabs = $("div#tabs ul li").length + 1;
 //   alert("hello");

    if (topicCount  == topics.length ) {
        return null;
    }

    $("#tab-names").append(
        "<li id='" + topicToCreate + "tab'><a href='#" + topicToCreate
        + "' style='color:#066EC9  ; font-family: arial,sans-serif;' role='tab' data-toggle='tab'>"
        + topicCapTitle + "</a></li>"
);
        
        
$("div .tab-content").append(
            "<div class='tab-pane' style ='display: block' id=" + topicToCreate +"></div>"
        );
        
        
        fillNews (topicToCreate);

        
//        $("div #tabs").tabs("refresh");
        topicCount ++;
        
       
    });

   
});

