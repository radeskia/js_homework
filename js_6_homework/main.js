
//1.
people = [
    { fname: 'David', lname: 'Rayy', age: 34 },
    { fname: 'Suzanne', lname: 'Collins', age: 38 },
    { fname: 'Walter', lname: 'Isaacson', age: 24 },
    { fname: 'John', lname: 'Doe', age: 51 },
    { fname: 'Jane', lname: 'Donnson', age: 20 }
];

// Calculate the sum of the ages - people array
let sum = 0;

for (let i = 0; i < people.length; i++) {
    sum += people[i]['age'];
};

console.log(`The sum of all ages in the people array is ${sum}.`);


// Find the people that are older than 36
let olderT = [];

for (let i = 0; i < people.length; i++) {
    if (people[i]['age'] > 36) {
        olderT.push(people[i]['fname'])
    }
};

for (let i = 0; i < olderT.length; i++) {
    const element = olderT[i];
    console.log(`${olderT[i]} is older than 36.`);

}


// Find the people that are smaller than 24
let youngerT = [];

for (let i = 0; i < people.length; i++) {
    if (people[i]['age'] < 24) {
        youngerT.push(people[i]['fname'])
    }
};

for (let i = 0; i < youngerT.length; i++) {
    console.log(`${youngerT[i]} is younger than 24.`);
};


// Find the person with the longest name
let pNames = [];

for (let i = 0; i < people.length; i++) {
    pNames.push(people[i]['fname'])
    
};

pNames.sort((a, b) => {
    return b.length - a.length;
});

console.log(`${pNames[0]} has the longest name.`);


//2.
numbers = [1, 4, 24, 67, 1029, 340, 5, 200, 36];

// Multiply every element by 3 
let numbersMult = numbers.map(x => x * 3);
console.log(numbersMult);


// Sort the numbers (ascending and descending)
numbers.sort((a, b) => {
    return a - b;
});
console.log(numbers);

numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);


// Find the sum of the numbers

let reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(`The sum of all the numbers is ${numbers.reduce(reducer)}`);


// Find max and min in the array
console.log(`Smallest number in the numbers array is ${Math.min(...numbers)}`);
console.log(`Largest number in the numbers array is ${Math.max(...numbers)}`);


// Find second largest element in the array
numbers.sort((a, b) => {
    return b - a;
});
console.log(`Second largest number is ${numbers[1]}`);


// Find the total numbers of even and odd elements in the array
let evens = [];
let odds = [];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 0){
        evens.push(numbers[i])
    }else if (numbers[i] % 2 != 0){
        odds.push(numbers[i])
    };   
};

console.log(`The numbers array has ${evens.length} even numbers and ${odds.length} odd numbers`);


// Count number of digits in a number
let num1 = 1742;

console.log(`The number ${num1} has ${num1.toString().length} digits`);


// Print the following pattern
/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/
let p = '';
for (let i = 1; i < 6; i++) {
    console.log(p += i + ' ');
};


// Write a program to find power of a number.
let num3 = 4;
let powerOf = 2;
console.log(Math.pow(num3, powerOf));


// Given an array loop throught it and display numbers which are divisible by 5 and if you find number greater than 150 stop the loop iteration
let array1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

for (let i = 0; i < array1.length; i++) {
    if(array1[i] % 5 == 0 && array1[i] < 150)
    console.log(array1[i]);
    
};