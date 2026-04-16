// MENU
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

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

// TYPE EFFECT
const words = ["Frontend Developer", "React Developer", "Fullstack Learner"];

let i = 0, j = 0, isDeleting = false;

function type() {
  const current = words[i];

  document.getElementById("typed-text").textContent =
    current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();

// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// PROGRESS BAR
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / height) * 100;

  document.getElementById("progress-bar").style.width = progress + "%";
});

// EMAILJS
(function () {
  emailjs.init("QWbMyj7RDkKsp9vPB");
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_dp82use",
    "template_6xl67bo",
    this
  )
.then(() => {
  document.getElementById("popup").style.display = "flex";
  this.reset();
})
  .catch((err) => {
    alert("Failed to send message");
    console.log(err);
  });
});
function closePopup() {
  document.getElementById("popup").style.display = "none";
}
const btn = document.getElementById("sendBtn");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  btn.innerText = "Sending...";
  btn.disabled = true;

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      document.getElementById("popup").style.display = "flex";
      this.reset();
    })
    .finally(() => {
      btn.innerText = "Send Message";
      btn.disabled = false;
    });
});