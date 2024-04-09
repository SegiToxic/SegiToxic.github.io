const nav = document.getElementById("navigation");
const socials = document.getElementById("socials");
const accDropdown = document.getElementById("accountDropdown");

accDropdown.style.display = "none";

function openNav() {
  if (window.innerWidth < 700) socials.style.display = "flex";
  if (window.innerWidth >= 700 && window.innerWidth < 1023) {
    nav.style.width = "40vw";
    nav.style.animation = "fade-in 1s normal";
  } else {
    nav.style.width = "100%";
  }
  nav.style.display = "flex";
  document.documentElement.style.overflowY = "hidden";
}
function closeNav() {
  socials.style.display = "none";
  if (window.innerWidth >= 700 && window.innerWidth < 1023) {
    document.documentElement.style.overflowY = "auto";
    nav.style.animation = "fade-out 1s normal";
    nav.style.width = "0";
    setTimeout(function () {
      nav.style.display = "none";
    }, 1000);
  } else {
    nav.style.display = "none";
  }
  document.documentElement.style.overflowY = "auto";
}

function toggleProfileDropdown() {
  if (accDropdown.style.display == "none") {
    accDropdown.style.display = "flex";
  } else {
    accDropdown.style.display = "none";
  }
}

function loginChoice() {
  const naslov = document.getElementById("registerloginNaslov");
  const text = document.getElementById("registerloginText");
  const kopce = document.getElementById("registerloginButton");
  const registerContent = document.getElementById("register");
  const resetPasswordText = document.getElementById("resetPassword");

  naslov.textContent = "Логирање";
  text.textContent = "Логирајте се да добиете пристап до вашиот акаунт.";
  registerContent.style.display = "none";
  resetPasswordText.style.display = "block";
  kopce.textContent = "Логирај се";
}
function registerChoice() {
  const naslov = document.getElementById("registerloginNaslov");
  const text = document.getElementById("registerloginText");
  const kopce = document.getElementById("registerloginButton");
  const registerContent = document.getElementById("register");
  const resetPasswordText = document.getElementById("resetPassword");

  naslov.textContent = "Регистрација";
  text.textContent =
    "Регистрирајте се за да добивате известувања и да ги следите најновите вести кое училиштето ги нуди.";
  registerContent.style.display = "flex";
  resetPasswordText.style.display = "none";
  kopce.textContent = "Регистрирај се";
}

function kreiraj(id) {
  const kreacija = document.getElementById("kreacija");
  const slikaText = document.getElementById("slikaText");
  const naslovText = document.getElementById("naslovText");
  const sodrzinaText = document.getElementById("sodrzinaText");

  kreacija.style.display = "flex";
  if (id == 1) {
    slikaText.parentElement.style.display = "none";
    naslovText.textContent = "Напишете го насловот на оваа Нотификација.";
    sodrzinaText.textContent = "Напишете ја пораката.";
  } else {
    slikaText.parentElement.style.display = "block";
    naslovText.textContent = "Напишете го насловот на оваа Вест или Настан.";
    sodrzinaText.textContent =
      "Напишете ја содржината на оваа Вест или Настан.";
  }
}

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    nav.style.width = "80%";
    nav.style.animation = "0";
  } else if (screenWidth < 700) {
    nav.style.width = "100%";
    nav.style.animation = "0";
  }
  if (screenWidth >= 1024) {
    nav.style.display = "flex";
    socials.style.display = "none";
    document.documentElement.style.overflowY = "auto";
  } else {
    nav.style.display = "none";
    socials.style.display = "none";
    accDropdown.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenWidth);

websiteLoad();
