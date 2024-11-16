const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  } else {
    let li = document.createElement("li"); //directly editing the DOM
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li); //directly editing the DOM
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; //directly editing the DOM
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//function that saves the dat in the browser.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//get's the saved task data when browser reloads and displays it.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
