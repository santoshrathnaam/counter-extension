let count = 0;
let target = 10;

const countDisplay = document.getElementById("count");
const targetInput = document.getElementById("target");
const status = document.getElementById("status");

function updateDisplay() {

    countDisplay.textContent = count;
    status.textContent = count + " / " + target;

    if (count === target) {

        status.textContent = "Hurray! Target Reached!";

        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon.png",
            title: "Simple Counter",
            message: "Hurray! Target of " + target + " has been reached!"
        });
    }
}


document.getElementById("increase").addEventListener("click", function() {

    count++;
    updateDisplay();

});


document.getElementById("decrease").addEventListener("click", function() {

    count--;
    updateDisplay();

});


document.getElementById("reset").addEventListener("click", function() {

    count = 0;
    updateDisplay();

});


document.getElementById("setTarget").addEventListener("click", function() {

    target = Number(targetInput.value);
    updateDisplay();

});