let text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, porro totam et consequuntur commodi adipisci eum aliquam. Atque libero expedita officiis, fugit quia incidunt delectus, nisi, molestiae quis itaque aut!"
    // let text = "Duong Thuy Ngan"
let textP = document.getElementById("textArea")
let showText = document.getElementById("show-text")
showText.addEventListener("click", toggleText)

let status = "less"
let maxLength = 50
let textLess = text.substr(0, maxLength);

function toggleText() {
    if (status == "less") {
        textP.innerHTML = text;
        showText.innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        textP.innerHTML = textLess + "...";
        showText.innerText = "See More";
        status = "less"
    }
}

function showTextM() {
    if (text.length <= maxLength) {
        textP.innerHTML = text;
        showText.style.display = "none"
    } else {
        textP.innerHTML = textLess + "...";
    }
}
showTextM()