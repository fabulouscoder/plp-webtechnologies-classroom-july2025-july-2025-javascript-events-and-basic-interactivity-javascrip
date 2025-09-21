// ===============================
// Part 1: Event Handling
// ===============================

// Toggle Dark/Light Mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ===============================
// Part 2: Interactive Elements
// ===============================

// FAQ collapsible answers
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===============================
// Part 3: Form Validation
// ===============================

// Grab form and fields
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const formSuccess = document.getElementById("form-success");

// Helper function to validate email with regex
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Form validation logic
form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  let isValid = true;

  // Validate name
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  } else {
    nameError.textContent = "";
  }

  // Validate email
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  // Validate password (at least 6 chars, contains number)
  if (passwordInput.value.length < 6 || !/\d/.test(passwordInput.value)) {
    passwordError.textContent = "Password must be at least 6 characters and contain a number.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  // Success message
  if (isValid) {
    formSuccess.textContent = "Form submitted successfully! 🎉";
    form.reset();
  } else {
    formSuccess.textContent = "";
  }
});
