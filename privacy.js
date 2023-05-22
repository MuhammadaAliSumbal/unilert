const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const checkboxInput = document.querySelector('#checkbox');
const submitBtn = document.querySelector('#submit-btn');
const errorMessage = document.querySelector('.error-message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
    errorMessage.textContent = 'Please fill out all fields.';
  } else if (!checkboxInput.checked) {
    errorMessage.textContent = 'Please accept the privacy policy.';
  } else {
    // Submit form data to server or API endpoint
    successMessage.textContent = 'Thank you for submitting the form!';
    form.reset();
  }
});

nameInput.addEventListener('focus', () => {
  errorMessage.textContent = '';
  successMessage.textContent = '';
});

emailInput.addEventListener('focus', () => {
  errorMessage.textContent = '';
  successMessage.textContent = '';
});

messageInput.addEventListener('focus', () => {
  errorMessage.textContent = '';
  successMessage.textContent = '';
});

checkboxInput.addEventListener('change', () => {
  errorMessage.textContent = '';
  successMessage.textContent = '';
});

submitBtn.addEventListener('mouseover', () => {
  submitBtn.style.backgroundColor = '#ff7c2e';
});

submitBtn.addEventListener('mouseout', () => {
  submitBtn.style.backgroundColor = '#e9650d';
});
