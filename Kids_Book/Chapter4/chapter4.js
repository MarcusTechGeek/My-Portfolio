//objects
let cat = {
    "legs": 3,
    "name": "Harmony",
    "color": "Tortoiseshell"
};
let dog = {
    name: "Pancake",
    age: 6,
    color: "white",
    bark: "Yip yap yip!"
};
let ncat = {
    name: "Harmony",
    age: 8,
    color: "tortoiseshell"
};
let cow = {};
let ndog = {
    name: "Pancake",
    legs: 4,
    isAwesome: true,
    isBrown: true,
};
let dinosaurs = [
    { name: "Tyrannosaurus Rex", period: "Late Cretaceous" },
    { name: "Stegosaurus", period: "Late Jurassic" },
    { name: "Plateosaurus", period: "Triassic" }
];

let anna = {
    name: "Anna",
    age: 11,
    luckyNumbers: [2, 4, 8, 16]
};

let dave = {
    name: "Dave",
    age: 5,
    luckyNumbers: [3, 9, 40]
};

let kate = {
    name: "Kate",
    age: 9,
    luckyNumbers: [1, 2, 3]
};
let friends = [anna, dave, kate];

let owedMoney = {}
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Jimmy"] += 3;

//console.log(owedMoney.Jimmy);
// console.log(owedMoney);

//these are objects stored inside of an object
let movies = {
    "Finding Nemo": {
        releaseDate: 2003,
        duration: 100,
        actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        format: "DVD"
    },
    "Star Wars: Episode VI - Return of the Jedi": {
        releaseDate: 1983,
        duration: 134,
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
        format: "DVD"
    },
    "Harry Potter and the Goblet of Fire": {
        releaseDate: 2005,
        duration: 157,
        actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
        format: "Blu-ray"
    }
};
let findingNemo = movies["Finding Nemo"];
//console.log(findingNemo.duration);
//console.log(findingNemo.format);

//assigning a new movie tothe object called movies
let cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Owen Wilson", "Bonnie Hunt", "Paul Newman"],
    format: "Blu-ray"
};
movies["Cars"] = cars;

//console.log(Object.keys(movies));

// these are all characteristics of the cat, to access 3 you would use legs instead of index 1
// you can use both of these ways to access the data, unless the key is two words, then  you have to use [""]
//console.log(cat["legs"]); console.log(cat.legs);
//console.log(dog["name"]); console.log(dog.age)

//this will display all the keys of the object
//console.log(Object.keys(dog));  console.log(Object.keys(ncat));

cow["legs"] = 4;
//or
cow.name = "pieter";
cow["color"] = "black and white";
//console.log(cow);
//console.log(dog.isBrown);
//console.log(dinosaurs[1]["name"]);
//console.log(dinosaurs[2].period);
//console.log(friends[1]);//first search the name in the array then the item key in object
//console.log(friends[2].name);
//console.log(friends[1].luckyNumbers[2]);//this will be dave 40
//console.log(friends[2].luckyNumbers[0]);
//console.log(friends[0].luckyNumbers[3]);
//console.log(friends[1].luckyNumbers[1]);
//console.log(friends[0]);
//console.log(friends[2].age);
//console.log(friends);

let scores = {
    pieter :0,
    shara  :0,
    johan  :0,
    jamie  :0,
}
let inc = prompt("Who scored a goal?").toLowerCase();
scores[inc]+=1;
console.log(scores);

let myCrazyObject = {
    "name": "A ridiculous object",
    "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
    "random animal": "Banana Shark"
    };
let nr=myCrazyObject["some array"][2].number;
console.log(nr);
