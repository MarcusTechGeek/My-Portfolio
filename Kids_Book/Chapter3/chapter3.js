//Arrays
let dinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus", "Triceratops", "Brachiosaurus", "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];
//console.log(Dinosaurs[0]);//get the firt one
//console.log(Dinosaurs[Dinosaurs.length-1]); //to get the last one
//console.log("This is the 4'th dinosaur: "+dinosaurs[3]); 
//console.log("This is the 7'th dianosaur: "+dinosaurs[6]);

dinosaurs[0] = "Triceratops";//changed the name of the first dinosaur
//console.log("The changed dinosaur is Triceratops from "+dinosaurs[0]);
dinosaurs[0] = "T-Rex";
dinosaurs[1] = "Velociraptor";
dinosaurs[2] = "Stegosaurus";
dinosaurs[3] = "Triceratops";
dinosaurs[4] = "Brachiosaurus";
dinosaurs[5] = "Pteranodon";
dinosaurs[6] = "Apatosaurus";
dinosaurs[7] = "Diplodocus";
dinosaurs[8] = "Compsognathus";
dinosaurs[33] = "Philosoraptor";// this will show that there is 24 empty spaces
//console.log(dinosaurs);

let dianosaurAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
//console.log(dianosaurAndNumbers[2][0]);
//console.log(dianosaurAndNumbers[2][2]);// first[] is the array pos, second[] is witch pos in the array
//console.log(dianosaurAndNumbers[3]); // when there is two arrays in one, oly seach string pos in first array
//console.log(dianosaurAndNumbers[2][1]);

let maniacs = ["Yakko", "Wakko", "Dot"];
//console.log(maniacs[0]);
//console.log(maniacs[1]);
//console.log(maniacs[maniacs.length-1]);
//console.log(maniacs.length);

let animals = [];
animals.push("Cat");// this will add cat to the first pos of the array
animals.push("Dog");
animals.push("Llama");
//console.log(animals[animals.length]);
animals.unshift("Monkey");//this will add the animal to the front, thus now being in pos 0
animals.unshift("Polar Bear");

let removed = animals.pop();// removes the last animal from the length-1
//console.log(removed);
let firstanimal = animals.shift();//removes the first animal
//console.log(firstanimal);

//joining arrays
let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
let scalyAnimals = ["Boa Constrictor", "Godzilla"];
let featheredAnimals = ["Macaw", "Dodo"];
let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);//use concat to joine one or more arrays using , to seperate the arrays 
//being added together
let allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
//console.log("This is the Furry animals: "+furyAnimals[furryAnimals.length]);
//console.log("This is the scaly animals: "+scalyAnimals[scalyAnimals.length]);
//console.log("This is the feathered anials: "+featheredAnimals[featheredAnimals.length]);

//console.log("the first two arrays together :"+furryAndScalyAnimals[furryAndScalyAnimals.length]);
//console.log("This is all the animals: "+allAnimals[allAnimals.length]);

let colors = ["red", "green", "blue"];
//console.log(colors.indexOf("blue"));// using indexof will tel you the pos of the spesific data you are looking for in the array
//console.log(colors.indexOf("red"));
//console.log(colors.indexOf("purple"));// if the does not exist it will be an result of -1

let boringAnimals = ["Monkey", "Cat", "Fish", "Lizard"];
//using join will put all the words together as a string, put " " in the bracket to remove , and use spaces.
//you can use any characters in the brackets.
//console.log(boringAnimals.join(" "));
//console.log(boringAnimals.join(" - "));// this will have - instead of commas
//console.log(boringAnimals.join(" * "));
//console.log(boringAnimals.join(" sees "));
//console.log(boringAnimals.join());

let myNames = ["Nicholas", "Andrew", "Maxwell", "Morgan"];
//console.log(myNames.join());
//console.log(myNames.join(" "));
//console.log(myNames.join(" - "));
//console.log(myNames.join(" * "));
//console.log(myNames.join(" sees "));

let ages = [11, 14, 79];
//console.log(ages.join());
//console.log(ages.join(" "));
//console.log(ages.join(" - "));
//console.log(ages.join(" * "));
//console.log(ages.join(" sees "));
let h = 1;// this in not used for anyhthing


//math functions
let randomnum1 = Math.random();// this will give you a random decemal number, Math has to be capital M
//let randomwords = ["Explosion", "Cave", "Princess", "Pen", "Chocelate", "Car", "House"];
//let randomIndex = Math.floor(Math.random() * randomwords.length);// this will give you a random word out of the array between 1-3
let phrases = ["That sounds good", "Yes, you should definitely do that", "I'm not sure that's a great idea", "Maybe not today?", "Computer says no."];
//let randomBodyParts = ["Face", "Nose", "Hair"];
//let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//let word1=randomBodyParts[Math.floor(Math.random()*randomBodyParts.length)];
//let word2=randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
//let word3=randomWords[Math.floor(Math.random()*randomWords.length)];
let bodypart=["heart","arms","legs","eyes"];
let adjective=["suspicious","ugly","round","fat","disgusting"];
let animal=["pig","horse","crocodile","dog","buffalo"];
let animalbdy=["mouth","tail","nose","tail","fur"];
let numbers=[5,4,3,2,1].join(" is bigger than ");
let phrase=[
    "your ",
    bodypart[Math.floor(Math.random() * bodypart.length)],
    "are ",
    adjective[Math.floor(Math.random() * adjective.length)],
    "like a ",
    animal[Math.floor(Math.random() * animal.length)],
    animalbdy[Math.floor(Math.random() * animalbdy.length)],
    "."
]
let phrase1=[
    "your",
    bodypart[Math.floor(Math.random() * bodypart.length)],
    "are ",
    adjective[Math.floor(Math.random() * adjective.length)],
    "like a",
    animal[Math.floor(Math.random() * animal.length)],
    animalbdy[Math.floor(Math.random() * animalbdy.length)],
    "."
].join(" ");



//console.log(randomnum1);
//console.log(Math.random());// you may use any one of the two
//console.log(Math.random()*10);// this will give you a number between 0-9, still has decemals
//console.log(Math.random()*11); // the biggest number you can get is 10
//console.log(Math.floor(Math.random()*10));// this will cut off the decemal number
//console.log(Math.floor(Math.random()*10)+1)// this will give you a number between 1-10
//console.log(randomwords[randomIndex]);
//console.log(phrases[Math.floor(Math.random() * phrases.length)]);
//console.log("Your "+word1+" is "+word2+" like a "+word3+".");
console.log(phrase.join(" "));
console.log(numbers);




