//Променливи од сите примитивни и непримитивни типови
let q, w, e, r, t, y, u;

q = true; //Boolean
w = null; //Null
e = undefined; //Undefined
r = 4; //Number
t = 'String'; //String
y = {
    name: 'Aleksandar',
    yearOfBirth: 1997
}; //Object
u = [1997, 1998, 1999, 2000]; //Array


//Печатење на типот на секоја од декларираните променливи
console.log(typeof (q));
console.log(typeof (w));
console.log(typeof (e));
console.log(typeof (r));
console.log(typeof (t));
console.log(typeof (y));
console.log(typeof (u));


//Промена на вредноста на веќе декларирана променлива
q = false;
console.log(q);


//Константа и обид за промена
const asd = 4;
//asd = 5;


//Декларирање на променливи и аритметички операции
let num1, num2, num3, num4, num5;
num1 = 1;
num2 = 2;
num3 = 3;
num4 = 4;
num5 = 5;

console.log('Збирот на ' + num3 + ' и ' + num4 + ' е ' + (num3 + num4));


//Оператори за споредба
console.log(num2 == num3);
console.log(num3 <= num2);


//Логички оператори
console.log(num3 < num4 && num5 > num1); //Ако и само ако двата услови се точни, функцијата ќе врати true