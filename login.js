document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example: Simple hardcoded check (You should replace this with actual authentication logic)
    if (email === 'admin@example.com' && password === 'adminpassword') {
        // Redirect to the admin page
        window.location.href = 'admin.html';
    } else {
        // Handle incorrect credentials
        alert('Invalid login credentials. Please try again.');
    }
});
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the email and password values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Use Firebase Authentication to sign in
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = 'admin.html';
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/wrong-password') {
                alert('Incorrect password. Please try again.');
            } else if (errorCode === 'auth/user-not-found') {
                alert('No user found with this email.');
            } else if (errorCode === 'auth/invalid-email') {
                alert('Invalid email format.');
            } else {
                alert(errorMessage); // Display any other errors
            }
        });
});

