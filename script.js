/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value == "") {
    alert("Please enter a task");
  }
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "❌";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
    saveData()
  }
}, false);

function saveData() {
  localStorage.setItem("listContainer", listContainer.innerHTML);
}

function loadData() {
  if (localStorage.getItem("listContainer")) {
    listContainer.innerHTML = localStorage.getItem("listContainer");
  }
}

loadData();

// Citations and References: https://m.youtube.com/watch?v=G0jO8kUrg-I&pp=ygUGI3l1ZGl2
// GreatStack March 20, 2023