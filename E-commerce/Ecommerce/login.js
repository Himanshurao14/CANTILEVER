document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Example validation logic for login
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedEmail && password === storedPassword) {
        alert('Login successful!');
        // Redirect to homepage or other page
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Store email and password in local storage (you might use a database instead)
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Sign up successful! Please log in.');
});
