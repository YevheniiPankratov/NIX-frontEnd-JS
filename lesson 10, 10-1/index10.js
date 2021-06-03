//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

function readNumber() {
    let number;
  
    do {
        number = prompt("Enter a number",);
    } while ( !isFinite(number) );
  
    if (number === null || number === '') return null;
    console.log(`Number: ${number}`);
    return number;
  }

//   readNumber()
  
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

function random(min, max) {
    return min + Math.random() * (max - min);
}
  
  console.log(random(1, 5));
  console.log(random(1, 5));
  console.log(random(1, 5));

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

function randomInteger(min, max) {
    let randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
}
  
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));
console.log(randomInteger(1, 5));

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}
  
console.log(ucFirst("вася"));

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

function checkSpam(str) {
    let newLowerStr = str.toLowerCase();
    return newLowerStr.includes('viagra') || newLowerStr.includes('xxx');
}
  
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->

function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '...' : str;
}

//    <------- Ex 9 ------->
//    <------- Ex 9 ------->
//    <------- Ex 9 ------->


function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue('$120') === 120);


//    <------- Ex 10 ------->
//    <------- Ex 10 ------->
//    <------- Ex 10 ------->

function sumInput() {

    let numbers = [];
    while (1) {
      let value = prompt("Введите значение", '');
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
// console.log( 'Общая сумма:', sumInput());

//    <------- Ex 11 ------->
//    <------- Ex 11 ------->
//    <------- Ex 11 ------->

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
    let maxSum = 0; 
    let continuouSsubarray = 0; 
  
    for (let item of arr) {
        continuouSsubarray += item;
      maxSum = Math.max(maxSum, continuouSsubarray);
      if (continuouSsubarray < 0) continuouSsubarray = 0;
    }
  
    return maxSum;
}
// getMaxSubSum(arr)

//    <------- Ex 12 ------->
//    <------- Ex 12 ------->
//    <------- Ex 12 ------->

// Первый и второй вариант работают одинаково, отличий считаю нет.

//    <------- Ex 13 ------->
//    <------- Ex 13 ------->
//    <------- Ex 13 ------->

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}

//    <------- Ex 14 ------->
//    <------- Ex 14 ------->
//    <------- Ex 14 ------->

function min(a, b) {
    return console.log(Math.min(a, b));
}

min(2, 5)
min(3, -1)
min(1, 1)

//    <------- Ex 15 ------->
//    <------- Ex 15 ------->
//    <------- Ex 15 ------->

function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
// let x = prompt("x?", '');
// let n = prompt("n?", '');

// if (n < 1) {
//     console.log(`${n} не натуральное число`);
//   } else {
//     console.log(pow(x, n));
// }

//    <------- Ex 16 ------->
//    <------- Ex 16 ------->
//    <------- Ex 16 ------->

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

//    <------- Ex 17 ------->
//    <------- Ex 17 ------->
//    <------- Ex 17 ------->

function robinsonsCrusoes () {
    let salary = 3333; 
    let monthlyExpenses = 1750;
    let palm = 8000;
    let months = 1;
    if ((salary - monthlyExpenses) < palm) {
        while((salary - monthlyExpenses) < palm) {
            months += 1;
            salary += 3333;
            monthlyExpenses += 1750
        }
        console.log(`За ${months} месяцев можно купить пальму.`);
    }
}
robinsonsCrusoes()

//    <------- Ex 18 ------->
//    <------- Ex 18 ------->
//    <------- Ex 18 ------->

function ex18() {
    let sumNumbers = 0;
    for(let i = 0; i < 10; i++) {
        let questionNum = +prompt('Enter a number', '')
        if (questionNum < 0) {
            sumNumbers += questionNum;
        }
    }
    return +sumNumbers
}

// console.log('Sum negative numbers is', ex18());