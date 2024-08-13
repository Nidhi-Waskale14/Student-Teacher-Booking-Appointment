// Firebase configuration
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
const auth = firebase.auth();
const db = firebase.firestore();

// DOM elements
const mainContent = document.getElementById('mainContent');
const homeLink = document.getElementById('homeLink');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

// Navigation event listeners
homeLink.addEventListener('click', showHome);
loginLink.addEventListener('click', showLogin);
registerLink.addEventListener('click', showRegister);

// Function to show home page
function showHome() {
    mainContent.innerHTML = '<h2>Welcome to Student-Teacher Booking Appointment</h2>';
}

// Function to show login form
function showLogin() {
    mainContent.innerHTML = `
        <h2>Login</h2>
        <form id="loginForm">
            <input type="email" id="loginEmail" placeholder="Email" required>
            <input type="password" id="loginPassword" placeholder="Password" required>
            <button type="submit">Login</button>
        </form>
        <div id="loginError" style="color: red;"></div>
    `;
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
}

// Function to show registration form
function showRegister() {
    mainContent.innerHTML = `
        <h2>Register</h2>
        <form id="registerForm">
            <input type="text" id="registerName" placeholder="Full Name" required>
            <input type="email" id="registerEmail" placeholder="Email" required>
            <input type="password" id="registerPassword" placeholder="Password" required>
            <select id="registerRole">
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
            </select>
            <button type="submit">Register</button>
        </form>
        <div id="registerError" style="color: red;"></div>
    `;
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
}

// Function to handle login
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const loginError = document.getElementById('loginError');

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('Logged in:', userCredential.user);
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        })
        .catch((error) => {
            console.error('Login error:', error);
            loginError.textContent = `Error: ${error.message}`;
        });
}

// Function to handle registration
function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const role = document.getElementById('registerRole').value;
    const registerError = document.getElementById('registerError');

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                role: role
            });
        })
        .then(() => {
            console.log('User registered and profile created');
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page
        })
        .catch((error) => {
            console.error('Registration error:', error);
            registerError.textContent = `Error: ${error.message}`;
        });
}

// Initialize the app
showHome();
