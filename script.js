/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//
/*
// Constants
//const appID = "app";
//const headingText = "To do. To done. ✅";

// DOM Elements
//let appContainer = document.getElementById(appID);

//
// Functions
//
/*function boxChecked(event) {
  const element = event.target;
  if(element.type === "checkbox") {
      if( element.checked ){
          element.parentNode.style.textDecoration = "line-through";
          element.parentNode.style.opacity = 0.5;

          const parent = element.parentElement.parentElement;
          parent.appendChild(element.parentElement);
      }else{
          element.parentNode.style.textDecoration = "none";
          element.parentNode.style.opacity = 1;

          const parent = element.parentElement.parentElement;
          parent.insertBefore(element.parentElement, parent.firstChild);
      }
  }*/

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
/*
//
// Inits & Event Listeners
//
inititialise(); */

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
    let tempButton = document.createElement("button");
    tempButton.innerHTML = "❌";
    li.appendChild(tempButton);
    
  }
  inputBox.value = "";
  saveData();
}
function clearAll() {
  listContainer.innerHTML = "";
  saveData();
}
function clearCompleted() {
  let completed = document.getElementsByClassName("checked");
  while (completed.length > 0) {
    completed[0].parentNode.removeChild(completed[0]);
  }
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData()
  }
  else if (e.target.tagName === "BUTTON") {
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

todoEmptyState.classList.add("hidden");

// Citations and References: https://m.youtube.com/watch?v=G0jO8kUrg-I&pp=ygUGI3l1ZGl2
// GreatStack March 20, 2023



