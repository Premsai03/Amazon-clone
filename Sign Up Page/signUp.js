const passInput = document.querySelector('.password');
const confirmPassInput = document.querySelector('.confirm-password');
const passText = document.querySelector('.pass-text');
const passText1 = document.querySelector('.pass-text1');

function validatePassword() {
    const password = passInput.value;
    const confirmPassword = document.querySelector('.confirm-password').value;

    if (password.length < 6) {
        passText.innerHTML = 'Must be at least 6 characters.';
        passText.style.color = 'red';
        passInput.style.borderColor = 'red';
    } else {
        passText.innerHTML = '';
        passInput.style.borderColor = '';
    }

    if (password !== confirmPassword) {
        passText1.innerHTML = 'Passwords do not match.';
        passText1.style.color = 'red';
        passInput.style.borderColor = 'red';
        confirmPassInput.style.borderColor = 'red';
    } else {
        passText1.innerHTML = '';
        confirmPassInput.style.borderColor = '';
    }

    if (password.length < 6 || password !== confirmPassword) {
        return false;
    }

    return true;
}
