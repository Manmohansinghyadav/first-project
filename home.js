function toggleSettings() {
    const settingsContainer = document.querySelector('.settings-container');
    settingsContainer.style.display = (settingsContainer.style.display === 'block') ? 'none' : 'block';
}

function changeUsername() {
    alert('Change Username logic goes here');
    toggleSettings();
}

function changeEmail() {
    alert('Change Email logic goes here');
    toggleSettings();
}

function logout() {
    // Redirect to the login page
    window.location.href = 'index.html';
}

function help() {
    alert('Help option goes here');
    toggleSettings();
}

document.addEventListener('DOMContentLoaded', function () {
    const companyName = document.querySelector('.company-name');
    const loanFormContainer = document.getElementById('loanFormContainer');

    companyName.addEventListener('click', function () {
        // Reload the page
        location.reload();
    });

    function showLoanForm() {
        const loanFormContainer = document.getElementById('loanFormContainer');
        loanFormContainer.style.display = 'block';
        
         // Scroll to the loan form container
         loanFormContainer.scrollIntoView({ behavior: 'smooth' });
    }

    function submitLoanForm(event) {
        event.preventDefault();

        // Get values from the form
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const email = document.getElementById('email').value;
        const loanAmount = document.getElementById('loanAmount').value;
        const installmentDuration = document.getElementById('installmentDuration').value;

        // Perform calculations or logic for the loan
        const totalLoanAmount = calculateTotalLoan(loanAmount, installmentDuration);

        // Display the loan amount in the modal
        displayLoanAmount(totalLoanAmount);

        // Show the modal
        showLoanModal();
    }

    function calculateTotalLoan(amount, duration) {
        // Example: Simple calculation, you may adjust this based on your logic
        const interestRate = 0.05; // 5%
        const monthlyInterest = amount * interestRate / 12;
        const totalAmount = Number(amount) + (monthlyInterest * duration);
        return totalAmount.toFixed(2);
    }

    function displayLoanAmount(amount) {
        const loanAmountDisplay = document.getElementById('loanAmountDisplay');
        loanAmountDisplay.textContent = `$${amount}`;
    }
    function performSearch() {
        // Get the search input value
        const searchInput = document.getElementById('searchInput').value;
    
        // Perform actions based on the search term (customize as needed)
        if (searchInput.trim() !== '') {
            alert('Performing search for: ' + searchInput);
            // You can add more logic here, such as filtering content or navigating to a search results page
        } else {
            alert('Please enter a search term.');
        }
    }
    function handleSecondButtonClick() {
        // Add your logic for the second button click
        alert('Second button clicked. You can customize this alert or add more logic.');
    }
    

    function showLoanModal() {
        const loanModal = document.getElementById('loanModal');
        loanModal.style.display = 'block';
    }

    function closeLoanModal() {
        const loanModal = document.getElementById('loanModal');
        loanModal.style.display = 'none';
    }

    function redirectToGetLoanPage() {
        // Redirect to the Get Loan page
        window.location.href = 'get_loan.html';
    }
});
