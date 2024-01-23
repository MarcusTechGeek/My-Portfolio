// // creating a function
// firstfunction = function () {
//     console.log("Hello wold!");
// };
// //calling the function
// firstfunction();

// //created a function
// sayHelloTo = function (name) {
//     console.log("Hello " + name + "!");
// }
// //calling a function
// sayHelloTo("marcus");// to say hello to nick, put nick between " " instead of marcus
// sayHelloTo("Nick");
// sayHelloTo("Lyra");


// //let argeu=function(argument){
// //   console.log("my argument was "+argument);
// //}

// // calling a function to draw cats!
// drawcats = function (howmanytimes) {
//     for (let i = 0; i < howmanytimes; i++) {
//         console.log(i + " ^.^ ");
//     }
// }
// // calling the function
// drawcats(100);



// printMultipleTimes = function (howManyTimes1, whatToDraw) {
//     for (let i = 0; i < howManyTimes1; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// };
// printMultipleTimes(10, "*");// the first argument comes first then the second one
// printMultipleTimes(5, ":)");



// double = function (number) {
//     return number * 2;
// };
// console.log(double(6));// this will be 12
// console.log(double(5) + double(6)); // this will do (5*2)+(6*2)
// console.log(double(double(3)))//this will be 3*2 then 6*2


let randomWords = ["Planet", "Worm", "Flower", "Computer"];
let randomWords1 = (["Charlie", "Raj", "Nicole", "Kate", "Sandy"]);
//function to pick a random word from an array
function pickrandomword(word) {
    return word[Math.floor(Math.random() * word.length)];
}
console.log(pickrandomword(randomWords));//call the array in the function
console.log(pickrandomword(randomWords1));


// a random insult generator
let randomBodyParts = ["Face", "Nose", "Hair"];
let randomAdjectives = ["Smelly", "Boring", "Stupid"];
let randomWords2 = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];


// here we use the functionn we created previosly calles pickrandomword to call one random word out of each array to create
//an random insult

console.log("Your " + pickrandomword(randomBodyParts) + " is " + pickrandomword(randomAdjectives) + " like a " + pickrandomword(randomWords2));

//creating a function to collect the randomley generated insults to just call the function
// we also use the previously created function to pick a random word in this  function
function generateRandomInsult() {
    let string = "Your " + pickrandomword(randomBodyParts) + " is " + pickrandomword(randomAdjectives) + " like a " + pickrandomword(randomWords2);
    return string;
}
console.log(generateRandomInsult());


function fithLetter(name) {
    if (name.length < 5) {//using an if statement to test for a property and leave the function early if name is shorter than 5 indexes
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};
console.log(fithLetter("marcus"));


//using an if statement in the function to test and return the values if true
function medalForScore(score) {
    if (score < 3) {
        return "Bronze";
    }
    if (score < 7) {
        return "Silver";
    }
    return "Gold";
};
console.log(medalForScore(10));


//challange 1
function multiply(num, num2) {
    return num * num2;
}
function adding(nr, nr2) {
    return nr + nr2;
}
console.log(adding(777, multiply(36325, 9824)));

//challange2

function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) {   //check if the length of the two arrays are the same
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(areArraysSame([1, 2, 3], [1, 3, 3]));

