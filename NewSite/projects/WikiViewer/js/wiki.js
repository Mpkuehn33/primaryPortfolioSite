$(document).ready(function(){
    $('#inputs').keypress(function(e){
      if(e.keyCode==13){
          initiateSearch();
      }
    });
});

function goAgain(){
    $('.wrap').css("display", "block");
    $('.wrap2').css("display", "none");
    $('#searchdiv').css("margin-top", "10");

}

function initiateSearch(){
    var rdy = $("#searchdiv").css('margin-top');
    if (rdy == '25px'){
        $('.wrap2').css("display", "none");
        execute();
        return;
    }
    
    $('#searchdiv').css("margin-top", "255");
    $('.wrap').css("display", "none");
    $('.wrap2').css("display", "none");
    $('#searchdiv').animate({'margin-top': '25px'}, 900).then(execute());
    };


function execute(){
    var searchMe = $('#inputs').val();
    $('.wrap').css("display", "none");
   // $('.wrap2').css("display", "block")
    mainSearch(searchMe);
}

function mainSearch(query) {
  $.getJSON('http://en.wikipedia.org//w/api.php?action=query&format=json&callback=?&list=search&utf8=1&srsearch=' + query + '&utf8=',
            function(json){
                
                //variables
                var pageURL = 'https://en.wikipedia.org/wiki/' + (json.query.search[0].title);
                var snipnum = json.query.search[0].snippet.split("(disambiguation).").length - 1; 
            
                //updates
                for(x = 0; x < 10; x++){
                    $('#1').fadeIn(3000);
                console.log(json.query.search[x].snippet);
                
                pageURL = 'https://en.wikipedia.org/wiki/' + (json.query.search[x].title);
                snipnum = json.query.search[x].snippet.split("(disambiguation).").length - 1; 
                $('#log' + x).html(json.query.search[x].snippet.split("(disambiguation).")[snipnum]); 
                $('#ttl' + x).html(json.query.search[x].title);
                $('#ref' + x).attr("href", pageURL);
                
                
                }
      $("#wrap2").fadeIn(1500).css("display","inline-block");
      
      //$('#logurl').attr("href", )
  })};
