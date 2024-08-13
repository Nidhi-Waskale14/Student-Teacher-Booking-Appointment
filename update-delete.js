
// // Initial render
// renderTeacherTable();
const teacherTableBody = document.querySelector('#teacherTable tbody');

// Load teachers from localStorage
let teachers = JSON.parse(localStorage.getItem('teachers')) || [];

// Function to render the teacher table
function renderTeacherTable() {
    teacherTableBody.innerHTML = '';

    teachers.forEach(teacher => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" value="${teacher.name}" class="update-name"></td>
            <td><input type="text" value="${teacher.department}" class="update-department"></td>
            <td><input type="text" value="${teacher.subject}" class="update-subject"></td>
            <td><input type="email" value="${teacher.email}" class="update-email"></td>
            <td><input type="tel" value="${teacher.phone}" class="update-phone"></td>
            <td><button class="update-button">Update</button></td>
            <td><button class="delete-button">Delete</button></td>
        `;

        teacherTableBody.appendChild(row);

        // Handle the update button click
        row.querySelector('.update-button').addEventListener('click', () => {
            teacher.name = row.querySelector('.update-name').value;
            teacher.department = row.querySelector('.update-department').value;
            teacher.subject = row.querySelector('.update-subject').value;
            teacher.email = row.querySelector('.update-email').value;
            teacher.phone = row.querySelector('.update-phone').value;

            // Save updates to localStorage
            localStorage.setItem('teachers', JSON.stringify(teachers));
        });

        // Handle the delete button click
        row.querySelector('.delete-button').addEventListener('click', () => {
            teachers = teachers.filter(t => t.id !== teacher.id);

            // Save the updated list to localStorage
            localStorage.setItem('teachers', JSON.stringify(teachers));

            // Re-render the table
            renderTeacherTable();
        });
    });
}

// Initial render
renderTeacherTable();
