// //Positive numbers
// var arr = [-1, -2, -3, 1, 2, 3];
// var positive = arr.filter(function(n) {
//   return n < 0;
//
// });
// console.log(positive);
//
//
//
// //***even numbers
//
// var arr = [1, 2, 4, 9, 6, 10];
// var even = arr.filter(function(n) {
//   return n % 2 === 0;
// });
//
// console.log(even);

//***square the numbers

// var arr = [1, 2, 3];
//
//
// var product = arr.map(function(n) {
//   return n * n;
// });
//
// console.log(product);

//*****cities 1
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var citiesNames = cities.filter(function(cities) {
//   return cities.temperature < 70;
//
// });
//
// console.log(citiesNames);


//**cities 2
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
//
// var citiesNames = cities.map(function(cities) {
//   return cities.name;
// });
//
// console.log(citiesNames);


//**Good job

// var people = [
//   'Dom',
//   'Lyn',
//   'Kirk',
//   'Autumn',
//   'Trista',
//   'Jesslyn',
//   'Kevin',
//   'John',
//   'Eli',
//   'Juan',
//   'Robert',
//   'Keyur',
//   'Jason',
//   'Che',
//   'Ben'
// ];
//
// var greeting = people.forEach(function(person) {
//   console.log('Good Job, ' + person + '!');
// });

// sort an array 3

// var products = [
//   { name: 'Basketball', price: 12.00 },
//   { name: 'Tennis Racquet', price: 66.00 },
//   { name: 'Tennis Balls', price: 9.00 },
//   { name: 'Tennis Balls', price: 9.00 }
// ];
//
// var total = products.reduce(function(currentValue, product) {
//   return currentValue + product.price;
// }, 0);
//
//
// //***another example
// function total(array) {
//   function combine(currentValue, product) {
//     return currentValue + product.price;
//   }
//   var sum = array.reduce(combine, 0);
//   return sum;
// }
//
// var answer = total(products);

// var call3times =  "Hello, world";
//
// function call3times(hello) {
//   console.log("hello");
// }
//
// call3times(hello);
//
// setTimeout(function() {
//   console.log('hello,world!');
// }, 1000);


//
// function call3Times(hello) {
//   console.log('hello, world');
// }
//
// call3Times(hello);






//***product

// var arr = [3, 4, 5];
// var product = arr.reduce(function(a, b) {
//   return a + b;
// }, 0);
//
// console.log(product);



//***Str Join VIP

// var acronym = ['very', 'important', 'person'];
// var character = acronym.map(function(n) {
//   return n[0];
// });
//
// var combine = function(a,b) {
//   return a + b;
// };
//
// var strJoin = character.reduce(combine, "");

//*****NASA


// var acronym = ['national', 'aeronautics', 'space', 'administration'];
// var character = acronym.map(function(n) {
//   return n[o];
// });
//
// var combine = function(a,b) {
//   return a + b;
// };
//
// var strJoin = character.reduce(combine, "");

//*****str Multiply

// var arr = range(0,5);
// var times = 5;
// var str = 'abc';
//
//***first use
// var list = arr.map(function(n) {
//   return str;
// });
// var combine = function(a,b) {
//   return a + b;
// };
//
// var strJoin = list.reduce(combine, "");
//
// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

//

var width = 3;
var height = 4;
var star = "*";

// function range(min, max) {
//   var arr = [];
//   for (var i = min; i < max; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
