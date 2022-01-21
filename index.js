
var btn_status = 0;

$("button").on("click",function(){
playAudio();
if(btn_status == 0){
 this.innerHTML ="IOT- 'ON' ";
 $("button").addClass("pressed");
 btn_status = 1;
}
else if( btn_status=== 1){
    this.innerHTML ="IOT-'OFF'";
    $("button").removeClass("pressed");
    btn_status =0;
}
});
function playAudio(){
    var clickAudio = new Audio("music/switch-2.mp3");
    clickAudio.play();
}

