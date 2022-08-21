
function calculateSubTotalPrice(){
    const phonePriceTotalElement = document.getElementById('phone-price');
    const phonePriceTotal = parseInt(phonePriceTotalElement.innerText);
    const casePriceTotalElement = document.getElementById('case-price');
    const casePriceTotal = parseInt(casePriceTotalElement.innerText);
    const currentSubTotal = phonePriceTotal + casePriceTotal;
    return currentSubTotal;
}

function calculateTax(){
    const currentSubTotal = calculateSubTotalPrice();
    const taxAmountStr = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountStr);
    return taxAmount;  
}

function calculateTotalPrice(){
    const currentSubTotal = calculateSubTotalPrice();
    const taxAmount = calculateTax();
    const totalPriceStr = (currentSubTotal + taxAmount).toFixed(2);
    const totalPrice = parseFloat(totalPriceStr);
    return totalPrice;
}


function setTextElementValueById(elementId,newValue){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = newValue;
}




