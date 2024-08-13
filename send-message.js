
document.getElementById('sendMessageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form data
    const teacher = document.getElementById('teacher').value;
    const message = document.getElementById('message').value;
    const date = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    if (teacher && message) {
        // Get existing messages from localStorage
        let messages = JSON.parse(localStorage.getItem('messages')) || [];

        // Add new message to messages array
        messages.push({ teacher, message, date });

        // Save updated messages array to localStorage
        localStorage.setItem('messages', JSON.stringify(messages));

        // Clear form fields
        document.getElementById('teacher').value = '';
        document.getElementById('message').value = '';

        alert('Message sent successfully!');

        event.preventDefault();
    // Perform sending message logic here
    alert('Message sent successfully!');
    // Clear form fields
    document.getElementById('sendMessageForm').reset();
    }
});
