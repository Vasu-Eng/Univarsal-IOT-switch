
const Http = new XMLHttpRequest();
const url='https://api.thingspeak.com/update?api_key=5KWJ1LQXGBSKU5O6&field1=1';
var clickAudio = new Audio("music/switch-2.mp3");
var btn_status = 0;

$("button").on("click",function(){
    clickAudio.play();
if(btn_status == 0){
 this.innerHTML ="IOT- 'ON' ";
 $("button").addClass("pressed");
 url = url + "1";
 Http.open("GET", url);
 Http.send();
 Http.onreadystatechange = (e) => {
   alert(Http.responseText);
 }
 btn_status = 1;
}
else if( btn_status=== 1){
    this.innerHTML ="IOT-'OFF'";
    $("button").removeClass("pressed");
 url = url + "1";
 Http.open("GET", url);
 Http.send();
 Http.onreadystatechange = (e) => {
   alert(Http.responseText);
    btn_status =0;
}
}
});
