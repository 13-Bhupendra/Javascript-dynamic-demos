let [seconds , minute , hour] = [ 0 , 0 , 0];
let timer = null;

let showTime = document.getElementById("showTime");
const stop_btn = document.getElementById("stop_btn");
const play_btn = document.getElementById("play_btn");
const reset_btn = document.getElementById("reset_btn");


play_btn.addEventListener('click' , function () {
    startWatch();
});

stop_btn.addEventListener('click' , function () {
    stop();
});

reset_btn.addEventListener('click' , function () {
    resetWatch();
});



function stopWatch(){

    seconds++;
    if(seconds ==  60)
    {
        seconds = 0;
        minute++;
        if(minute == 60 )
        {
            minute = 0 ;
            hour++;
        }
    }

    let h = hour < 10 ? "0" + hour : hour;
    let m = hour < 10 ? "0" + minute : minute;
    let s = hour < 10 ? "0" + seconds : seconds;

    showTime.innerHTML = h + ":" +  m + ":" + s;
}


function startWatch(){

        if (timer !== null) {
            clearInterval(timer) 
        }
        timer = setInterval(stopWatch, 1000);  

}


function stop(){

    clearInterval(timer);

}


function resetWatch(){

    clearInterval(timer);
    [seconds , minute , hour] = [ 0 , 0 , 0];
    showTime.innerHTML = "00:00:00";
}

