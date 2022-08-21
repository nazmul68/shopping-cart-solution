/*
1. update quantity function
2. get previous value from phone field
3. convert string to number 
4. if else condition 
5. set newPhoneField value to phoneField value 
*/
/* plus btn & minus button Common Function (quantity UPnDown) */
function updatePhoneQuantity(inIncrease){
    const phoneField = document.getElementById('phone-field');
    const previousPhoneFieldValue = parseInt(phoneField.value);

    let newPhoneFieldValue; //new phone quantity
    if(inIncrease){
        newPhoneFieldValue = previousPhoneFieldValue + 1;
    }
    else if(previousPhoneFieldValue === 0){
        return;
    }
    else{
        newPhoneFieldValue = previousPhoneFieldValue - 1;
    }
    phoneField.value = newPhoneFieldValue;
    return newPhoneFieldValue;
}

/* Total Phone price calculate common Function */
function updatePhonePriceTotal(newPhoneFieldValue){
 if(newPhoneFieldValue >= 0){
    const newPhonePriceTotal = newPhoneFieldValue * 1219;
    const previousPriceElement = document.getElementById('phone-price');
    previousPriceElement.innerText = newPhonePriceTotal;
 }
 else{
    alert('Please Increase Quantity');
 }
}

/* calling updatePhoneQuantity Function with click on btn-phone-plus button */
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    /* must need to call the function for getting return value */
    const newPhoneFieldValue = updatePhoneQuantity(true); 
    updatePhonePriceTotal(newPhoneFieldValue);

    const subtotal = calculateSubTotalPrice();
    setTextElementValueById('sub-total',subtotal);

    const taxAmount = calculateTax();
    setTextElementValueById('tax',taxAmount);

    const totalPrice = calculateTotalPrice();
    setTextElementValueById('total-price',totalPrice);
   
})


/* calling updatePhoneQuantity Function with click on btn-phone-minus button */
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    /* must need to call the function for getting return value */
    const newPhoneFieldValue = updatePhoneQuantity(false);
    updatePhonePriceTotal(newPhoneFieldValue); 

    const subTotalPrice = calculateSubTotalPrice(); // this kind of case must take a variable for call a function & when set element we call variable name// 
    setTextElementValueById('sub-total',subTotalPrice);

    const taxAmount = calculateTax();
    setTextElementValueById('tax',taxAmount);

    const totalPrice = calculateTotalPrice();
    setTextElementValueById('total-price',totalPrice);

                             
})

/* Remove phone cart item when click on X button */
document.getElementById('remove-phone').addEventListener('click',function(){
    const removePhoneCart = document.querySelector('.phone-cart-item');
    removePhoneCart.style.display = 'none';
})




/* particularly written Function which is not good practice */
// // phone field btn phone plus function
// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//     const phoneField = document.getElementById('phone-field');
//     const previousPhoneFieldValue = parseInt(phoneField.value);
//     const newPhoneFieldValue = previousPhoneFieldValue + 1;
//     phoneField.value = newPhoneFieldValue;
// })


// // phone field btn phone minus function
// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     const phoneField = document.getElementById('phone-field');
//     const previousPhoneFieldValue = parseInt(phoneField.value);
//     if(previousPhoneFieldValue === 0){
//         return;
//     }
//     const newPhoneFieldValue = previousPhoneFieldValue - 1;
//     phoneField.value = newPhoneFieldValue;
// })
