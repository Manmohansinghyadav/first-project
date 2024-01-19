function createAccount() {
    const username = document.getElementById('username').value;
    const surname = document.getElementById('surname').value;
    const dob = document.getElementById('dob').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Perform validation (e.g., check if passwords match, etc.)

    // Assuming validation passes, you can proceed with account creation logic
    const confirmation = confirm('Account created successfully! Do you want to go to the login page?');

    // Redirect to the login page if the user clicks OK
    if (confirmation) {
        window.location.href = 'index.html';
    }
}
