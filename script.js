document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "All fields are required.";
            responseMessage.style.color = "red";
            return;
        }

        if (!validateEmail(email)) {
            responseMessage.textContent = "Please enter a valid email address.";
            responseMessage.style.color = "red";
            return;
        }

        responseMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
        responseMessage.style.color = "green";
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
