document.getElementById("login-btn").addEventListener("click", function () {
  const loginEmailValue = document.getElementById("login-email").value;
  const loginPassValue = document.getElementById("login-password").value;

  if (loginEmailValue === "kawsar@gmail.com" && loginPassValue === "123456") {
    window.location.href = "money.html";
  } else {
    alert("Invalid user, please check your email or password");
  }
});
