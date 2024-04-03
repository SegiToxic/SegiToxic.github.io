const nav = document.getElementById("navigation");
const socials = document.getElementById("socials");

function openNav() {
  if (window.innerWidth < 700) socials.style.display = "flex";
  document.documentElement.style.overflowY = "hidden";
  nav.style.display = "flex";
  nav.style.animation = "fade-in 1s normal";
  nav.style.width = "40vw";
}
function closeNav() {
  socials.style.display = "none";
  document.documentElement.style.overflowY = "auto";
  nav.style.animation = "fade-out 1s normal";
  nav.style.width = "0";
  setTimeout(function () {
    nav.style.display = "none";
  }, 1000);
}

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) {
    nav.style.display = "flex";
    socials.style.display = "none";
  } else {
    nav.style.display = "none";
    socials.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenWidth);

websiteLoad();
