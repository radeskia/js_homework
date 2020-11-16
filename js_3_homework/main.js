//1. Write a JavaScript conditional statement to sort three numbers. Print the result.

//Самите броеви и нивната потенцијална позиција според големина
let q, w, e, first, second, third;

q = 3;
w = 4;
e = 3;

//Прв тест, дали инпутот е бројка
if (typeof q == 'number' && typeof w == 'number' && typeof e == 'number') {

    //Втор тест, дали некои два броја се исти и доколку се дали третата бројка е поголема или помала од нив
    if (q == w && q > e) {
        first = q;
        second = w;
        third = e;
    } else if (w == e && w > q) {
        first = w;
        second = e;
        third = q;
    } else if (q == w && q < e) {
        first = e;
        second = q;
        third = w;
    } else if (w == e && w < q) {
        first = q;
        second = w;
        third = e;
    } else {
        first = q;
        second = q;
        third = q;
    }
    //Трет тест, тестирање за прво, второ и трето место на листата по големина
    if (q > w && q > e) {
        first = q;
    } else if (w > q && w > e) {
        first = w;
    } else {
        first = e;
    }

    if ((q > w && q < e) || (q > e && q < w)) {
        second = q;
    } else if ((w > q && w < e) || (w > e && w < q)) {
        second = w;
    } else {
        second = e;
    }

    if (q < w && q < e) {
        third = q;
    } else if (w < q && w < e) {
        third = w;
    } else {
        third = e;
    }

} else {
    console.log('One or more of the inputs is not a number!');
}

//Последен чекор, посебен случај ако трите броеви се исти, ако броевите на прво место се исти, ако броевите на второ место се исти и основниот случај - прво, второ и трето место
if (first == second && second == third) {
    console.log(`All numbers have the same value ${first}`);
} else if (first == second) {
    console.log(`Both first place numbers have the same value ${first}, and second place is ${third}.`);
} else if (second == third) {
    console.log(`Both second place numbers have the same value ${second}, and first place is ${first}.`);
} else {
    console.log(`First place is ${first}, second place is ${second} and third place is ${third}.`);
}



//2. Write a JavaScript conditional statement to find the largest of five numbers. Print the result.

//Петте броја за тестирање
let a, s, d, f, g;

a = 43;
s = 47;
d = 48;
f = 47;
g = 48;

//Тестирање број по број дали е поголем или/и еднаков со друг
if ((a > s || a == s) && (a > d || a == d) && (a > f || a == f) && (a > g || a == g)) {
    console.log(`Largest number is ${a}`);
} else if ((s > a || s == a) && (s > d || s == d) && (s > f || s == f) && (s > g || s == g)) {
    console.log(`Largest number is ${s}`);
} else if ((d > a || d == a) && (d > s || d == s) && (d > f || d == f) && (d > g || d == g)) {
    console.log(`Largest number is ${d}`);
} else if ((f > a || f == a) && (f > s || f == s) && (f > d || f == d) && (f > g || f == g)) {
    console.log(`Largest number is ${f}`);
} else {
    console.log(`Largest number is ${g}`);
}


/* //3. Compute the average marks of the following students. Then, use the average to determine the corresponding grade. 
Student_Name	Marks
David	        80
Vinoth	        77
Divya	        88
Ishitha	        95
Thomas	        68

Range	Grade
<60	    F
<70	    D
<80	    C
<90	    B
<100	A
*/


let David, Vinoth, Divya, Ishitha, Thomas, gradeF, gradeD, gradeC, gradeB, gradeA, classAverage;

//Учениците и нивните просечни бодови како вредност
David = 80;
Vinoth = 77;
Divya = 88;
Ishitha = 95;
Thomas = 68;


//Бодовната скала на оценување
gradeF = 60;
gradeD = 70;
gradeC = 80;
gradeB = 90;
gradeA = 100;


//Просечната оценка на целиот клас од 5 души
classAverage = (David + Vinoth + Divya + Ishitha + Thomas) / 5;
if (classAverage <= gradeF) {
    console.log(`The class average grade is F with ${classAverage} points.`);
} else if (classAverage <= gradeD) {
    console.log(`The class average grade is D with ${classAverage} points.`);
} else if (classAverage <= gradeC) {
    console.log(`The class average grade is C with ${classAverage} points.`);
} else if (classAverage <= gradeB) {
    console.log(`The class average grade is B with ${classAverage} points.`);
} else {
    console.log(`The class average grade is A with ${classAverage} points.`);
}


//4. For a given hour, print out the corresponding greeting (Good morning, Good afternoon, Good evening).

//Променлива со даден час
let currentTime = 14;

//Соодветна вредност за секој час
if (currentTime >= 5 && currentTime <= 11) {
    console.log(`Good mornin!`);
} else if (currentTime >= 12 && currentTime <= 17) {
    console.log(`Good afternoon!`);
} else {
    console.log(`Good evening!`);
}


//5. For a given day, print out whether it is a day of the work week or weekend.

//Даден ден 
let today = 'Saturday';

//Тестирање на вредноста на today
if (today == 'Monday' || today == 'Tuesday' || today == 'Wednesday' || today == 'Thursday' || today == 'Friday') {
    console.log(`Today is ${today}, sadly it's still the work week :(`);
} else if (today == 'Saturday' || today == 'Sunday') {
    console.log(`Today is ${today}, it's the weekend! Yay :)`);
} else {
    console.log(`Input is not a day of the week!`);
}


//6. For a given month, print out in which season it belongs.

//Даден месец
let month = 'October';

//Тестирање на вредноста на month
if (month == 'December' || month == 'January' || month == 'February') {
    console.log(`Winter is here!`);
} else if (month == 'March' || month == 'April' || month == 'May') {
    console.log(`It's Spring, summer is just around the corner!`);
} else if (month == 'June' || month == 'July' || month == 'August') {
    console.log(`Summer's here!`);
} else if (month == 'September' || month == 'October' || month == 'November') {
    console.log(`It's Autumn, but Winter is coming!`);
} else{
    console.log(`Not a month, please enter a month!`);
}