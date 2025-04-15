document.addEventListener("DOMContentLoaded", function () {
  // Scrollspy
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  }, {
    threshold: 0.6
  });

  sections.forEach(section => observer.observe(section));

  // Kontakt
  const contactInputs = document.querySelectorAll(".contact-form-textbox input, .contact-form-textbox textarea");

  if (contactInputs.length > 0) {
    contactInputs.forEach((input) => {
      input.addEventListener("input", function () {
        if (this.value.trim() !== "") {
          this.classList.add("filled");
        } else {
          this.classList.remove("filled");
        }
      });
    });
  }



});