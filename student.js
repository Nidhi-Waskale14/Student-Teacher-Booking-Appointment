document.addEventListener('DOMContentLoaded', function() {
    const studentLink = document.querySelector('.student-options[href="register.html"]');
    
    studentLink.addEventListener('click', function() {
        console.log('Student link clicked, navigating to register.html');
    });
});
