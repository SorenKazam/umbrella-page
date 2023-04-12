const logo = document.getElementById("logo")
const audio = new Audio("assets/audio/ResidentEvil2EscapeAlarm.mp3");
let count = 3

if (logo) {
    console.log("error")
} else {
    console.log("logo")
}

if (audio) {
    console.log("audio checked")
} else {
    console.log("audio error")
}

console.log(">Starting all system protocols...")
console.log(">Starting all security systems...")

function login() {
    count--;
    
    if (count <= 0) {
        document.getElementById("login-frm").style.display = "none";
        document.getElementById("errorMessage").style.display = "flex";
        document.body.style.backgroundColor = "red";
        alert("Maximum number of attempts exceeded!");
        audio.play();
        var angle = 0;
        setInterval(function(){
            angle+=3;
            document.getElementById('logo-img').style.transform = 'rotate('+angle+'deg)';
        },50);

    } else {
        window.alert(`Wrong credentials, ${count} attempts left.`)
    }
}