var s = "Hii, I'm Vinay.This is my page, you can know about me here. You can contact me for any queries. Everything about my favourites have been listed here. Take a look of my website.";
var audio = new Audio('music/song.mp3');
var audio_play = 0;
var n = s.length;
var count = 0;
var x = document.getElementById('test');
function add(){
    x.innerHTML = s.slice(0,count);
    count++;
    if(count == n+1)
        clearInterval(t);
}

var t = setInterval(add , 75);

function song(){
    if(audio_play == 0){
     audio.play();
     audio_play++;
    }
    else
    audio.pause();
}

