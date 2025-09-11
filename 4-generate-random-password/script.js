const genBtnEl = document.querySelector(".genBtn");
const pwdEl = document.querySelector(".pwd");
const copyBtnEl = document.querySelector(".copyBtn");

function generatePassword() {
  // console.log(pwdEl.value);
  const char =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopquurstuvwxyz0123456789-=!@#$%^&*()_+{}:"<>?[];./';
  const passwordLength = 8;
  let pass = "";
  //   console.log(char.length); //90
  //   console.log(Math.random()); //random float values from 0 - 1
  //   console.log(Math.random() * char.length); //random float values from 0 - 90(char.length)
  //   console.log(Math.floor(Math.random() * char.length)); // random non-float numbers from 0 - 90(char.length)
  //   console.log(char.charAt(Math.floor(Math.random() * char.length))); // random character from char based on the random number from 0-90(char.length)
  //   //?how this will work is -  basically javascript looks string as a array of characters. So, in our condition takes the random number 0-90 and then takes that number as a index, then by the use of carAt() it will return the character at that index in the char string/array.

  for (let i = 0; i < passwordLength; i++) {
    pass += char.charAt(Math.floor(Math.random() * char.length));
  }
  pwdEl.value = pass;
}

genBtnEl.addEventListener("click", generatePassword);

copyBtnEl.addEventListener("click", () => {
  if (!pwdEl.value) {
    alert("Please Generate the Password");
    return;
  }
  navigator.clipboard.writeText(pwdEl.value);
  alert("Password Copied Successfully!");
});
