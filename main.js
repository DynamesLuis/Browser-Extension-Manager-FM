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
   const $articles = document.querySelectorAll("article");
   $articles.forEach(extension => {
      const $removeBtn = extension.querySelector(".remove-btn");
      $removeBtn.addEventListener('click', () => deleteExtension(extension));
   })
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
   const $articles = document.querySelectorAll("article");
   $articles.forEach(extension => {
      resetHidden(extension);
   });
}

function showActive() {
   const $articles = document.querySelectorAll("article");
   $articles.forEach(extension => {
      resetHidden(extension);
      if (!extension.querySelector(".input-toggle").checked) {
         extension.classList.add("hidden");
      }
   });
}

function showInactive() {
   const $articles = document.querySelectorAll("article");
   $articles.forEach(extension => {
      resetHidden(extension);
      if (extension.querySelector(".input-toggle").checked) {
         extension.classList.add("hidden");
      }
   });
}

function setActive(btn, filtersBtn) {
   if (!btn.classList.contains("active-btn")) {
      filtersBtn.forEach(btn => btn.classList.remove("active-btn"));
      btn.classList.add("active-btn")
   }
}

function resetHidden(element) {
   element.classList.remove("hidden");
}

function deleteExtension(extension) {
   extension.remove();
}