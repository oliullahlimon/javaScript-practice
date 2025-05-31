$("#loginButton").click(() => {
  const passWord1 = $("#pass1").val();
  const passWord2 = $("#pass2").val();

  if (passWord1 != "" && passWord2 != "") {
    if (passWord1 === passWord2) {
      alert("successfully logged in!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  } else {
    alert("Please enter both passwords.");
  }
});
