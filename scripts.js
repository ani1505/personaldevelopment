// Add your JavaScript code here
// You can include event listeners or other dynamic functionality

// Example event listener
document.addEventListener('DOMContentLoaded', function() {
    // Code to be executed after the DOM is fully loaded
  });
 // script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve form input values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Perform desired actions (e.g., send email, save contact information)
  // You can customize this part based on your specific requirements

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  alert('Thank you for contacting me!'); // Show a thank you message or redirect to a confirmation page
});
