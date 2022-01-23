const Http = new XMLHttpRequest();
var btn_status = 0;
var res = -1;
$("button").on("click", function () {
    if (btn_status == 0) {
        Http.open("GET", "https://api.thingspeak.com/update.json?api_key=5KWJ1LQXGBSKU5O6&field1=1");
        Http.send();
        Http.onreadystatechange = function () {
            if (this.status == 200) {
                res = JSON.parse(this.responseText);
                console.log("switch ON  : ", res.entry_id);
                if (res.entry_id) {
                    $("button").addClass("pressed");
                    $("button").html("STATUS-  ON");
                    playSound();
                    btn_status = 1;
                }
            }
        }
    }
    else if (btn_status == 1) {
        Http.open("GET", "https://api.thingspeak.com/update.json?api_key=5KWJ1LQXGBSKU5O6&field1=0");
        Http.send();
        Http.onreadystatechange = function () {
            if (this.status == 200) {
                res = JSON.parse(this.responseText);
                console.log("switch OFF : ", res.enrty_id);
                if (res.entry_id) {
                    $("button").html("STATUS- OFF");
                    $("button").removeClass("pressed");
                    playSound();
                    btn_status = 0;
                }
            }
        }
    }
});
function playSound() {
    var clickAudio = new Audio("music/switch-2.mp3");
    clickAudio.play();
}
