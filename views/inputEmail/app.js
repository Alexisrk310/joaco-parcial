function validateEmail() {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.getElementById('successMessage');

    // Remove leading and trailing whitespaces
    const email = emailInput.value.trim();

    // Check if the email address is valid
    if (isEmailValid(email)) {
        // If valid, hide the error message, show the success message, and clear the input field
        errorMessage.textContent = '';
        successMessage.textContent = 'El correo es valido.';
        clearField(emailInput, successMessage);
    } else {
        // If not valid, show an error message and clear the input field
        successMessage.textContent = '';
        errorMessage.textContent = 'Correo invalido';
        clearField(emailInput, errorMessage);
    }
}

function isEmailValid(email) {
    const parts = email.split('@');

    if (parts.length !== 2) {
        return false;
    }

    const [localPart, domain] = parts;

    if (localPart.length === 0 || domain.length === 0) {
        return false;
    }

    if (localPart[0] === '.' || localPart[localPart.length - 1] === '.') {
        return false;
    }

    if (domain[0] === '-' || domain[domain.length - 1] === '-') {
        return false;
    }

    if (domain.indexOf('.') === -1) {
        return false;
    }

    return true;
}

function clearField(element, messageElement) {
    setTimeout(() => {
        element.value = '';
        messageElement.textContent = '';
    }, 2000);
}
