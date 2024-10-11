const showPasswordCheckbox = document.querySelector('#showPassword');
const passwordField = document.querySelector('.senha');
const passwordField2 = document.querySelector('.senha2')

showPasswordCheckbox.addEventListener('change', function() {
    // Alterna entre mostrar e ocultar a senha
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    const type2 = passwordField2.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField2.setAttribute('type', type);
});