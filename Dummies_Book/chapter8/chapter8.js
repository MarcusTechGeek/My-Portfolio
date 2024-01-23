let dreamCar = {    
    make: "Boxter Sport",   
    model: "44",    
    color: "blue",    
    year: 1944,
    bodyStyle: "Luxury Car",    
    price: 4500 };

function updateCar(){
    document.getElementById("pricetag").innerHTML=dreamCar.price;
    document.getElementById("modelyear").innerHTML=dreamCar.year;
    document.getElementById("body").style.backgroundColor=dreamCar.color;
    document.getElementById("body").innerHTML=dreamCar.make+" "+dreamCar.model;
}
updateCar();
    