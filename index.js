const Http = new XMLHttpRequest();
var btn_status = 0;
var res_1;
var res_0;
$("button").on("click", function () {
    if (btn_status == 0) {
        btn_status = 1;
        Http.open("GET", "https://api.thingspeak.com/update?api_key=5KWJ1LQXGBSKU5O6&field1=1");
        Http.send();
        Http.onreadystatechange = (e) => {
         res_1 = Http.responseText;
         console.log( res_1);
        }
        if( res_1 !== "0"){
            this.innerHTML = "STATUS- 'ON' ";
            $("button").addClass("pressed");
            playSound();
        }
    }
    else if (btn_status == 1) {
        $("button").removeClass("pressed");
        btn_status = 0;
        Http.open("GET", "https://api.thingspeak.com/update?api_key=5KWJ1LQXGBSKU5O6&field1=0");
        Http.send();
        Http.onreadystatechange = (e) => {
            res_0 = Http.responseText;
            console.log( res_0);
        }
        if( res_0 !== "0"){
            this.innerHTML = "STATUS-'OFF'";
            $("button").removeClass("pressed");
            playSound();
        }
    }
});
function playSound(){
var clickAudio = new Audio("music/switch-2.mp3");
clickAudio.play();
}
