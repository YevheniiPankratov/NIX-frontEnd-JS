//    <------- Ex 1 ------->
//    <------- Ex 1 ------->
//    <------- Ex 1 ------->

let name = 'Yevhenii';
let admin = name;
console.log(admin);

//    <------- Ex 2 ------->
//    <------- Ex 2 ------->
//    <------- Ex 2 ------->

// Да, можно. В JavaScript есть два ограничения, касающиеся имён переменных:

// 1) Имя переменной должно содержать только буквы, цифры или символы $ и _.
// 2) Первый символ не должен быть цифрой.
// 3) Имя не должно быть зарезервированным в JS. 

// Имена КОНСТАНТ - переменных, значение которых не изменяется никогда на протяжении работы всего скрипта.

//    <------- Ex 3 ------->
//    <------- Ex 3 ------->
//    <------- Ex 3 ------->

// hello 1
// hello name
// hello Ilya

//    <------- Ex 4 ------->
//    <------- Ex 4 ------->
//    <------- Ex 4 ------->

// "" + 1 + 0 = "10"
// "" - 1 + 0 = -1 
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// 7 / 0 = Infinity
// "  -9  " + 5 = "  -9  5"
// "  -9  " - 5 = -14
// null + 1 = 1
// undefined + 1 = NaN
// " \t \n" - 2 = -2

//    <------- Ex 5 ------->
//    <------- Ex 5 ------->
//    <------- Ex 5 ------->

let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1

//    <------- Ex 6 ------->
//    <------- Ex 6 ------->
//    <------- Ex 6 ------->

let a = 2;
let x = 1 + (a *= 2); // a = 4, x = 5

//    <------- Ex 7 ------->
//    <------- Ex 7 ------->
//    <------- Ex 7 ------->

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false

//    <------- Ex 8 ------->
//    <------- Ex 8 ------->
//    <------- Ex 8 ------->

// let name = prompt('What is your name?')
// console.log( `Your name is ${name}`);

//    <------- Ex 9 ------->
//    <------- Ex 9 ------->
//    <------- Ex 9 ------->

// Да, потому что 0 в строке это true.

//    <------- Ex 10 ------->
//    <------- Ex 10 ------->
//    <------- Ex 10 ------->

// let officialName = prompt('Каково «официальное» название JavaScript?', '');

if (officialName == 'ECMAScript') {
    console.log('Верно!');
    } else {
    console.log('Не знаете? ECMAScript!');
}

//    <------- Ex 11 ------->
//    <------- Ex 11 ------->
//    <------- Ex 11 ------->

// let number = +prompt('Enter a number', '');

if (number > 0) {
    console.log(1)
} else if ( number < 0) {
    console.log(-1)
} else if ( number == 0 ) {
    console.log(0)
}

//    <------- Ex 12 ------->
//    <------- Ex 12 ------->
//    <------- Ex 12 ------->

let result;
result = (a + b < 4) ? 'Мало' : 'Много';

//    <------- Ex 13 ------->
//    <------- Ex 13 ------->
//    <------- Ex 13 ------->

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' : '';

//    <------- Ex 14 ------->
//    <------- Ex 14 ------->
//    <------- Ex 14 ------->

// Выведет 2, оператор ИЛИ ищет первый true или последний false

//    <------- Ex 15 ------->
//    <------- Ex 15 ------->
//    <------- Ex 15 ------->

//сначала 1, потом 2

//    <------- Ex 16 ------->
//    <------- Ex 16 ------->
//    <------- Ex 16 ------->

// Выведет null, оператор И ищет первый false или последний true.

//    <------- Ex 17 ------->
//    <------- Ex 17 ------->
//    <------- Ex 17 ------->

// 1, потом undefined. До правого alert выполнение не дойдет. 
// Вызов alert не возвращает значения, соответственно будет undefined.

//    <------- Ex 18 ------->
//    <------- Ex 18 ------->
//    <------- Ex 18 ------->

// выведет 3, сначала выполнится && и вернет последний true, 
// затем выполнится || и вернет первый true, - значение 3

//    <------- Ex 19 ------->
//    <------- Ex 19 ------->
//    <------- Ex 19 ------->

let age;
if (age >= 14 && age <= 90) {
    console.log('yes')
}

