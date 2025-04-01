  //Kontakt JS

  document.addEventListener("DOMContentLoaded", function () {
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