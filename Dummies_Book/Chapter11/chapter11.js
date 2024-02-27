let people = ["Kareem", "Fatma", "Sumaya", "Mr. Hobson", "Ms. Young", "Mrs. O' Doherty"];
let otherPeople = ["Emilie", "Mommy", "Dad", "Kathy"];

//converts elements of an array to a string
document.getElementById("peopleIKnow").innerHTML = people.toString();
document.getElementById("otherPeople").innerHTML = otherPeople.valueOf();
document.getElementById("join").innerHTML=people.join("#");

//put two arrays together
document.getElementById("concat").innerHTML = people.concat(otherPeople);

//search an index in array
document.getElementById("indexOf").innerHTML=people.indexOf("Fatma");
document.getElementById("lastIndexOf").innerHTML=otherPeople.lastIndexOf("Emilie");

//removes the last element in an array
document.getElementById("Pop").innerHTML=people.pop();

//add item to the last index of array
document.getElementById("push").innerHTML=otherPeople.push("Ted");

//reverse the indexes of an array
document.getElementById("reverse").innerHTML=people.reverse();

//remove first element of array
document.getElementById("shift").innerHTML=people.shift();

//add element to first index of array
document.getElementById("unshift").innerHTML=otherPeople.unshift("Teddy");

//cut out a certian section of array
document.getElementById("slice").innerHTML=people.slice(0,3);

//sort elements alphabettically
document.getElementById("sort").innerHTML=people.sort();

//add or remove elements in a certianindex of array
let splice;
splice=people.splice(1,0,"cathy");
document.getElementById("splice").innerHTML=people.join(", ");


