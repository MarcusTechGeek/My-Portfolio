// this is the var to assign secret value between 1-20
let secret =Math.floor(Math.random()*21);
// the user inters a number between 1-20 and string is put into integer
let geuss = parseInt(prompt("Geuss a number between 0-20"));
//let geussint = parseInt(geuss);


//while secret is not equal to geuss do

while(secret!=geuss){
    //if secret is greater than geuss show " Your number is too low!"
    if(secret>geuss){
        alert("Your number is too low!");
        //else show "Your number is too high!"
    } else if (isNaN(geuss)){
        alert("Please enter a number!");
    } else{
        alert("Your number is too high!");
    };
    geuss= parseInt(prompt("Geuss a number between 1-20"));
};

if (secret === geuss){
    alert("You are correct! The Number is: "+secret);
};