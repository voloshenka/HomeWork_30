
/*Задание 1*/

let evenNumber = prompt ('Укажите чётное число в интервале от 10 до 50 ');
if (evenNumber<50) {
  console. log (evenNumber/2);
}
else if (evenNumber>50){
  alert ('Вы указали число больше 50');
}
else if (evenNumber>10) {
  console. log (evenNumber/2);
}
else if (evenNumber<10) {
  alert ('Вы указали число меньше 10');
}

/*Задание 2 */
let num = -124;
let x = 100 + (num *= 5);
console.log (100 + (num *= 5));

/* Задание 3 
1  '' + 15 + 5
Ответ - +20 не верно

2 "" - 10 + 5
Ответ - -5 верно
3 false + true
Ответ - +1 верно
4 69 / "3"
Ответ - +23 верно
5 "10" * "20"
Ответ - 1020 не верно
6 12+ 10 + "px"
Ответ - 1210 не верно

*/

let rez01 = '' + 15 + 5;
console.log(rez01);

let rez02 = "" - 10 + 5
console.log(rez02);

let rez03 = false + true
console.log(rez03);

let rez04 = 69 / "3"
console.log(rez04);

let rez05 = "10" * "20"
console.log(rez05);
let rez06 = 12+ 10 + "px"
console.log(rez06);
