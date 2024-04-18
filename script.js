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