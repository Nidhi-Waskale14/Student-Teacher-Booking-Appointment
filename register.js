document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const studentName = document.getElementById('studentName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Simple validation to check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Simulate storing registration data in localStorage (for demo purposes)
    const studentData = {
        name: studentName,
        email: email,
        password: password
    };

    localStorage.setItem('student', JSON.stringify(studentData));
    alert('Registration successful!');

    // Redirect to login1.html after successful registration
    window.location.href = 'login1.html';
});
