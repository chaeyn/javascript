const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleMouseEnter() {
  console.log("h1 was clicked!");
  h1.innerText = "Mouse is here!";
}
function handleTitleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}
function handleTitleClick() {
  h1.style.color = "blue";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}
function handleTitleClickWindowOffline() {
  alert("SOS no WIFI");
}
function handleTitleClickWindowOnline() {
  alert("All Good");
}
h1.onclick = handleTitleClick;
h1.onmouseenter = handleTitleMouseEnter;
h1.onmouseleave = handleTitleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleTitleClickWindowOffline);
window.addEventListener("online", handleTitleClickWindowOnline);
