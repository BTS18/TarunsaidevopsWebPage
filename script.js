document.addEventListener("DOMContentLoaded", function () {
    // Ensure the DOM is fully loaded before executing JavaScript

    const navLinks = document.querySelectorAll("nav ul li a");

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Other JavaScript functionalities can be added here
});

// Add more functions or code as needed
