function openNav() {
  const nav = document.getElementById("navigation");
  const socials = document.getElementById("socials");

  nav.style.display = "flex";
  socials.style.display = "flex";
  document.documentElement.style.overflowY = "hidden";
}
function closeNav() {
  const nav = document.getElementById("navigation");
  const socials = document.getElementById("socials");

  nav.style.display = "none";
  socials.style.display = "none";
  document.documentElement.style.overflowY = "auto";
}
