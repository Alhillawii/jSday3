//task//

// function sayHello (Alie) {
//     decodeURIComponent.getElementbyId("p").innerHTML= 'Alice';

// }

// sayHello('Hello, Alice!');

function sayHello(Name) {
    console.log('Hello, '+ Name + "!")

};
sayHello('Alice');
sayHello('Bob')




//task2//
square = function (number) {
    return number ** 2;
}
console.log(square(5)); 
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

  let colors = ["Red", "Green", "Blue"];
function printColors(colors) {
    for (let i = 0; i < colors.length; i++){
        console.log(colors[i]);
    }
};

printColors(colors); 


//task6*//

function getStringLength(str) {
    return str.length;
}
console.log(getStringLength("Hello"));  
console.log(getStringLength("JavaScript"));  


//TASK7//

function toUpperCase(s) {
    return s.toUpperCase();
}
console.log(toUpperCase("hello")); 
console.log(toUpperCase("world")); 


//TASK8//

function splitString(str, d) {
     return str.split(d)
}
console.log(splitString("Hello,World", ",")); 
console.log(splitString("JavaScript is fun", " "));  