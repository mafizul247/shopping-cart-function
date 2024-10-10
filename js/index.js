


document.getElementById('phone-plus').addEventListener('click', () => {
    const newQuantity = getInputQuantity('phone-quantity', true);

    const phoneTotal = setElementTotal('phone-total', 1219, newQuantity);

    const caseString = document.getElementById('case-total').innerText;
    const caseTotal = parseFloat(caseString);

    setTotalPrice(phoneTotal, caseTotal);
})

document.getElementById('phone-minus').addEventListener('click', () => {
    const newQuantity = getInputQuantity('phone-quantity', false);

    const phoneTotal = setElementTotal('phone-total', 1219, newQuantity);

    const caseString = document.getElementById('case-total').innerText;
    const caseTotal = parseFloat(caseString);

    setTotalPrice(phoneTotal, caseTotal);
})

document.getElementById('case-plus').addEventListener('click', function() {
    const newQuantity = getInputQuantity('case-quantity', true);

    const caseTotal = setElementTotal('case-total', 59, newQuantity);

    const phoneString = document.getElementById('phone-total').innerText;
    const phoneTotal = parseFloat(phoneString);

    setTotalPrice(phoneTotal, caseTotal);
})

document.getElementById('case-minus').addEventListener('click', function() {
    const newQuantity = getInputQuantity('case-quantity', false);
    
    const caseTotal = setElementTotal('case-total', 59, newQuantity);

    const phoneString = document.getElementById('phone-total').innerText;
    const phoneTotal = parseFloat(phoneString);

    setTotalPrice(phoneTotal, caseTotal);
})