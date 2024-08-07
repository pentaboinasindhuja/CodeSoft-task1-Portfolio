const home=document.querySelector('.home');
//navbar

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    home.style.marginTop='200px';
});


//about

document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about');
    const aboutImage = document.querySelector('.about-image');
    const aboutContent = document.querySelector('.about-content');

    function checkVisibility() {
        const sectionTop = aboutSection.getBoundingClientRect().top;
        const sectionBottom = aboutSection.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight && sectionBottom > 0) {
            aboutImage.classList.add('visible');
            aboutContent.classList.add('visible');
        } else {
            aboutImage.classList.remove('visible');
            aboutContent.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});


document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll('.skill');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4; // Adjust trigger point

        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;

            if (skillTop < triggerBottom) {
                skill.classList.add('visible');
            } else {
                skill.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

// Function to send email
function sendEmail(name, email, message) {
    // Replace with your own email sending logic
    // For demonstration, we'll log the details to console
    console.log(`Sending email to ${email} from ${name} with message: ${message}`);
    // You can implement actual email sending using services like SMTP or APIs here
}

document.addEventListener('DOMContentLoaded', function() {
    // Select the form element
    const contactForm = document.getElementById('contactForm');

    // Add submit event listener to the form
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission
        event.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('msg').value;

        // Validate form fields (add your own validation logic if needed)
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Call function to send email
        sendEmail(name, email, message);

        // Optionally, clear form fields after sending
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('msg').value = '';

        // Confirmation or redirection can be added here after sending
        alert('Message sent successfully!');
    });
});

