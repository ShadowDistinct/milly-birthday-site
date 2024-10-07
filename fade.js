document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav a'); // Select all nav links

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent immediate navigation

            // Add fade-out class to body
            document.body.classList.add('fade-out');

            // Wait for animation to complete (500ms in this case)
            setTimeout(() => {
                window.location.href = this.href; // Navigate to the new page
            }, 500); // Match the duration of your fadeOut animation
        });
    });
});