//    <------- Ex 20 ------->
//    <------- Ex 20 ------->
//    <------- Ex 20 ------->


if (!(age >= 14 && age <= 90)) {
    console.log('no')
}

if (age < 14 || age > 90) {
    console.log('no')
}

//    <------- Ex 21 ------->
//    <------- Ex 21 ------->
//    <------- Ex 21 ------->

// Выведется first, потому что -1 это не falsy значение. Также выведется third, потому что 1 это truthy значение.

//    <------- Ex 22 ------->
//    <------- Ex 22 ------->
//    <------- Ex 22 ------->

// let userName = prompt("Who's there?", '');

if (userName == 'Админ') {

  let password = prompt('Пароль?', '');
  if (password == 'Я главный') {
    console.log( 'Здравствуйте!' );
  } else if (password == '' || password == null) {
    console.log( 'Отменено' );
  } else {
    console.log( 'Неверный пароль' );
  }

} else if (userName == '' || userName == null) {
  console.log( 'Отменено' );
} else {
  console.log( "I don't know you" );
}

//    <------- Ex 23 ------->
//    <------- Ex 23 ------->
//    <------- Ex 23 ------->

if (browser == 'Edge') {
    console.log("You've got the Edge!");
  } else if (browser == 'Chrome'
        || browser == 'Firefox'
        || browser == 'Safari'
        || browser == 'Opera') {
    console.log( 'Okay we support these browsers too' );
  } else {
    console.log( 'We hope that this page looks ok!' );
  }

//    <------- Ex 24 ------->
//    <------- Ex 24 ------->
//    <------- Ex 24 ------->

// const a = +prompt('a?', '');

switch (a) {
  case 0:
    console.log( 0 );
    break;
  case 1:
    console.log( 1 );
    break;
  case 2:
  case 3:
    console.log( '2,3' );
    break;
}

//    <------- Ex 25 ------->
//    <------- Ex 25 ------->
//    <------- Ex 25 ------->

function func25 (num) {
    if (num > 0) {
        num++;
    }
    console.log(num)
}
// func25(25)

//    <------- Ex 26 ------->
//    <------- Ex 26 ------->
//    <------- Ex 26 ------->

function func26 (num) {
    if (num > 0) {
        num++;
    } else {
        num -= 2;
    }
    console.log(num)
}
// func26(-3)

//    <------- Ex 27 ------->
//    <------- Ex 27 ------->
//    <------- Ex 27 ------->

function func27 (num) {
    if (num > 0) {
        num++;
    } else if (num < 0) {
        num -= 2;
    } else if (num == 0 ) {
        num = 10;
    }
    console.log(num)
}
// func27(0)

//    <------- Ex 28 ------->
//    <------- Ex 28 ------->
//    <------- Ex 28 ------->

function func28 (a, b, c) {
    let total = null;
    if (a > 0) {
        total += 1;
      }
      if (b > 0) {
        total += 1;
      }
      if (c > 0) {
        total += 1;
      }
      console.log(total);
}
// func28(1, 2, -10)

//    <------- Ex 29 ------->
//    <------- Ex 29 ------->
//    <------- Ex 29 ------->

function func29 (a, b, c) {
    let totalPositiveNum = 0;
    let totalNegativeNum = 0;

    if (a > 0) {
        totalPositiveNum += 1;
      } else if (a < 0) {
        totalNegativeNum += 1;
      }
      if (b > 0) {
        totalPositiveNum += 1;
      } else if (b < 0) {
        totalNegativeNum += 1;
      }
      if (c > 0) {
        totalPositiveNum += 1;
      } else if (c < 0) {
        totalNegativeNum += 1;
      }

    console.log('totalPositiveNum =', totalPositiveNum );
    console.log('totalNegativeNum =', totalNegativeNum);
}
// func29(1, 2, -10)

//    <------- Ex 30 ------->
//    <------- Ex 30 ------->
//    <------- Ex 30 ------->

function func30 (a, b) {
    if (a > b) {
        console.log(`Max number is ${a}`)
    } else {
        console.log(`Max number is ${b}`)
    }
}
// func30(1, 2)

//    <------- Ex 31 ------->
//    <------- Ex 31 ------->
//    <------- Ex 31 ------->

