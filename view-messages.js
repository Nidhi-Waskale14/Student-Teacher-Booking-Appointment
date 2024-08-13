document.addEventListener('DOMContentLoaded', function() {
    // Retrieve messages from localStorage
    let messages = JSON.parse(localStorage.getItem('messages')) || [];

    // Get the message container element
    const messageContainer = document.querySelector('.message-container');

    // Display messages
    if (messages.length > 0) {
        messages.forEach((msg, index) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.innerHTML = `
                <h3>From: ${msg.teacher}</h3>
                <p>Date: ${msg.date}</p>
                <p>Message: ${msg.message}</p>
                <button class="reply-button" data-index="${index}">Reply</button>
                <button class="delete-button" data-index="${index}">Delete</button>
                <div class="reply-section" id="reply-section-${index}" style="display: none;">
                    <textarea placeholder="Write your reply..."></textarea>
                    <button class="send-reply-button">Send Reply</button>
                </div>
            `;
            messageContainer.appendChild(messageElement);
        });
    } else {
        messageContainer.innerHTML = '<p>No messages available.</p>';
    }

    // Add event listeners for reply and delete buttons
    messageContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('reply-button')) {
            const index = event.target.getAttribute('data-index');
            const replySection = document.getElementById(`reply-section-${index}`);
            replySection.style.display = replySection.style.display === 'none' ? 'block' : 'none';
        }

        if (event.target.classList.contains('delete-button')) {
            const index = event.target.getAttribute('data-index');
            messages.splice(index, 1);
            localStorage.setItem('messages', JSON.stringify(messages));
            location.reload(); // Reload the page to update the message list
        }

        if (event.target.classList.contains('send-reply-button')) {
            const index = event.target.closest('.reply-section').getAttribute('id').split('-')[2];
            const replyMessage = event.target.previousElementSibling.value;
            if (replyMessage) {
                alert(`Reply sent to: ${messages[index].teacher}\nMessage: ${replyMessage}`);
                event.target.previousElementSibling.value = ''; // Clear the reply textarea
            } else {
                alert('Please enter a reply message.');
            }
        }
    });
});
