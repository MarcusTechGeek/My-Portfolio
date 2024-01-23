// changing my html elements using the id i created for them in my html file

document.getElementById("myName").innerHTML = "Marcus Gouws";
//document.getElementById("aboutMe").innerHTML="This is my changed discription";
document.getElementById("first").innerHTML = "Hunting";
document.getElementById("second").innerHTML = "Cars";
document.getElementById("third").innerHTML = "Games";

//changing my image properties using js
let img = document.getElementById("me");
img.height = 400;
img.width = 400;

let one;
let two;
let three;
let height;
let width;
function change() {
    //text change
    one = prompt("new item one?");
    document.getElementById("first").innerHTML = one;
    two = prompt("New item two?");
    document.getElementById("second").innerHTML = two;
    three = prompt("new item three?");
    document.getElementById("third").innerHTML = three;

    //image properties change
    let img1 = document.getElementById("me");
    height = parseInt(prompt("new height of image"));
    img1.height = height;
    width = parseInt(prompt("new image width"));
    img1.width = width;
}
document.getElementById("changeList").onclick = change;