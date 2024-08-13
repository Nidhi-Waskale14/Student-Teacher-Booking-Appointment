document.addEventListener('DOMContentLoaded', function() {
    // Retrieve data from localStorage
    const teacher = localStorage.getItem('appointmentTeacher');
    const date = localStorage.getItem('appointmentDate');
    const time = localStorage.getItem('appointmentTime');

    // Display data
    if (teacher && date && time) {
        document.getElementById('appointmentTeacher').textContent = `Teacher: ${teacher}`;
        document.getElementById('appointmentDate').textContent = `Date: ${date}`;
        document.getElementById('appointmentTime').textContent = `Time: ${time}`;
    } else {
        document.getElementById('appointmentTeacher').textContent = 'No appointment details available.';
    }
});
