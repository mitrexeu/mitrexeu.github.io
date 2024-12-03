<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <div class="login-box">
      <h1>Login</h1>
      <form id="loginForm">
        <div class="input-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required>
        </div>
        <div class="input-group">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" required>
        </div>
        <button type="submit">Login</button>
        <p class="register-link">Don't have an account? <a href="#">Sign up</a></p>
      </form>
    </div>
  </div>
  <script src="script.js"></script>
</body>
</html>
