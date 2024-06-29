document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === '' || password === '') {
        displayError('Both fields are required.');
        return;
    }

    // Simulate login (In a real application, you'd send a request to a server)
    if (username === 'admin' && password === 'password') {
        window.location.href = 'index.html';
        alert('Login successful!');
        // Redirect to another page or perform any other desired action
    } else {
        displayError('Invalid username or password.');
    }
});

function displayError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
}
document.getElementById('faqButton').addEventListener('click', function() {
    window.location.href = 'faq.html';
});

document.getElementById('servicesButton').addEventListener('click', function() {
    window.location.href = 'services.html';
});

document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
});

document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = 'about.html';
});
