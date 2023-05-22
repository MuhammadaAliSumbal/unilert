const passwordGenerator = () => {
  const length = 10;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
};

const generatePassword = () => {
  document.getElementById("password").value = passwordGenerator();
};

const togglePasswordVisibility = (event) => {
  const passwordInput = event.target.previousElementSibling;
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    event.target.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    event.target.textContent = "Show";
  }
};

document.getElementById("password-generator").addEventListener("click", generatePassword);
document.getElementById("confirm-password-toggle").addEventListener("click", togglePasswordVisibility);


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
  