function updateProductNumber(product, isIncrease, price) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    //calculate Total
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const total = subTotal + taxAmount;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total').innerText = total;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', true, 1219);

});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', false, 1219);

});
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', true, 59);

});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', false, 59);
})

