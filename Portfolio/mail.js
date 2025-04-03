document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const button = document.getElementById("send-button");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // verhindert Neuladen der Seite
        sendMail();
      });
    }
  
    function sendMail() {
      const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      
  
      emailjs
        .send("service_bjgytx9", "template_752ixwb", templateParams)
        .then(() => {
            
            const inputs = document.querySelectorAll(".contact-form-textbox input, .contact-form-textbox textarea");
            inputs.forEach((input) => {
                input.classList.remove("filled");
                input.value = "";
              });

            button.disabled = true;
            button.textContent = "✔ Gesendet!";
            button.classList.add("success");
    
            setTimeout(() => {
              button.disabled = false;
              button.textContent = "Senden";
              button.classList.remove("success");
            }, 5000);
          })
          .catch((error) => {
            console.error("Fehler beim Senden:", error);
    
            button.textContent = "❌ Fehler beim Senden";
            button.classList.add("error");
    
            setTimeout(() => {
              button.textContent = "Senden";
              button.classList.remove("error");
            }, 3000);
          });
      }
  });
  