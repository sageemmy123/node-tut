// const testFunction = (req, res) => {
//     return res * req
   
// }
 
// const cars1 = ['1','2','3'];

// const cars2 = ['6','5','4'];

// const combined = [cars1, ...cars2];
//  console.log(combined)

//finding maximum number from an array
// const numbers = [23,55,21,87,56];
// let maxValue = Math.min(...numbers);

// console.log(maxValue)

//--Looping over a Array
// const cars = ["BMW", "Toyota", "Mercedes","Volvo"]
// let text = ''

// for (let x of cars){
//     text += x + " "
// }

//-- Looping over string
// let language = "JavaScript"
// let text = ""

// for (let x of language){
//     text +=  x + " " 

// }
// console.log(text)

// ----Create a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);

// let text = "";
// fruits.forEach (function(value, key) {
//   text += key + ' = ' + value;
// })
// console.log(text)
// const test =  fruits.get("oranges")
  //const test = fruits.set("bananas",1000)


//---Classes in Javascript
//   class Car {
//     constructor(name, year, make, version, gender) {
//       this.name = name
//       this.year = year
//       this.make = make
//       this.version = version
//       this.gender = gender
//     }
//   }
//   const myCar = new Car('Audi', '2022','German','Q5','Male')

//   const myCar2 = new Car('Toyota', '1994','American','Q5','Femal')

//   console.log(myCar2, + " ", + myCar)
  
  

// const myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//    console.log(value)
//   });

//   const mySecond = new Promise(function(myResolve,myReject){
//     setTimeout(function(){
//         myResolve("Promise Done!")
//     },3000)
//     setTimeout(function(){
//         myReject('Failed')
//     },5000)
//   })

//   mySecond.then(function(value){
//     console.log(value)
//   })
//---Symbols
// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age: 50,
//     eyeColor: "Blue"
// }

// let id = Symbol('id')
// person[id] = 140353

// console.log(person.eyeColor)

// function myFunction(x, y = 10) {
//     // y is 10 if not passed or undefined
//     return x + y;
//   }
//   myFunction(5); // will return 15


//   console.log(myFunction(6))
  //function rest Parameter
// function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     return sum;
//   }
  
//   let x = sum(4, 9);


//   console.log(x)


// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.find(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }

// console.log(myFunction(numbers[1,4],1,numbers))