// === Contact Form === //
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();


    const nameError = document.querySelector("#name-error");
    const emailError = document.querySelector("#email-error");
    const messageError = document.querySelector("#message-error");

    if (name === "") {
     nameError.textContent = ("Please enter your name");
    }else {
      nameError.textContent = "";
    }

    if (!email.includes("@")) {
      emailError.textContent = ("Email is not valid");
    }else {
      emailError.textContent = "";
    }

    if (message.length < 10) {
      messageError.textContent = "Message is too short";
    }else {
      messageError.textContent = "";
    }
  });
}

// === Mobile Menu === //
const menuBtn = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });
}
