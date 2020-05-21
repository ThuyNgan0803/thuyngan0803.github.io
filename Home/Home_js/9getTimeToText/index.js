function updateTime() {
    let showTime = document.getElementById("showTime")
    showTime.innerHTML = new Date().toLocaleString()
}
setInterval(updateTime, 1000)