// Main functions

function showPassword () {
    
    const input = document.querySelector('#password');
    const checkbox = document.querySelector('#showpass');
    
    if (checkbox.checked) {
        input.type = 'text';
    } else {
        input.type = 'password';
    }
}

const form = document.querySelector('form'),
inputMail = document.querySelector('#email'),
inputMailHelp = document.querySelector('#emailHelp'),
inputPass = document.querySelector('#password');

inputMail.addEventListener('focusout', () => {
    notValue(inputMail);
    if(!validEmail(inputMail.value)) {
        inputMail.style.border = '2px solid #dc3545';
        inputMailHelp.textContent = "We'll never share your email with anyone else."
    } else {
        inputMailHelp.textContent = ''
    }
});

inputPass.addEventListener('focusout', () => {
    notValue(inputPass);
    if(validPass(inputPass.value)) {
        inputPass.style.border = '2px solid #dc3545';
    }
});

function validEmail(email) {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

function validPass (password) {
    return password.match(/[^\w\s\-+_$,.]/gi);
}

function notValue(element) {
    if (element.value === '') {
        element.style.border = '2px solid #dc3545';
    } else {
        element.style = '';
    }
}