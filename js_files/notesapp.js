const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
    reapplyEventListeners();
  }
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", function () {
  const inputBox = document.createElement("p");
  const image = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  image.src = "../assets/notes-app-img/images/delete.png";
  inputBox.appendChild(image);
  notesContainer.appendChild(inputBox);
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

notesContainer.addEventListener("input", function () {
  updateStorage();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

function reapplyEventListeners() {
  const notes = document.querySelectorAll(".input-box");
  notes.forEach((note) => {
    note.addEventListener("input", updateStorage);
  });
}
