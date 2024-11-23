let rightElements = document.getElementById("right-container");
let leftElements=document.getElementById("left-container");
let allLeftButton = document.getElementById("move-all-left");
let leftButton = document.getElementById("move-left");
let rightButton = document.getElementById("move-right");
let allRightButton = document.getElementById("move-all-right");
let itr;
let initial = "border-color:black;color:black;cursor:pointer";
let disabled = "border-color:RGB(0, 0, 0,0.3);color:RGB(0, 0, 0,0.3);cursor:not-allowed";
allLeftButton.onclick = moveAllLeft;
allRightButton.onclick = moveAllRight;
leftButton.onclick = moveLeft;
rightButton.onclick = moveRight;

function moveLeft() {
    let selected = rightElements.querySelectorAll("input[type='checkbox']:checked");
    if(selected.length>0) {
        allRightButton.style.cssText+=initial;
        leftButton.style.cssText+=disabled;
    }
    for(itr=0;itr<selected.length;itr++) {
        selected[itr].checked = false;
        leftElements.append(selected[itr].parentNode);
    }    
}

function moveRight() {
    let selected = leftElements.querySelectorAll("input[type='checkbox']:checked");
    if(selected.length>0) {
        allLeftButton.style.cssText+=initial;
        rightButton.style.cssText+=disabled;
    }
    for(itr=0;itr<selected.length;itr++) {
        selected[itr].checked = false;
        rightElements.append(selected[itr].parentNode);
    }
    
}

function moveAllLeft() {
    // allRightButton.removeAttribute("disabled");

    allRightButton.style.cssText += initial;
    let boxes = rightElements.querySelectorAll("input");
    for(itr=0;itr<boxes.length;itr++) {
        boxes[itr].checked = false;
    leftElements.append(boxes[itr].parentNode);
    }
    // allLeftButton.setAttribute("disabled",""); 
    allLeftButton.style.cssText += disabled;
}
function moveAllRight() {
    console.log("clicked");
    allLeftButton.style.cssText += initial;
    let boxes = leftElements.querySelectorAll("input");
    for(itr=0;itr<boxes.length;itr++) {
        boxes[itr].checked = false;
    rightElements.append(boxes[itr].parentNode);
    }
    allRightButton.style.cssText += disabled;
}
