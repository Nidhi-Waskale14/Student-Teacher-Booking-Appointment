
// Get references to the form
const addTeacherForm = document.getElementById('addTeacherForm');

// Load teachers from localStorage
let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

addTeacherForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const subject = document.getElementById('subject').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Create a teacher object
    const teacher = { id: Date.now(), name, department, subject, email, phone };

    // Add the teacher to the array
    teachers.push(teacher);

    // Save to localStorage
    localStorage.setItem('teachers', JSON.stringify(teachers));
    notification.classList.remove('hidden');

    // Hide the notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 3000);

    // Clear form fields
    addTeacherForm.reset();
});
