//selectors
let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timerRef = document.querySelector('.watch-container');;
let int = null;
const lapContainer = document.createElement('div');
document.body.appendChild(lapContainer);

//event listeners
document.addEventListener('keydown', (e) => {
    if (e.key === 's' || e.key === 'S') {
        document.getElementById('startTimer').click();
    } else if (e.key === 'p' || e.key === 'P') {
        document.getElementById('pauseTimer').click();
    } else if (e.key === 'r' || e.key === 'R') {
        document.getElementById('resetTimer').click();
    }
});
//functions
document.getElementById('startTimer').addEventListener('click', ()=>{
    if(int !== null){
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById('pauseTimer').addEventListener('click', ()=>{
    clearInterval(int);
});

document.getElementById('resetTimer').addEventListener('click', ()=>{
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timerRef.innerHTML = '00:00:00:000';
});

document.getElementById('lapTimer').addEventListener('click'), () => {
    const lapTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}:${milliseconds < 10 ? '00' + milliseconds : milliseconds < 100 ? '0' + milliseconds : milliseconds}`;
    const lapDiv = document.createElement('div');
    lapDiv.innerText = lapTime;
    lapContainer.appendChild(lapDiv);
}

function displayTimer(){
    milliseconds+=10;

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerRef.innerHTML = ` ${h}:${m}:${s}:${ms}`;
}