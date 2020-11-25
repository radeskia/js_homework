
// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// ** n and the array should be parameters in the function



// 1. Write a function to find first and last digit of a number.
function digits(number) {
    return console.log(`The first digit of ${number} is ${number.toString()[0]}  and the last is ${number.toString()[number.toString().length - 1]}`);
};

digits(174489627);

// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
// input array = [10, 20, 30, 40, 50]
// output array = [50, 40, 30, 20 ,10]
let array1 = [10, 20, 30, 40, 50]


function reverser(arr1) {
    return arr1.reverse();
};

console.log(reverser(array1));


// 3. Write a functions to calculate the perimeter and the area of a square
function perimetSq(num1) {
    return num1 * 4;
};

console.log(`Периметар на квадрат - ${perimetSq(3)}`);

function areaSq(num1) {
    return num1 * num1;
};

console.log(`Плоштина на квадрат - ${areaSq(3)}`);


// 4. Write a functions to calculate the perimeter and the area of a rectangle

function perimetRec(num1, num2) {
    return (num1 * 2) + (num2 * 2);
};

console.log(`Периметар на правоаголник - ${perimetRec(2,3)}`);

function areaRec(num1, num2) {
    return num1 * num2;    
};

console.log(`Плоштина на правоаголник - ${areaRec(2,3)}`);


// 5. Write a functions to calculate the perimeter and the area of a circle

function perimetCirc(rad) {
    return 2 * rad * 3.14;
};

console.log(`Периметар на круг - ${perimetCirc(7)}`);

function areaCirc(rad) {
    return 3.14 * (rad * rad)
};

console.log(`Плоштина на круг - ${areaCirc(7)}`);