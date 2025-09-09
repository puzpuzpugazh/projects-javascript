const btnEl = document.querySelector('button');
const spanEl = document.getElementById('updateContent');



btnEl.onclick = function (){
    const yourName = prompt('please enter your name ');
    spanEl.textContent = yourName;
}