function func31 (a, b) {
    if (a > b) {
        console.log(`the serial number of the smaller one is 1`)
    } else {
        console.log(`the serial number of the smaller one is 2`)
    }
}
// func31(1, 2)  


//    <------- Ex 32 ------->
//    <------- Ex 32 ------->
//    <------- Ex 32 ------->

function func32 (a, b) {
    if (a > b) {
        console.log(`Max number is ${a}`)
        console.log(`Min number is ${b}, too`)
        
    } else {
        console.log(`Max number is ${b}`)
        console.log(`Min number is ${a}, too`)
    }
}
// func32(1, 2) 

//    <------- Ex 33 ------->
//    <------- Ex 33 ------->
//    <------- Ex 33 ------->

function func33 (a, b) {
    let box;

    if (a < b) {
    box = a;
    a = b;
    b = box;
    }
    console.log(`A = ${a}, B = ${b}`)
}
// func33('kitten', 'rat')

//    <------- Ex 34 ------->
//    <------- Ex 34 ------->
//    <------- Ex 34 ------->

function func34 (a, b) {
    if (a !== b) {
        let sum = a + b;
        a = sum;
        b = sum;
    } else if (a === b) {
        a = 0;
        b = 0;
    }
    console.log(`a = ${a}, b = ${b}`)
}
// func34(1, 3) 

//    <------- Ex 35 ------->
//    <------- Ex 35 ------->
//    <------- Ex 35 ------->

function func35 (a, b) {
    if (a != b) {
        if (a > b) {
            a = a;
            b = b;
        } else {
            a = b; 
            b = b;
        }
        console.log(`a = ${a}, b = ${b}`)
    } else if (a === b) {
        a = 0;
        b = 0;
        console.log(`a = ${a}, b = ${b}`)
    }
}
// func35(1, 2)

//    <------- Ex 36 ------->
//    <------- Ex 36 ------->
//    <------- Ex 36 ------->

function func36 (a, b, c) {
    if (a < b && a < c) {
      console.log(a);
    } else if (b < a && b < c) {
      console.log(b);
    } else {
      console.log(c);
    }
}
// func36(11, 2, 1)

//    <------- Ex 37 ------->
//    <------- Ex 37 ------->
//    <------- Ex 37 ------->

function func37 (a, b, c) {
    let between;

    if ((a < b && a > c) || (a > b && a < c)) {
    between = a;
    } else if ((b < a && b > c) || (b > a && b < c)) {
    between = b;
    } else if ((c < a && c > b) || (c > a && c < b)) {
    between = c;
    }
    console.log(between);
}
// func37(1, 2, 3)

//    <------- Ex 38 ------->
//    <------- Ex 38 ------->
//    <------- Ex 38 ------->

function func38 (a, b, c) {
    
    const min = (f, s, t) => {
		if (f < s && f < t) return f;
		if (s < f && s < t) return s;
		return t;
	};

	const max = (f, s, t) => {
		if (f > s && f > t) return f;
		if (s > f && s > t) return s;
		return t;
	};

	const minNumber = min(a, b, c);
	const maxNumber = max(a, b, c);

	console.log(`Min number: ${minNumber}, max number: ${maxNumber}`);
}
// func38(1, 2, 3)

//    <------- Ex 39 ------->
//    <------- Ex 39 ------->
//    <------- Ex 39 ------->

function func39 (a, b, c) {

    const mid = (f, s, t) => {
		if ((f - s) * (f - t) <= 0) return f;
		if ((s - f) * (s - t) <= 0) return s;
		return t;
	};

	const max = (f, s, t) => {
		if (f > s && f > t) return f;
		if (s > f && s > t) return s;
		return t;
	};

	const midNumber = mid(a, b, c);
	const maxNumber = max(a, b, c);

	console.log(`The sum of the two largest numbers is ${midNumber + maxNumber}`);
}
// func39(1, 2, 3)


//    <------- Ex 40 ------->
//    <------- Ex 40 ------->
//    <------- Ex 40 -------8

function func40 (a, b, c) {
    
    const findIndex = (f, s, t) => {
		if (f === s) return 2;
		if (f === t) return 1;
		return 0;
	};

	const uniqueIndex = findIndex(a, b, c);

	console.log(`The serial number of a number different from the rest is ${uniqueIndex}`);
}

// func40(1, 2, 1)