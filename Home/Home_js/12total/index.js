let total = document.getElementById("payment")
total.addEventListener("click", paymentBill)

function paymentBill() {
    let amount = document.getElementById("amount").value;
    let price = document.getElementById("price").value;
    let sum = amount * price;
    document.getElementById("total").value = sum
}