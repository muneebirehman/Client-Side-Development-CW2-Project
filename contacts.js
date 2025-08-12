// script.js

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Here you would typically collect form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const newsletter = document.getElementById('newsletter').checked;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Subject:', subject);
            console.log('Message:', message);
            console.log('Newsletter Opt-in:', newsletter);

            // In a real application, you would send this data to a server
            // using fetch() or XMLHttpRequest.
            // Example:
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message, newsletter }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Display a success message to the user (e.g., in a modal)
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset(); // Clear the form
            })
            .catch((error) => {
                console.error('Error:', error);
                // Display an error message to the user
                alert('There was an error sending your message. Please try again later.');
            });
            */

            // For now, we'll just log and provide a simple "success" message.
            // IMPORTANT: In a real app, do NOT use alert(). Use a custom modal instead.
            // alert('Your message has been sent successfully!'); // Removed as per instructions
            displayCustomMessage('Your message has been sent successfully!', 'success');
            contactForm.reset(); // Clear the form after "submission"
        });
    }

    // Function to display a custom message (instead of alert)
    function displayCustomMessage(message, type = 'info') {
        const messageBox = document.createElement('div');
        messageBox.className = `fixed bottom-4 right-4 p-4 rounded-lg shadow-lg text-white font-semibold z-50 transform transition-transform duration-300 ease-out translate-y-full opacity-0`;

        if (type === 'success') {
            messageBox.style.backgroundColor = '#16a34a'; // Green
        } else if (type === 'error') {
            messageBox.style.backgroundColor = '#dc2626'; // Red
        } else {
            messageBox.style.backgroundColor = '#3b82f6'; // Blue (info)
        }

        messageBox.textContent = message;
        document.body.appendChild(messageBox);

        // Animate in
        setTimeout(() => {
            messageBox.style.transform = 'translateY(0)';
            messageBox.style.opacity = '1';
        }, 100);

        // Animate out and remove after a few seconds
        setTimeout(() => {
            messageBox.style.transform = 'translateY(100%)';
            messageBox.style.opacity = '0';
            messageBox.addEventListener('transitionend', () => {
                messageBox.remove();
            }, { once: true });
        }, 5000); // Message visible for 5 seconds
    }
});
