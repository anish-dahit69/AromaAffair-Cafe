import "remixicon/fonts/remixicon.css";

const menu = document.querySelector(".ri-menu-4-line");
const close = document.querySelector(".ri-close-large-line");
const list = document.querySelector(".list");

menu.addEventListener("click", () => {
  list.classList.add("active");
  menu.style.display = "none";
  close.style.display = "block";
});

close.addEventListener("click", () => {
  list.classList.remove("active");
  close.style.display = "none";
  menu.style.display = "block";
});

list.addEventListener("click", () => {
  list.classList.remove("active");
});

// scroll animation

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".testimonial-profile");
  const cards = Array.from(container.children);

  // Clone all cards and append them for infinite effect
  cards.forEach((card) => {
    let clone = card.cloneNode(true);
    container.appendChild(clone);
  });
});
