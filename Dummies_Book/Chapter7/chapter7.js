//changing elements in javascript using css divs
// document.getElementById("lefteye").style.backgroundColor="purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("body").style.border="2px black solid";
// document.getElementById("mouth").style.borderRadius="4px";
// document.getElementById("righteye").style.border="4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor="#FF00FF";
// document.getElementById("body").style.color="#FF0000";
// document.getElementById("head").style.borderTop="5px solid black";

// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius="360px";
// document.getElementById("rightarm").style.backgroundColor="green";
// document.getElementById("mouth").style.backgroundColor="pink";
alert("Tap on the body parts of the robot to make him dance!");
let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let rigtArm = document.getElementById("rightarm");
let head = document.getElementById("node");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
rigtArm.addEventListener("click",moveLeftRigt);
nose.addEventListener("click",moveLeftRigt1);

function moveUpDown(e) {
    let robortPart = e.target;
    let top = 0;

    let anemation = setInterval(frame, 10); //this will call frame every 10ms
    function frame() {
        robortPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(anemation);
        }
    }
}

function moveRightLeft(e) {
    let robortPart = e.target;
    let left = 0;
    let anemation1 = setInterval(frame, 10);
    function frame() {
        robortPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(anemation1);
        }
    }
}

function moveLeftRigt(e){
    let robortPart = e.target;
    let left = 70;
    let anemation2 = setInterval(frame, 10);
    function frame() {
        robortPart.style.left = left + '%';
        left--;
        if (left === 19) {
            clearInterval(anemation2);
        }
    }
}

function moveLeftRigt1(e){
    let robortPart = e.target;
    let left = 90;
    let anemation2 = setInterval(frame, 10);
    function frame() {
        robortPart.style.left = left + '%';
        left--;
        if (left === 45) {
            clearInterval(anemation2);
        }
    }
}