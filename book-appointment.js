// document.getElementById('bookAppointmentForm').addEventListener('submit', function(event) {
//     event.preventDefault();
//     // Perform appointment booking logic here
//     alert('Appointment booked successfully!');
//     // Clear form fields
//     document.getElementById('bookAppointmentForm').reset();
// });
document.getElementById('bookAppointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const teacher = document.getElementById('teacher').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (teacher && date && time) {
        // Store data in localStorage
        localStorage.setItem('appointmentTeacher', teacher);
        localStorage.setItem('appointmentDate', date);
        localStorage.setItem('appointmentTime', time);

        event.preventDefault();
    // Perform appointment booking logic here
    alert('Appointment booked successfully!');
    // Clear form fields
    document.getElementById('bookAppointmentForm').reset()
    }
});
