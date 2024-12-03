document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Example: Logging the input
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);

  alert("Login functionality not implemented.");
});
