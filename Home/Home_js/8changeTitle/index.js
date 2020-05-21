let changeTitle = document.getElementById("change-title")
changeTitle.addEventListener('click', updateTime)

function showTime() {
    document.title = new Date().toLocaleString()
}

function updateTime() {
    setInterval(showTime, 1000)
}