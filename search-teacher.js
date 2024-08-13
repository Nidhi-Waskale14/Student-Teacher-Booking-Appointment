document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchQuery = document.getElementById('search').value;
    // Perform search logic here

    // Example result
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = `
        <li>
            <span>John Doe</span>
            <button class="cta-button">Book Appointment</button>
        </li>
    `;
});
