
const getInputQuantity = (inputId, isIncrease) => {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputQuantity = parseInt(inputString);

    let newQuantity;
    if (isIncrease) {
        newQuantity = inputQuantity + 1;
    } else {
        if(inputQuantity > 0) {
            newQuantity = inputQuantity - 1;
        }
        else {
            return newQuantity = 0;;
        }
    }
    inputField.value = newQuantity;
    return newQuantity;
}


function setElementTotal(elementId, price, quantity) {
    const totalElement = document.getElementById(elementId);
    const totalString = totalElement.innerText;
    const phoneTotal = parseFloat(totalString);
    const total = quantity * price;
    totalElement.innerText = total;
    return total;
}

const setTotalPrice = (phoneTotal, caseTotal) => {
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal * 0.10;
    const totalPrice = subTotal + taxAmount;
    document.getElementById('sub-total').innerText = subTotal.toFixed(2);
    document.getElementById('tax-amount').innerText = parseFloat(taxAmount).toFixed(2);
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
}