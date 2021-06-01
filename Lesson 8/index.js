//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

// Последнее значение будет = 1, потому что оно последнее число перед 0, дальше будет 0 и не будет работать while.

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

function ex2(a, b, c) {
    if((a <= b) && (b <= c)) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= (-1);
        b *= (-1);
        c *= (-1);
    }
    console.log(`a=${a}, b=${b}, c=${c}`);
}
ex2(1, 2, 3)

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

function ex3(a, b, c) {
    if((a <= b) && (b <= c) || (a >= b) && (b >= c)) {
        a *= 2;
        b *= 2;
        c *= 2;
    } else {
        a *= (-1);
        b *= (-1);
        c *= (-1);
    }
    console.log(`a=${a}, b=${b}, c=${c}`);
}
ex3(3, 2, 1)

//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

function ex4 (a, b, c) {
    if(Math.abs(a - b) < Math.abs(a - c)) {
        console.log('Point is B, distance is', Math.abs(a - b));
    } else {
        console.log('Point is C, distance is', Math.abs(a - c));
    }
}
ex4(1, 5, 2)

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

function ex5 (x, y) {
    if ((x === 0) && (y === 0)) {
        console.log('0');
    } else if (x === 0) {
        console.log('1');
    } else if (y === 0) {
        console.log('2');
    } else {
        console.log(3);
    }
}
ex5(1, 0)

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

function ex6 (x, y) {
    if ((x > 0) && (y > 0)) {
        console.log('Точка лежит в I координатной четверти');
    } else if ((x < 0) && (y > 0)) {
        console.log('Точка лежит в II координатной четверти');
    } else if ((x < 0) && (y < 0)) {
        console.log('Точка лежит в III координатной четверти');
    } else if ((x > 0) && (y < 0)) {
        console.log('Точка лежит в IV координатной четверти');
    }
}
ex6(1, 1)

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

function ex7 (x1, y1, x2, y2, x3, y3) {
    if (x2 == x3) {
        console.log('x4 =', x1);
    } else if (x3 == x1) {
        console.log('x4 =', x2);
    } else {
        console.log('x4 =', x3);
    }
    if (y2 == y3) {
        console.log('x4 =', y1);
    } else if (y3 == y1) {
        console.log('x4 =', y2);
    } else {
        console.log('x4 =', y3);
    }
}
ex7(1, 1, 3, 6, 8, 11)

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->

function ex8 (year) {
    let currentYear = (year % 400 == 0 || year % 4 == 0 && year % 100 != 0 ) ? 366 : 365;
    console.log(currentYear);
}
ex8(2021)
//    <------- Ex 9 ------->
//    <------- Ex 9 ------->
//    <------- Ex 9 ------->


function ex9 (number) {
    if (number === 0) {
        console.log('Нулевое');
    } else {
        if (number > 0) {
            console.log("Положительное ");
        } else {
            console.log("Отрицательное ");
        }
        if ((number % 2) === 0) {
            console.log("Чётное");
        } else {
            console.log('Нечётное');
        }
    }
    console.log('Число');
}
ex9(2021)


//    <------- Ex 10 ------->
//    <------- Ex 10 ------->
//    <------- Ex 10 ------->

function ex10 (number) {
    if ((number % 2) == 0) {
        console.log('Четноё');
    } else {
        console.log('Нечётное');
    }
    if(number > 99) {
        console.log('Трёхзначное');
    } else if ((99>=number) && (number > 9)) {
        console.log('Двухзначное');
    } else if (number <= 9) {
        console.log('Однозначное');
    }
    console.log('Число');
}
ex10(666)

//    <------- Ex 11 ------->
//    <------- Ex 11 ------->
//    <------- Ex 11 ------->

// В первом случае - от 1 до 4.
// Для каждого значения сначала происходит увеличение, а потом – сравнение, так как ++ стоит перед переменной.
// Во втором случае - от 1 до 5.
// При i = 4 произойдёт сравнение while (4 < 5) – верно, после этого сработает i++, увеличив i до 5, так что значение 5 будет выведено.

//    <------- Ex 12 ------->
//    <------- Ex 12 ------->
//    <------- Ex 12 ------->

// От 0 до 4 в обоих случаях. Проверяется условие, выполняется тело цикла и потом уже делается прибавление.

//    <------- Ex 13 ------->
//    <------- Ex 13 ------->
//    <------- Ex 13 ------->

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

//    <------- Ex 14 ------->
//    <------- Ex 14 ------->
//    <------- Ex 14 ------->

let i = 0;
while (i < 3) {
    console.log( `number ${i}!` );
    i++
}

//    <------- Ex 15 ------->
//    <------- Ex 15 ------->
//    <------- Ex 15 ------->

let number;

// do {
//     number = +prompt("Enter a number greater than 100", 0);
//   } while (number <= 100 && number);

//    <------- Ex 16 ------->
//    <------- Ex 16 ------->
//    <------- Ex 16 ------->

let n = 10;

primeNumbers: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue primeNumbers
  }

  console.log(i)
}

//    <------- Ex 17 ------->
//    <------- Ex 17 ------->
//    <------- Ex 17 ------->

// let number1 = +prompt('Enter the first number', '');
// let number2 = +prompt('enter the second number', '');

// console.log(number1);
// console.log(number2);
// let average = ((number1 + number2) / 2);
// console.log(average);

