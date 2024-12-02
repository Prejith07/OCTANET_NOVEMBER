function showAlert() {
  alert('Thank you for your interest! Join us today!');
}

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out! We will get back to you soon.');
});
