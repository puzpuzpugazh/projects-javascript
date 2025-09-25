// const checkBtn = document.querySelector(".check-btn");
// const result = document.querySelector(".result");

// checkBtn.addEventListener("click", () => {
//   const inputNum = document.querySelector("input").value;
//   if (!inputNum) {
//     result.textContent = "Please enter the number before check";
//     result.style.color = "red";
//   } else if ((inputNum % 1 == 0) && (inputNum % inputNum == 0)) {
//     result.textContent = "The number you have entered is Prime";
//     result.style.color = "green";
//   } else {
//     result.textContent = "The number you have entered is not a Prime";
//     result.style.color = "orange";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("inputNum");
  const checkBtn = document.querySelector(".check-btn");
  const result = document.querySelector(".result");

  checkBtn.addEventListener("click", function () {
    const number = parseInt(numberInput.value);
    console.log(number);

    if (isNaN(number)) {
      result.textContent = "please enter the valid number";
      result.style.color = "red";
      return;
    }

    if (isPrime(number)) {
      result.textContent = `${number} is a prime number`;
      result.style.color = "green";
      return;
    } else {
      result.textContent = `${number} is not a prime number`;
      result.style.color = "red";
      return;
    }
  });

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 == 0 || num % 3 == 0) return false;
    return true;
  }
});
