document.getElementById('login-btn').addEventListener('click', function () {
    const getEmail = document.getElementById('email-id');
    const email = getEmail.value;
    const password = document.getElementById('password');
    const loginPassword = password.value;
    if (email === 'prince@gmail.com' && loginPassword === '123456') {
        window.location.href = 'dashboard.html';
    } else {
        // const hidden = document.getElementById('hide');
        // hidden.removeAttribute('disabled', true);
        alert('inviled User');

    }
})