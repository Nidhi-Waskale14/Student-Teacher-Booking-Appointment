// Example students data - in practice, this data would come from a server
let students = [
    // { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    // { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' }
];

// Populate the table with students data
const studentTable = document.getElementById('studentTable').querySelector('tbody');

students.forEach(student => {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td><button class="approve-button" onclick="approveStudent(${student.id})">Approve</button></td>
        <td><button class="reject-button" onclick="rejectStudent(${student.id})">Reject</button></td>
    `;

    studentTable.appendChild(row);
});

// Approve student
function approveStudent(studentId) {
    alert(`Student with ID ${studentId} approved!`);
    removeStudent(studentId);
}

// Reject student
function rejectStudent(studentId) {
    alert(`Student with ID ${studentId} rejected!`);
    removeStudent(studentId);
}

// Remove student from the table and data
function removeStudent(studentId) {
    students = students.filter(student => student.id !== studentId);
    document.getElementById('studentTable').querySelector(`tbody`).innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td><button class="approve-button" onclick="approveStudent(${student.id})">Approve</button></td>
            <td><button class="reject-button" onclick="rejectStudent(${student.id})">Reject</button></td>
        `;
        studentTable.appendChild(row);
    });
}
