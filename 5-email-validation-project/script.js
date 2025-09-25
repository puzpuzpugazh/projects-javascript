let emailId = document.getElementById("email");
let errorMsg = document.getElementById("error-msg");
let icon = document.getElementById("icon");

function checker() {
  icon.style.display = "inline-block";
  let email = emailId.value.trim();
  if (!email) {
    icon.style.display = "none";
    errorMsg.style.display = "block";
    emailId.style.border = "2px solid red";
  } else if (validateEmail(email)) {
    icon.innerHTML = `<i class ="fas fa-check-circle"></i>`;
    icon.style.color = "green";
    errorMsg.style.display = "none";
    emailId.style.border = "2px solid green";
  } else {
    icon.innerHTML = `<i class ="fas fa-exclamation-circle"></i>`;
    icon.style.color = "red";
    errorMsg.style.display = "block";
    emailId.style.border = "2px solid red";
  }
}

function validateEmail(email) {
  let atIndex = email.indexOf("@");
  let dotIndex = email.lastIndexOf(".");

  if (atIndex > 0 && dotIndex > atIndex + 1 && email.length > dotIndex + 2) {
    return true;
  } else {
    return false;
  }
}
