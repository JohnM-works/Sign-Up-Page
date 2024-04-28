let passWord = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm-password");
let error = document.querySelector(".error");
let inputPassword = document.querySelector("#password");
let inputConfirmPass = document.querySelector("#confirm-password");

function validate() {
  if (passWord.value == confirmPassword.value) {
    error.textContent = "Password Match";
    error.style.color = "green";
    inputPassword.style.borderColor = "green";
    inputConfirmPass.style.borderColor = "green";
  } else {
    error.textContent = "Password didn't match";
    error.style.color = "red";
    inputPassword.style.borderColor = "red";
    inputConfirmPass.style.borderColor = "red";
  }
}

passWord.addEventListener("keyup", () => {
  if (confirmPassword.value.length != 0) {
    validate();
  } else if (confirmPassword.value == "" || passWord.value == "") {
    error.textContent = "";

    inputPassword.style.borderColor = "#949494";
    inputConfirmPass.style.borderColor = "#949494";
  }
});

confirmPassword.addEventListener("keyup", () => {
  if (passWord.value.length != 0) validate();
});
