      document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Define your correct username and password
    const correctUsername = 'BCA(2nd y)HS-CIT';
    const correctPassword = 'z11pak05ee01xLd';
    const targetWebsite = "content.html"; // Replace with your desired website URL

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        errorMessage.textContent = ''; // Clear any previous error message
        window.location.href = targetWebsite; // Redirect to the target website
    } else {
        errorMessage.textContent = 'unable to enter website,please  fill details carefully.';
    }
});
