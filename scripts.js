let Hr = document.querySelector('.Hr');
let Min = document.querySelector('.Min');
let Sec = document.querySelector('.Sec');
let MilSec = document.querySelector('.milesecond');
let interval; 

document.getElementsByClassName('start')[0].onclick = function() {
    if (interval) {
        clearInterval(interval);
    }
    let HrVal = parseInt(Hr.innerText);
    let MinVal = parseInt(Min.innerText);
    let SecVal = parseInt(Sec.innerText);
    let MilSecVal = parseInt(MilSec.innerText);
    let time = HrVal * 3600 * 1000 + MinVal * 60 * 1000 + SecVal * 1000 + MilSecVal;

    interval = setInterval(() => {
        time += 1; 
        Hr.innerHTML = String(Math.floor(time / (3600 * 1000)) % 24).padStart(2, '0');
        Min.innerHTML = String(Math.floor(time / (60 * 1000)) % 60).padStart(2, '0');
        Sec.innerHTML = String(Math.floor(time / 1000) % 60).padStart(2, '0');
        MilSec.innerHTML = String(time % 1000).padStart(3, '0');
    }, 1);
};

document.querySelector('.stop').onclick = function() {
    if (interval) {
        clearInterval(interval);
    }
};

document.querySelector('.restart').onclick = function() {
    if (interval) {
        clearInterval(interval);
    }
    Hr.innerHTML = "00";
    Min.innerHTML = "00";
    Sec.innerHTML = "00";
    MilSec.innerHTML = "000";
}
