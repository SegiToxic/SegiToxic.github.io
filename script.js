const nav = document.getElementById("navigation");
const accDropdown = document.getElementById("accountDropdown");
const socials = document.getElementById("socials");

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

function checkScreenWidth() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024 || screenWidth < 700) {
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
  }
}

window.addEventListener("resize", checkScreenWidth);
