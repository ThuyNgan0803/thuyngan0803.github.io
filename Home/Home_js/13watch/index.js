let clickStatus = document.getElementById("status")
clickStatus.addEventListener('click', changeStatus)
let status = "start"

function changeStatus() {
    if (status == "start") {
        start()
        clickStatus.innerHTML = "Stop"
        clickStatus.style.backgroundColor = "red"
        clickReset.style.backgroundColor = "#F7F7F7"
        status = "stop"
    } else if (status == "stop") {
        stop()
        clickStatus.innerHTML = "Run";
        clickStatus.style.backgroundColor = "#F7F7F7"
        clickReset.style.backgroundColor = "#F7F7F7"
        status = "start";
    }
}

let hours = document.getElementById("hours").innerHTML
let minutes = document.getElementById("minutes").innerHTML
let seconds = document.getElementById("seconds").innerHTML
let h = Number(hours); // Giờ
let m = Number(minutes); // Phút
let s = Number(seconds); // Giây
let timeout = null; // Timeout

function start() {
    if (s === 60) {
        m += 1;
        s = 0;
    }
    if (m === 60) {
        h += 1;
        m = 0;
    }
    // Stop timer
    if (h == 24) {
        clearTimeout(timeout);
        alert('Error');
        return false;
    }
    //show timer
    if (s < 10) {
        document.getElementById('seconds').innerHTML = "0" + s.toString();
    } else {
        document.getElementById('seconds').innerHTML = s.toString();
    }
    if (m < 10) {
        document.getElementById('minutes').innerHTML = "0" + m.toString();
    } else {
        document.getElementById('minutes').innerHTML = m.toString();
    }
    if (m < 10) {
        document.getElementById('hours').innerHTML = "0" + h.toString();
    } else {
        document.getElementById('hours').innerHTML = h.toString();
    }

    timeout = setTimeout(function() {
        s++;
        start();
    }, 1000);
}

function stop() {
    clearTimeout(timeout);
}

//click reset
let clickReset = document.getElementById("reset")
clickReset.addEventListener('click', resetTime)

function resetTime() {
    clearTime()
    clickReset.style.backgroundColor = "red"
    clickStatus.innerHTML = "Run"
    clickStatus.style.backgroundColor = "#F7F7F7"
}

function clearTime() {
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
}