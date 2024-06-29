document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'user' && password === 'password') {
        window.location.href = 'homepage.html';
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password';
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (newPassword === confirmPassword) {
        document.getElementById('registerMessage').textContent = 'Registration successful!';
        // Handle registration logic here
    } else {
        document.getElementById('registerMessage').textContent = 'Passwords do not match';
    }
});
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});

document.getElementById('closeRegister').addEventListener('click', function() {
    document.getElementById('registerModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('registerModal')) {
        document.getElementById('registerModal').style.display = 'none';
    }
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'user' && password === 'password') {
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword === confirmPassword) {
        alert('Registration successful!');
        // Handle registration logic here
    } else {
        alert('Passwords do not match');
    }
});
