//task//

// function sayHello (Alie) {
//     decodeURIComponent.getElementbyId("p").innerHTML= 'Alice';

// }

// sayHello('Hello, Alice!');

function sayHello(Name) {
    document.getElementById("p").innerHTML = `Hello,${Name}`;
};
sayHello("alice");


//task2//
square = function (number) {
    return number ** 2;
}
console.log(square(5)); 

square = function (num) {
    return num ** 2;
}
console.log(square(2)); 

//task3//
let x = abc( 2, 3)
function abc(p1 , p2) {
    return p1 * p2 
}
console.log(x);

let i = abc( 4, 5)
function abc(p1 , p2) {
    return p1 * p2 
}
console.log(i);


//task4//

const car = {
    make: "Toyota",
    model: "Camry",
      year: 2020,
      getCarInfo: function () {
          return this.make + " " + this.model + " (" + this.year + ")";
    }
  };
  console.log(car.make); 
  console.log(car.getCarInfo());  


  //task5//

function Colors(colors) {
    for (let i = 0; i < colors.length; i++){
        console.log(colors[i]);
    }
};
let colors = ["Red", "Green", "Blue", "Black"];
Colors(colors); 


//task6*//

function getString(str) {
    return str.length;
}
console.log(getString("Hello"));  
console.log(getString("JavaScript"));  


//TASK7//

function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hello")); 
console.log(toUpperCase("world")); 


//TASK8//

function splitString(str, d) {
    let arr = str.split(d);
    return arr;
}
console.log(splitString("Hello,World", ",")); 
console.log(splitString("JavaScript is fun", " "));  