const passwordField = document.querySelector('#password');
const togglePasswordBtn = document.querySelector('.toggle-password');

togglePasswordBtn.addEventListener('click', function () {
  const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordField.setAttribute('type', type);
  this.classList.toggle('active');
});
function togglePasswordVisibility() {
  const confirmPassword = document.getElementById('confirmPassword');
  const toggleBtn = document.querySelector('.toggle-password');
  if (confirmPassword.type === 'password') {
    confirmPassword.type = 'text';
    toggleBtn.style.backgroundImage = "url('eye-off.svg')";
  } else {
    confirmPassword.type = 'password';
    toggleBtn.style.backgroundImage = "url('eye.svg')";
  }
}
