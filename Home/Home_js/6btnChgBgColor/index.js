let btnClickBlue = document.getElementById("btn-blue")
btnClickBlue.addEventListener("click", btnOnclick)

function btnOnclick() {
    document.bgColor = "blue";
}

let btnClickRed = document.getElementById("btn-red")
btnClickRed.addEventListener("click", btnOnclick2)

function btnOnclick2() {
    document.bgColor = "red";
}

// let btnClickBrown  = document.getElementById("btn-brown")
// btnClickBrown.addEventListener("click", btnOnclick3)

// function btnOnclick3() {
//     document.body.style.background = "brown";
// }

// let btnClickLavender  = document.getElementById("btn-lavender")
// btnClickLavender.addEventListener("click", btnOnclick4)

// function btnOnclick4() {
//     document.body.style.background = "lavender";
// }