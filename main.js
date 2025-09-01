const $modeBtn = document.querySelector(".mode-btn");
const $body = document.querySelector("body");
const $logo = document.querySelector(".logo");
const $showAllBtn = document.querySelector(".showAll");
const $showActiveBtn = document.querySelector(".showActive");
const $showInactiveBtn = document.querySelector(".showInactive");
const $filtersBtn = document.querySelectorAll(".filters button");

initEvents();

function initEvents() {
   $modeBtn.addEventListener('click', changeTheme);
   $showAllBtn.addEventListener('click', showAll);
   $showActiveBtn.addEventListener('click', showActive);
   $showInactiveBtn.addEventListener('click', showInactive);
   $filtersBtn.forEach(btn => {
      btn.addEventListener('click', () => setActive(btn, $filtersBtn));
   });

}

function changeTheme() {
   $body.classList.toggle("light");
   $modeBtn.classList.toggle("light");
   $logo.classList.toggle("light");
   if ($logo.classList.contains("light")) {
      $logo.src = "./assets/images/logo-light.svg";
   } else {
      $logo.src = "./assets/images/logo-dark.svg";
   }
}

function showAll() {
   console.log("showing all");
   
}

function showActive() {
   console.log("showing active");

}

function showInactive() {
   console.log("showing inactive");

}

function setActive(btn, filtersBtn) {
   if (!btn.classList.contains("active-btn")) {
      filtersBtn.forEach(btn => btn.classList.remove("active-btn"));
      btn.classList.add("active-btn")
   }
}