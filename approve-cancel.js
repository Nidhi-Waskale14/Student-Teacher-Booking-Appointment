document.addEventListener('DOMContentLoaded', function() {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointmentsTableBody = document.querySelector('#appointmentsTable tbody');

    appointments.forEach((appointment, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${appointment.date}</td>
            <td>${appointment.startTime}</td>
            <td>${appointment.endTime}</td>
            <td>
                <button onclick="approveAppointment(${index})">Approve</button>
                <button onclick="cancelAppointment(${index})">Cancel</button>
            </td>
        `;

        appointmentsTableBody.appendChild(row);
    });
});

function approveAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments[index].approved = true;
    localStorage.setItem('appointments', JSON.stringify(appointments));
    alert('Appointment approved!');
}

function cancelAppointment(index) {
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    alert('Appointment canceled!');
    window.location.reload(); // Reload the page to update the table
}
