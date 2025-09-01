const $modeBtn = document.querySelector(".mode-btn");
const $body = document.querySelector("body");
const $logo = document.querySelector(".logo")

$modeBtn.addEventListener('click', (e) => {
   $body.classList.toggle("light");
   $modeBtn.classList.toggle("light");  
   $logo.classList.toggle("light"); 
   if ($logo.classList.contains("light")) {
      $logo.src = "./assets/images/logo-light.svg";
   } else {
      $logo.src = "./assets/images/logo-dark.svg";
   }
});