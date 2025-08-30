const $modeBtn = document.querySelector(".mode-btn");
const $body = document.querySelector("body");

$modeBtn.addEventListener('click', (e) => {
   $body.classList.toggle("light");
   $modeBtn.classList.toggle("light");     
});