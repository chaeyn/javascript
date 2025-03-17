const title = document.querySelector("div.hello:first-child h1");

function handleTitleMouseEnter() {
  console.log("title was clicked!");
  title.style.color = "blue";
}
function handleTitleMouseLeave() {
  title.style.color = "black";
}

title.addEventListener("mouseenter", handleTitleMouseEnter);
title.addEventListener("mouseleave", handleTitleMouseLeave);
