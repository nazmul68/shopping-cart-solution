/* plus btn & minus button Common Function (quantity UPnDown) */
function updateCaseQuantity(inIncrease){
    const caseField = document.getElementById('case-feild');
    const previousCaseFieldValue = parseInt(caseField.value);

    let newCaseFieldValue;
    if(inIncrease){
        newCaseFieldValue = previousCaseFieldValue + 1;
    }
    else if(previousCaseFieldValue === 0){
        return;
    }
    else{
        newCaseFieldValue = previousCaseFieldValue - 1;
    }
    caseField.value = newCaseFieldValue;
    return newCaseFieldValue;
}

/* Total case price calculate common Function */
    function updateCasePriceTotal(newCaseFieldValue){
    const newCasePriceTotal = newCaseFieldValue * 59;
    
    if(newCaseFieldValue >= 0){
        const previousCasePriceElement = document.getElementById('case-price');
        previousCasePriceElement.innerText = newCasePriceTotal;
    }
    else{
        alert('Please Increase Quantity');
    }
}

/* calling updatePhoneQuantity & updateCasePriceTotal Function with click on btn-phone-plus button */
    document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseFieldValue = updateCaseQuantity(true);
    updateCasePriceTotal(newCaseFieldValue);

    const subtotal = calculateSubTotalPrice();
    setTextElementValueById('sub-total',subtotal);

    const taxAmount = calculateTax();
    setTextElementValueById('tax',taxAmount);

    const totalPrice = calculateTotalPrice();
    setTextElementValueById('total-price',totalPrice);
})

/* calling updatePhoneQuantity & updateCasePriceTotal Function with click on btn-phone-minus button */
    document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseFieldValue = updateCaseQuantity(false);
    updateCasePriceTotal(newCaseFieldValue);

    const subtotal = calculateSubTotalPrice();
    setTextElementValueById('sub-total',subtotal);

    const taxAmount = calculateTax();
    setTextElementValueById('tax',taxAmount);

    const totalPrice = calculateTotalPrice();
    setTextElementValueById('total-price',totalPrice);
})

/* Remove phone cart item when click on X button */
document.getElementById('remove-case').addEventListener('click',function(){
    const removePhoneCart = document.querySelector('.case-cart-item');
    removePhoneCart.style.display = 'none';
})
