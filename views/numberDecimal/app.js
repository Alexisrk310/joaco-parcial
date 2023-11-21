document.addEventListener('DOMContentLoaded', function () {
    const decimalInput = document.getElementById('decimalInput');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');
    const validateButton = document.getElementById('validateButton');

    validateButton.addEventListener('click', function () {
        validateDecimal(decimalInput.value.trim(), errorMessage, successMessage);
    });
});

function validateDecimal(decimal, errorMessage, successMessage) {
    // Check if the decimal number is valid
    if (isDecimalValid(decimal)) {
        // If valid, hide the error message, show the success message, and clear the input field
        errorMessage.textContent = '';
        successMessage.textContent = 'Decimal number is valid.';
        clearField(decimalInput, successMessage);
    } else {
        // If not valid, show an error message and clear the input field
        successMessage.textContent = '';
        errorMessage.textContent = 'Invalid decimal number.';
        clearField(decimalInput, errorMessage);
    }
}

function isDecimalValid(decimal) {
    // Use parseFloat to check if the input can be parsed as a valid decimal number
    return !isNaN(parseFloat(decimal));
}

function clearField(element, messageElement) {
    setTimeout(() => {
        element.value = '';
        messageElement.textContent = '';
    }, 2000);
}
