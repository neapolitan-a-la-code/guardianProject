function processFootballData(footballData){
footyStuff = footballData;
var thisContainer = document.getElementById( "results" );
var listTmp = document.createElement( "ul" );
var tmpList = "";
    

    
for( var i=0; (i<footyStuff.results[0].length) && (i<100); i++ ) {
    
    console.log(footyStuff.results[0].length);
    
        if( tmpList.length <= 0 ) {
            tmpList = footyStuff.results[0][ i ];
        }
        else {
            tmpList = tmpList + "," + footyStuff.results[0][ i ];
    }
}
    
    

var footballURL = "http://content.guardianapis.com/search?q=football&format=json&api-key=qbgzuh9db2dke2gym45p59wb";
$.ajax( {
    url: footballURL,
    dataType: 'jsonp',
    success: function( thisData ) {
        var template = _.template($("#article-template").html());
        var output = template(thisData.response);
        $("#results").html(output);
    }
    });
}
    
processFootballData({ results: [ { } ] });