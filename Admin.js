document.addEventListener('DOMContentLoaded', function() {
    const addTeacherForm = document.getElementById('addTeacherForm');
    const updateTeacherForm = document.getElementById('updateTeacherForm');
    const deleteTeacherButton = document.getElementById('deleteTeacherButton');
    const studentRegistrationsDiv = document.getElementById('studentRegistrations');

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
    const db = firebase.firestore();

    // Add Teacher
    addTeacherForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('teacherName').value;
        const department = document.getElementById('teacherDept').value;
        const subject = document.getElementById('teacherSubject').value;

        db.collection('teachers').add({
            name: name,
            department: department,
            subject: subject
        }).then(() => {
            alert('Teacher added successfully');
            addTeacherForm.reset();
        }).catch((error) => {
            console.error('Error adding teacher: ', error);
        });
    });

    // Update Teacher
    updateTeacherForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const teacherId = document.getElementById('updateTeacherId').value;
        const name = document.getElementById('updateTeacherName').value;
        const department = document.getElementById('updateTeacherDept').value;
        const subject = document.getElementById('updateTeacherSubject').value;

        db.collection('teachers').doc(teacherId).update({
            name: name,
            department: department,
            subject: subject
        }).then(() => {
            alert('Teacher updated successfully');
            updateTeacherForm.reset();
        }).catch((error) => {
            console.error('Error updating teacher: ', error);
        });
    });

    // Delete Teacher
    deleteTeacherButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const teacherId = document.getElementById('updateTeacherId').value;

        db.collection('teachers').doc(teacherId).delete().then(() => {
            alert('Teacher deleted successfully');
            updateTeacherForm.reset();
        }).catch((error) => {
            console.error('Error deleting teacher: ', error);
        });
    });

    // Approve Student Registrations
    function loadStudentRegistrations() {
        db.collection('studentRegistrations').get().then((querySnapshot) => {
            studentRegistrationsDiv.innerHTML = ''; // Clear the list
            querySnapshot.forEach((doc) => {
                const student = doc.data();
                const registrationItem = document.createElement('div');
                registrationItem.className = 'registration-item';
                registrationItem.innerHTML = `
                    <span>${student.name}</span>
                    <button onclick="approveRegistration('${doc.id}')">Approve</button>
                `;
                studentRegistrationsDiv.appendChild(registrationItem);
            });
        }).catch((error) => {
            console.error('Error loading student registrations: ', error);
        });
    }

    window.approveRegistration = function(docId) {
        db.collection('studentRegistrations').doc(docId).update({
            approved: true
        }).then(() => {
            alert('Student registration approved');
            loadStudentRegistrations(); // Refresh the list
        }).catch((error) => {
            console.error('Error approving registration: ', error);
        });
    };

    // Load student registrations on page load
    loadStudentRegistrations();
});
