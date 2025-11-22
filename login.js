function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const correctUser = "signal";
  const correctPass = "signal";

  if (user === correctUser && pass === correctPass) {
    document.getElementById("msg").innerText = "Access Granted.";

    // Redirect after 1 second
    setTimeout(() => {
      window.location.href = "adminPanel.html"; // Replace with your target page
    }, 1000);
  } else {
    document.getElementById("msg").innerText =
      "Username or Password is incorrect.";
  }
}
