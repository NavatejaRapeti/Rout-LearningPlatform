function showPasswordFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  function showConfirmPasswordFunction() {
    var x = document.getElementById("passwordConfirmInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }