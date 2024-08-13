// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get references to the login form and error message div
const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the form from submitting the default way

    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Sign in with Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed in
            const user = userCredential.user;
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessageText = error.message;
            errorMessage.textContent = `Error: ${errorMessageText}`;
        });
});

