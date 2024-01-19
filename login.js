function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordSpan = document.querySelector('.show-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordSpan.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        showPasswordSpan.textContent = 'Show';
    }
}

function submitLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation and login logic
    alert('Login logic goes here'); // Replace with actual login logic
}

function submitLoginForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform validation and login logic

    // Assuming the login is successful
    alert('Login successful! Redirecting to the home page...');

    // Redirect to the home page
    window.location.href = 'home.html';
}
