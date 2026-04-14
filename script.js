// MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
// DARK / LIGHT MODE
function toggleTheme() {
  document.body.classList.toggle("light");

  const icon = document.getElementById("themeIcon");

  if (document.body.classList.contains("light")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

// TYPING EFFECT
const words = [
  "Frontend Developer",
  "React Developer",
  "Future Fullstack Engineer"
];

let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = words[i];

  if (!isDeleting) {
    document.getElementById("typed-text").textContent = current.slice(0, j++);
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    document.getElementById("typed-text").textContent = current.slice(0, j--);
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();