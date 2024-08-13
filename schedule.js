// document.getElementById('addSlotBtn').addEventListener('click', function() {
//     const date = document.getElementById('date').value;
//     const startTime = document.getElementById('startTime').value;
//     const endTime = document.getElementById('endTime').value;

//     if (date && startTime && endTime) {
//         const slot = `${date} | ${startTime} - ${endTime}`;
        
//         const li = document.createElement('li');
//         li.innerHTML = `<span>${slot}</span> <button onclick="removeSlot(this)">Remove</button>`;
//         document.getElementById('slotsList').appendChild(li);
        
//         // Clear the input fields
//         document.getElementById('date').value = '';
//         document.getElementById('startTime').value = '';
//         document.getElementById('endTime').value = '';
//     } else {
//         alert('Please fill out all fields.');
//     }
// });

// function removeSlot(button) {
//     button.parentElement.remove();
// }
// document.getElementById('scheduleForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent form submission from refreshing the page

//     const date = document.getElementById('date').value;
//     const startTime = document.getElementById('startTime').value;
//     const endTime = document.getElementById('endTime').value;

//     // Create a new appointment object
//     const appointment = {
//         date: date,
//         startTime: startTime,
//         endTime: endTime
//     };

//     // Save the appointment to localStorage
//     let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
//     appointments.push(appointment);
//     localStorage.setItem('appointments', JSON.stringify(appointments));

//     // Redirect to the approve-cancel.html page
//     window.location.href = 'approve-cancel.html';
// });
document.getElementById('scheduleForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const date = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;

    // Create an appointment object
    const appointment = {
        date: date,
        startTime: startTime,
        endTime: endTime,
        approved: false
    };

    // Save the appointment to localStorage
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    // Redirect to the approve-cancel.html page
    window.location.href = 'approve-cancel.html';
});

