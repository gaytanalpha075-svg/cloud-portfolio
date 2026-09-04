const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit",function(even) {

    event.preventDefault();

    formMessage.textContent = "Thanks! Your message has been received.";

    contactForm.requestFullscreen();

});
