let data = ["Add contact details for further communications.", "Add shipping address for successful delivery", "Complete Payment to complete the order.", "Ready to get delivered!", "Order Delivered successfully🎉"];
let counter = 0;
let numbering = ["zero", "one", "two", "three"];
let previous_btn = document.getElementById("previous");
let next_btn = document.getElementById("next");
let initial = "background-color:RGBA(128, 128, 128, 0.5);color:black;";
let active = "background-color:blue;color:white;";
let finished = "background-color:green;color:white;";
previous_btn.onclick = back;
next_btn.onclick = move;
let required, required_hr;

let content = document.querySelector("#content-data");
content.innerHTML = data[counter];
function back(callback) {
    counter--;
    console.log(counter);
    content.innerHTML = data[counter];
    if (counter == 0) {
        previous_btn.setAttribute("disabled", "");
        required = document.querySelector(`div.${numbering[counter - 1]}`);
    }
    if (counter != 4) {
        next_btn.removeAttribute("disabled");
        next_btn.innerHTML = "Next";
    }
    if (counter < 3) {
        required_hr = document.querySelector(`hr.${numbering[counter + 1]}`);
        required = document.querySelector(`div.${numbering[counter + 1]}`);
        required.style.cssText += initial;
        required_hr.style.cssText += "background-color:gray";
    }
    required = document.querySelector(`div.${numbering[counter]}`);
    console.log(counter, required, required_hr);
    required.style.cssText += active;
    required.innerHTML = counter + 1;
}
function move(callback) {
    counter++;
    content.innerHTML = data[counter];
    if (counter != 0) {
        previous_btn.removeAttribute("disabled");
    }
    if (counter == 4) {
        next_btn.setAttribute("disabled", "");
        next_btn.innerHTML = "Finish";
    }



    required = document.querySelector(`div.${numbering[counter - 1]}`);
    required.style.cssText += finished;
    required.innerHTML = "&#x2713;"
    if (counter != 4) {
        required_hr = document.querySelector(`hr.${numbering[counter]}`);
        required_hr.style.cssText += finished;
        required = document.querySelector(`div.${numbering[counter]}`);
        required.style.cssText += active;
    }
}