//    <------- Ex 18 ------->
//    <------- Ex 18 ------->
//    <------- Ex 18 ------->

// let sqNumber = +prompt('enter a number', '')
// let squareNumber = sqNumber ** 2;

// console.log(squareNumber);

//    <------- Ex 19 ------->
//    <------- Ex 19 ------->
//    <------- Ex 19 ------->

function ex19 () {

    let num1 = +prompt('Enter the first number', '');
    let num2 = +prompt('Enter the second number', '');
    let num3 = +prompt('Enter the third number', '');
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let subtraction = max - min;
    console.log('subtraction is', subtraction);
}
// ex19()



//    <------- Ex 20 ------->
//    <------- Ex 20 ------->
//    <------- Ex 20 ------->

function ex20 () {
    let checkOnParity = +prompt('Enter a number', '')
    if (checkOnParity % 2 == 0) {
        console.log(checkOnParity, '= чётное');
    } else {
        console.log(checkOnParity, '= нечётное');
    }
}
// ex20()

//    <------- Ex 21 ------->
//    <------- Ex 21 ------->
//    <------- Ex 21 ------->

function ex21 (number) {
        if (number>9) {
            console.log('Содержит две цифры, сумма цифр =', Math.floor((number / 10) + (number % 10)));
        } else {
            console.log('Содержит одну цифру =', number);
        }
}
ex21(77)

//    <------- Ex 22 ------->
//    <------- Ex 22 ------->
//    <------- Ex 22 ------->

function ex22() {
    let inInches = +prompt("Cколько сантиметров перевести в дюймы?", '');
    let InchesRes = inInches * 2.54;
    alert(InchesRes)
    let inСentimeters = +prompt("Cколько дюймов перевести в сантиметры?", '');
    let сentimetersRes = (inСentimeters / 2.54).toFixed(2);
    alert(сentimetersRes)

}
// ex22()

//    <------- Ex 23 ------->
//    <------- Ex 23 ------->
//    <------- Ex 23 ------->

function ex23 () {
    alert('Начинается игра «Кто хочет стать миллионером»')
    let firstQuest = prompt('С каким цветом ассоциируится JavaScript? \nОтветы: \n желтый \n красный \n белый \n фиолетовый', '')
    switch(firstQuest){
        case 'желтый':
            alert('Ты молодец, выиграл 5 гривен!')
            let secondQuest = prompt('Зачем людям пальцы на ногах? \nОтветы: \n чтобы биться об угол чего-то \n я программист, а не биолог \n не знаю \n правильного ответа нету', '')
            switch(secondQuest) {
                case('правильного ответа нету'):
                    alert('Ты молодец! Выиграл миллион биткоинов!')
                default: 
                    alert('Ты проиграл всё. Очень жаль =(')
            }
        default: 
            alert('Ты проиграл всё. Очень жаль =(')
    }
}
// ex23()

//    <------- Ex 24 ------->
//    <------- Ex 24 ------->
//    <------- Ex 24 ------->

function ex24 (number) {
    let numStr = String(number);
    if ((number % 2) == 0) {
        let sumNumbers = 0;
        for (let i = 0; i < numStr.length; i++) {
            sumNumbers += Number(numStr[i]);
        }
        console.log('Число четноё, cумма =', sumNumbers);
    } else {
        let productNumbers = 1;
        for (let i = 0; i < numStr.length; i++) {
            productNumbers *= Number(numStr[i]);
        }
        console.log('Число нечётное, произведение =', productNumbers);
    }
}
ex24(666)

//    <------- Ex 25 ------->
//    <------- Ex 25 ------->
//    <------- Ex 25 ------->

function ex25 () {
    let firstSide = +prompt('Введите 1 длину стороны треугольника', '')
    let secondSide = +prompt('Введите 2 длину стороны треугольника', '')
    let thirdSide = +prompt('Введите 3 длину стороны треугольника', '')

    if ((firstSide + secondSide > thirdSide) && (firstSide + thirdSide > secondSide) && (thirdSide + secondSide >  firstSide)) {
        console.log("Треугольник существует");
    } else {
        console.log('Треугольник не существует');
    }
}
// ex25()

//    <------- Ex 26 ------->
//    <------- Ex 26 ------->
//    <------- Ex 26 ------->

function ex26 () {
    let xPoint = 4;
    let yPoint = 9;
    let radius = 10;
    
    let hypotenuse = Math.sqrt(xPoint ** 2 + yPoint ** 2)
    if (hypotenuse <= radius) {
        console.log('Точка принадлежит кругу');
    } else {
        console.log('Точка не принадлежит кругу');
    }
}
ex26()

//    <------- Ex 27 ------->
//    <------- Ex 27 ------->
//    <------- Ex 27 ------->

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

//    <------- Ex 28 ------->
//    <------- Ex 28 ------->
//    <------- Ex 28 ------->

// Все будет работать! Объявление const защищает только имя самой переменной от изменений. Содержимое объекта изменять можно.

//    <------- Ex 29 ------->
//    <------- Ex 29 ------->
//    <------- Ex 29 ------->

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };
  
    let sumSalaries = 0;
    for (let key in salaries) {
        sumSalaries += salaries[key];
    }
    
    console.log('result is', sumSalaries);

//    <------- Ex 30 ------->
//    <------- Ex 30 ------->
//    <------- Ex 30 ------->

// Потому что i никогда не станет равным 10. Это происходит из-за потери точности, при прибавлении дробей как 0.2