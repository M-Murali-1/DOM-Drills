let rightElements = document.getElementById("right-container");
let leftElements = document.getElementById("left-container");
let allLeftButton = document.getElementById("move-all-left");
let leftButton = document.getElementById("move-left");
let rightButton = document.getElementById("move-right");
let allRightButton = document.getElementById("move-all-right");

let initial = "border-color:black;color:black;cursor:pointer";
let disabled = "border-color:RGB(0, 0, 0,0.3);color:RGB(0, 0, 0,0.3);cursor:not-allowed";
allLeftButton.onclick = moveAllLeft;
allRightButton.onclick = moveAllRight;
leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;
// Attach event listeners to the checkboxes in both containers
attachCheckboxListeners(leftElements, rightElements);

// Initialize button states
updateButtonStates();

function moveLeft() {
    let selected = rightElements.querySelectorAll("input[type='checkbox']:checked");
    for (let checkbox of selected) {
        checkbox.checked = false;
        leftElements.append(checkbox.parentNode);
    }
    updateButtonStates(); // Update button states after moving items
}

function moveRight() {
    let selected = leftElements.querySelectorAll("input[type='checkbox']:checked");
    for (let checkbox of selected) {
        checkbox.checked = false;
        rightElements.append(checkbox.parentNode);
    }
    updateButtonStates(); // Update button states after moving items
}

function moveAllLeft() {
    let boxes = rightElements.querySelectorAll("input[type='checkbox']");
    for (let checkbox of boxes) {
        checkbox.checked = false;
        leftElements.append(checkbox.parentNode);
    }
    updateButtonStates(); // Update button states after moving items
}

function moveAllRight() {
    let boxes = leftElements.querySelectorAll("input[type='checkbox']");
    for (let checkbox of boxes) {
        checkbox.checked = false;
        rightElements.append(checkbox.parentNode);
    }
    updateButtonStates(); // Update button states after moving items
}

function attachCheckboxListeners(leftContainer, rightContainer) {
    // Add 'change' event listeners to all checkboxes in both containers
    const allCheckboxes = leftContainer.querySelectorAll("input[type='checkbox'], input[type='checkbox']");
    allCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateButtonStates);
    });
}

function updateButtonStates() {
    // Check if any checkbox is selected in the right container
    const rightSelected = rightElements.querySelectorAll("input[type='checkbox']:checked").length > 0;
    // Check if any checkbox is selected in the left container
    const leftSelected = leftElements.querySelectorAll("input[type='checkbox']:checked").length > 0;
    console.log(rightSelected,leftSelected);
    
    // Enable or disable the buttons accordingly
    leftButton.style.cssText += rightSelected ? initial : disabled;
    rightButton.style.cssText += leftSelected ? initial : disabled;

    // Check if there are items in each container to enable/disable "Move All" buttons
    allLeftButton.style.cssText += rightElements.querySelectorAll("input").length > 0 ? initial : disabled;
    allRightButton.style.cssText += leftElements.querySelectorAll("input").length > 0 ? initial : disabled;
}
