// Function to validate the phone number
function validatePhoneNumber() {
    const phoneInput = document.getElementById('phoneInput');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Remove spaces and dashes from the phone number
    const cleanedPhoneNumber = cleanPhoneNumber(phoneInput.value);

    // Check if the phone number has exactly 10 digits and all are numbers
    if (isPhoneNumberValid(cleanedPhoneNumber)) {
        // If valid, hide the error message, show the success message, and clear the input field
        errorMessage.textContent = '';
        successMessage.textContent = 'Phone number is valid.';
        clearField(phoneInput, successMessage);
    } else {
        // If not valid, show an error message and clear the input field
        successMessage.textContent = '';
        errorMessage.textContent = 'Invalid phone number. It must have 10 digits.';
        clearField(phoneInput, errorMessage);
    }
}

// Function to clean the phone number from spaces and dashes
function cleanPhoneNumber(number) {
    return number.replace(/\s|-/g, '');
}

// Function to check if a phone number has exactly 10 digits and all are numbers
function isPhoneNumberValid(number) {
    const length = number.length;

    if (length === 10 && !isNaN(Number(number))) {
        return true;
    }

    return false;
}

// Function to clear the field after showing the error or success message
function clearField(element, messageElement) {
    setTimeout(() => {
        element.value = '';
        messageElement.textContent = '';
    }, 2000);
}

// Add blur event to validate the number when losing focus
const phoneInput = document.getElementById('phoneInput');
phoneInput.addEventListener('blur', validatePhoneNumber);
