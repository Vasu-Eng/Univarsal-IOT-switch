
var btn_status = 0;

$("button").on("click", function () {
    const Http = new XMLHttpRequest();
    var url = 'https://api.thingspeak.com/update?api_key=5KWJ1LQXGBSKU5O6&field1=s';
playSound();
    if (btn_status == 0) {
        this.innerHTML = "IOT- 'ON' ";
        $("button").addClass("pressed");
        btn_status = 1;
        url = url + "1";
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
        }
    }
    else if (btn_status == 1) {
        this.innerHTML = "IOT-'OFF'";
        $("button").removeClass("pressed");
        btn_status = 0;
        url = url + "0";
        Http.open("GET", url);
        Http.send();
        Http.onreadystatechange = (e) => {
            console.log(Http.responseText);
        }
    }
});
function playSound(){
var clickAudio = new Audio("music/switch-2.mp3");
clickAudio.play();
}
