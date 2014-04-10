var title = document.title;
var location = document.location;
var protocol = "http:";
if (window.location.protocol === "https:") {
   protocol = "https:";
}
var hostname = protocol+"//YOUR_HOSTNAME"; // ADD YOUR HOSTNAME FOR TIDBIT SERVICE

if ($("#tidbit").length == 0) {
    $("body").append("\
        <div id='tidbit'>\
            <div id='tidbit_veil' style=''>\
            </div>\
            <iframe src='"+hostname+"/bookit?l="+location+"&t="+title+"' onload=\"$('#tidbit iframe').slideDown(500);\">Enable iFrames.</iframe>\
            <style type='text/css'>\
                #tidbit_veil { display: none; position: fixed; width: 100%; height: 100%; top: 0; left: 0; background-color: rgba(255,255,255,.25); cursor: pointer; z-index: 900; }\
                #tidbit_veil p { color: black; font: normal normal bold 20px/20px Helvetica, sans-serif; position: absolute; top: 50%; left: 50%; width: 10em; margin: -10px auto 0 -5em; text-align: center; }\
                #tidbit iframe { display: none; position: fixed; top: 5%; left: 10%; width: 400px; height: 250px; z-index: 999; border: 10px solid rgba(0,0,0,.5); margin: -5px 0 0 -5px; }\
            </style>\
        </div>");
    $("#tidbit_veil").fadeIn(750);
} else {
    $("#tidbit_veil").fadeOut(750);
    $("#tidbit iframe").slideUp(500);
    setTimeout("$('#tidbit').remove()", 750);
}
    $("#tidbit_veil").click(function(event){
    $("#tidbit_veil").fadeOut(750);
    $("#tidbit iframe").slideUp(500);
    setTimeout("$('#tidbit').remove()", 750);
});

