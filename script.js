const root = document.querySelector(":root");
function minimizeQuickInfo() {
  getComputedStyle(root).getPropertyValue("--quickinfo-height") == "0"
    ? root.style.setProperty("--quickinfo-height", "86%")
    : root.style.setProperty("--quickinfo-height", "0");
}

window.addEventListener("resize", (event) => {
  if (window.innerWidth >= 1024)
    root.style.setProperty("--quickinfo-height", 0);
  else root.style.setProperty("--quickinfo-height", "86%");
});
