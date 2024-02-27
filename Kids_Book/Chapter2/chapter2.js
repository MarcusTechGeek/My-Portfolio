/*console.log(99 * 123);
console.log("This is a string".slice(0, 4));
console.log(true && false);
console.log(true && true);
console.log(12345+56789);
console.log(22+33+44);
console.log(1000-17);
console.log(123*456);
console.log(12345/250);
console.log(1234+((57*3)-(31/4)));//or(1234+57*3-31/4);
console.log(8/(1+3));
console.log((15+9)*2); 
//let age = 12;
//age = 13;
//console.log(age);  
//let numberOfSiblings = 1 + 3;
//let numberOfCandies = 8;
//let i = numberofCandies / numberOfSiblings;
//console.log(i);

let SecondsInAMinute = 60;
let MinutesInHour = 60;
let SecondsInHour = SecondsInAMinute * MinutesInHour;

let HourInDay = 24;
let SecondsInDay = SecondsInHour * HourInDay;

let DayInYear = 365;
let SecondsInYear = SecondsInDay * DayInYear;

let MyAge = 20 * SecondsInYear;

//console.log("You are " + MyAge + " Seconds Old");

//incrementing and decrementing

//++ wil increse var and-- wil decrese the var

let HighFives =0;
++ HighFives;
++ HighFives;
-- HighFives;
console.log(HighFives+" High Fives");*/

let HighSix = 0;
//console.log(HighSix++);
//console.log(HighSix++);

let x = 10;
x = x + 5;
//onsole.log(x);

let y = 10;
y += 7;
y -= 3;
//console.log(y);

let score = 10;
score += 7;
score -= 3;
//console.log(score);

let Balloons = 100;
Balloons *= 2;
//console.log(Balloons);

let Balloons2 = 100;
Balloons2 /= 4;
//console.log(Balloons2);

// This string will replace 5 bc it is assighned to the var after 5 was assighned
let MyThing = 5;
MyThing = "this is a string";
//console.log(MyThing);  

//assighn a string into var
let MyAwsomeString = "Something really awsome!!!";
//console.log(MyAwsomeString);

// adding two integers together will do the math and adding two string numbers together will add them as string "9"+"9" will be 99
let NumberNine = 9; //9+9=18
let StringNine = "9";//9+9=99
//console.log(NumberNine+NumberNine);
//console.log(StringNine+StringNine);

// Numberstring + Numberstring will be 18
//stirngnine + stringnine will be 99

// joining strings by adding them together
let Greeting = "Hello";
let MyName = "Marcus";
//console.log(Greeting+MyName);this will display HelloMarcus


//Adding two strings with a space
let Greeting1 = "Hello ";// add space behinde word in string
//console.log(Greeting1 + Myname); this will display as Hello marcus

//finding lenght of a string
// (Sting word .lenght)

let java = "Java";
//console.log(java.lenght); this will display as 4

let Script = "Script";
//Console.log(Script.lenght); this will display as 6

// adding two words togetgher will inc the string lenght
let Javascript = "Java" + "Script";
//console.log(Javascript.length) this will display as 10

// finding the pos of a character in a string will be used as [] starting from 0
//console.log(Myname[0]); this will display as M
//console.log(Myname[1]); will be a
//console.log(Myname[2]); will be r
//console.log(Myname[3]); this will be c and so forth

// adding specific characters of a string together
let Codeword1 = "are";
let Codeword2 = "Tubas";
let Codeword3 = "unsafe";
let Codeword4 = "?!";
//console.log(Codeword1[1]+Codeword2[1]+Codeword3[1]+Codeword4[1]); this will display as run!
// or code = Codeword1[1]+Codeword2[1]+Codeword3[1]+Codeword4[1];
// console.log(code);

// own code word
let Codeword11 = "on";
let Codeword21 = "nice";
let Codeword31 = "integer";
let Codeword41 = "onto";
let Codeword12 = "never";
let code1 = Codeword11[0] + Codeword21[0] + Codeword31[0] + Codeword41[0] + Codeword12[0];
//console.log(code1); // code word is onion


// cutting up stings
let LongString = "My long string is long";
//console.log(LongString.slice(3,14));// this will display as Long string this will select possitions from 3-13 so add one to subtract
//console.log(LongString.slice(15,17));//this will extract is
//console.log(LongString.slice(3,7));
//console.log(LongString.slice(3));// this will slice everythinf from the 3'rd pos

//uppercase & lowercase
let ucase = "Hello there how are you doing?";
//console.log(ucase.toUpperCase());// this will make the string uppercase
//console.log(ucase.toLowerCase());// this will take the text to lowe case

let silly = "hELlo THERE, hOW ARE yOu doINg?";
//console.log(silly[0].toUpperCase()+silly.slice(1).toLowerCase());// see page 29 in orange book, dark number

// Booleans
let javaiscool = true;
//console.log(javaiscool);// this will display true

//let shower = true;
//let bag = false;
//let ready = bag && shower;
//console.log("should i go to school? "+ready);the result will be false if both are not true

//let shower = confirm("Did you shower?");
//let bag = confirm("Do you have your bag?");
//C
//alert("should i go to school? "+ready1);

//let name1 =prompt("what is your name?");
//let shower = confirm("Did you shower?");
//let bag = confirm("Do you have your bag?");
//let apple = confirm("Do you have an apple?");
//let orange = confirm("Do you have an orange");
//let weekend = confirm("Is it weekend?");
//let ready1 = bag && shower;
//let fruit = apple || orange; // if either one is true then result is true, if both false then result is false
//let ready = fruit && ready1;
//alert(name+" You may go to school: "+ready);
//alert(ready&&!weekend);
//alert( name1 +" have to shower: "+weekend);
//let gotoschool=!weekend && shower &&(fruit);//!makes result oppesite
//alert("Go to school: "+gotoschool);

//let height = prompt("what is your hight?");
let restrict = 60;
let restrict1 = 48;
//let allowed = height >= restrict;
//let allowed = height<=restrict1;
//alert("You are allowed on ride: "+allowed);
//alert("You are allowed on the ride: "+ allowed);

//=== checks the value and the type to be the same, == it only test that the value are same not the type
let mysnum = 5;
let mysnum2 = 3;
//console.log(mysnum===mysnum2);//false
let hartgeuss = 7;
//console.log(mysnum===hartgeuss);//false
let gtouchgeuss = 5;
//console.log(mysnum===gtouchgeuss);//true

//let age2 = prompt("What is your age?");
//let accompanied = confirm("is an adult with you?");
let ageres = 13;
let WatchMovie = (age2 >= ageres) || accompanied;
//alert(WatchMovie);


