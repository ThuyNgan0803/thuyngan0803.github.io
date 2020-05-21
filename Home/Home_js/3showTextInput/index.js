let btnClick = document.getElementById("btn-click")

btnClick.addEventListener("click", btnOnclick)

function btnOnclick() {
    let inputValue = document.getElementById("inputValue").value;
    let value = String(inputValue)
    alert(value);
}