// Zugriff auf HTML-Elemente
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Event Listener: Wenn das Formular abgeschickt wird
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Neues Listenelement erstellen
  const li = document.createElement("li");

  // Button-Container erstellen
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("button-container");

  // "Done"-Button erstellen
  const done = document.createElement("button");
  done.classList.add("done-button");
  done.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q8 0 15 1.5t14 4.5l-74 74H200v560h560v-266l80-80v346q0 33-23.5 56.5T760-120H200Zm261-160L235-506l56-56 170 170 367-367 57 55-424 424Z"/></svg>`;
  done.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // "Delete"-Button erstellen
  const del = document.createElement("button");
  del.classList.add("delete-button");
  del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>`;
  del.addEventListener("click", function () {
    li.remove();
    checkIfEmpty();
  });


  // Buttons zum Container hinzufügen
  buttonContainer.appendChild(done);
  buttonContainer.appendChild(del);

  // Button-Container und Text zum Listenelement hinzufügen
  li.appendChild(buttonContainer);
  
  const textp = document.createElement("p");
  textp.textContent = taskText;
  textp.classList.add("textp");
  li.appendChild(textp);

  

  // Listenelement zur Liste hinzufügen
  list.appendChild(li);
  checkIfEmpty();

  // Eingabefeld leeren
  input.value = "";
});

function checkIfEmpty(){
  if (list.children.length === 0){
    const emptyMessage = document.createElement("li");
    emptyMessage.textContent = "Du hast keine Aufgaben eingetragen";
    emptyMessage.classList.add("empty-message");
    list.appendChild(emptyMessage);
  }else{
    const emptyMessage = list.querySelector(".empty-message");
    if (emptyMessage) {
      emptyMessage.remove();
    }
  }
}

checkIfEmpty();