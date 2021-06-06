//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log(arr);
console.log(sorted);

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name);

console.log(names);

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  return users.reduce((acc, user) => acc + user.age, 0) / users.length;
}

console.log(getAverageAge(arr)); 
  
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

function unique(arr) {
  let resultUnique = [];

  for (let str of arr) {
    if (!resultUnique.includes(str)) {
      resultUnique.push(str);
    }
  }

  return resultUnique;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

function sum(a) {
  return function(b) {
    return a + b;
  };
}

console.log(sum(1)(2));
console.log(sum(5)(-1));

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15];

function inBetween(a, b) {
  return function(x) {
    return ((x >= a) && (x <= b));
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}

console.log(arr.filter(inBetween(3, 6)));
console.log(arr.filter(inArray([1, 2, 10])));

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->

function fib(n) {
  let x = 1;
  let y = 1;
  for (let i = 3; i <= n; i++) {
    let z = x + y;
    x = y;
    y = z;
  }
  return y;
}

console.log(fib(3));
console.log(fib(7)); 
console.log(fib(77));