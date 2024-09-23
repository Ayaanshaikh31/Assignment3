document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links ul');

    if (menuIcon && navLinks) {  // Check if the elements exist
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Optional: Close the menu when clicking outside of it
        document.addEventListener('click', (event) => {
            if (!menuIcon.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
    } else {
        console.error('Menu icon or navigation links not found.');
    }
});
