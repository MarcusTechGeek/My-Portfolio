// conditional loops

//let name1= prompt("What is your name?");
//console.log("Hello "+name1);
//if (name1.length>7){ //if the name provided in the name var is greaer than lenght 7 then wow.. wil display else the program will only greet.
//    console.log("wow you have a REALLY long name!");
//}

// this is a if else statement, it will test the lenght of your name
//if greater than 7 it will display you have a long name
// if smaller than 7 it will display that you  have a short name
//let name2 = prompt("what is your name?");
//console.log("Hello " + name2);
//if (name2.length > 7) {
//console.log("Wow, you have a REALLY long name!");
//} else {
//console.log("Your name isn't very long.");
//}

//this will check for the boolean awnser to test  for what food ou will eat, 
//the loop will keep running until it found a true value, if all are false the program 
//will stop and not print anything
//let food = ("what food do you want?");
//let lemonChicken = confirm("Chef do you have lemonChicken");
//let beefWithBlackBean = confirm("hef do you have beefWithBlackBean");
//let sweetAndSourPork = confirm("chef do you have sweetAndSourPork");

///if (lemonChicken) {
//console.log("Great! I'm having lemon chicken!");
//} else if (beefWithBlackBean) {
//console.log("I'm having the beef.");
//} else if (sweetAndSourPork) {
//console.log("OK, I'll have the pork.");
//} else {
//console.log("Well, I guess I'll have rice then.");
//};



/// use === to test with a prompt, otherwise awnser will be wrong!
let myname = "marcus";
let dad = "paul";
let mom = "charmaine";
//let name4 = prompt("name?").toLowerCase();

//if (name4 === myname){
//alert("hello me!")
//} else if (name4 === dad){
//alert("hi dad!")
//} else if(name4 === mom){
//alert("hi mom!")
//}else{
//alert("hi stranger!");
//};

// while loop
// sheepcount will keep increasing untill sheepkount is no longer smaller than 9
//let sheepcount =0;
//while (sheepcount<10){
//   console.log("i have counted "+sheepcount+" sheep");
//   sheepcount++
//}
//console.log("zzzzzzzzzzzzzzzz");

// the for loop
//this loop containes the var name and value, while the sheepcounted is smaller than 10 sheepcounted will inc and the 
//sentance will display untill sheepcoounted is no longer smaller than 10

//for (let sheepcounted =0; sheepcounted<10; sheepcounted++){
// console.log("i have counted "+sheepcounted+" sheep.");
//}
//console.log("zzzzzzzzzzz");

//say hello
//let timesToSayHello = 10;
//for(let i=0;i<timesToSayHello;i++){
//   console.log("Hello!");
//}

//counting animals
//let animal=["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
//for (let i=0; i<animal.length;i++){
//   console.log("there is a "+animal[i]);
//}

//let name = "Nick";
//for (let i = 0; i < name.length; i++) {
//console.log("name letter " + name[i] + ".");
//}

for (let x = 2; x < 10000; x = x * 2) {
    console.log("x is: " + x);
}

//try it out
for (let i = 3; i < 10000; i = i * 3) {
    // console.log(i+" is the next power of 3");
}
let i1 = 3;
while (i1 < 10000) {
    //console.log(i1+" is the next power of 3");
    i1*=3;
}

//programming challange
//challange1
let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
for (i = 0; i < animals.length; i++) {
    animals[i] = "Awsome " + animals[i];
    
}
//console.log(animals);

//challange2
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let i2 = 0;
string3:"";
let alphabet1 ="";
let string = Math.floor(Math.random() * alphabet.length);
let ex = alphabet[string];
//console.log(ex);

while (i2 < 6) {
    let string1 = Math.floor(Math.random() * alphabet.length);
    string1 = alphabet[string1];
    alphabet1 += string1;
    i2++
}
//console.log(alphabet1);
//challange3 

let input = "javascript is awsome!";
let output = "";
let i3 = 0;
while (i3 < input.length) {
    if (input[i3] === "a") {
        output += "4";

    } else if (input[i3] === "e") {
        output += "3";

    } else if (input[i3] === "i") {
        output += "1";

    } else if (input[i3] === "o") {
        output += "0";

    } else {
        output += input[i3];


    }
    i3++
}
//console.log(output);


