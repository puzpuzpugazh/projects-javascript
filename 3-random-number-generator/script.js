const genBtnEl = document.querySelector(".genBtn");
const randomNumEl = document.querySelector(".randomNumber");

genBtnEl.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
  randomNumEl.textContent = randomNum;
});
