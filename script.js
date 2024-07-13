const container = document.querySelector(".notes-container");
const notes = document.querySelector(".input-box");

function AddNote(){
const inputBox = document.createElement("p");
// inputBox.className = "input-box";
inputBox.classList.add("input-box");
inputBox.contentEditable="true";
const deleteIcon = document.createElement("img");
    deleteIcon.src = "delete-icon.png"; 
    deleteIcon.alt = "delete-icon-image";
    deleteIcon.className = "delete-icon"; 
 inputBox.appendChild(deleteIcon);
container.appendChild(inputBox);
}