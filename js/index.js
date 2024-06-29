document.addEventListener('DOMContentLoaded', function() {
    // Simulating user login status
    const isLoggedIn = false; // Change this to true if the user is logged in

    const userStatusDiv = document.getElementById('userStatus');
    if (isLoggedIn) {
        userStatusDiv.innerHTML = `
            <p>You are logged in as <strong>Username</strong>.</p>
            <button onclick="logout()">Logout</button>
        `;
    } else {
        userStatusDiv.innerHTML = `
            <p>Welcome! <a href="login.html">Login</a> or <a href="register.html">Register</a></p>
        `;
    }
});

function logout() {
    // Logic to log out the user
    alert('Logging out...');
    // Redirect to login page or perform other actions
    window.location.href = 'login.html';
}
