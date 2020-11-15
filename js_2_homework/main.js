
//1. Declare variables and use the assignment operators ( print the results)
let q, w, e;

q = 1;
w = 2;
e = 3;

console.log(q);
console.log(w += 2); //w = w + 2
console.log(e -= 2); //e = e - 2
console.log(e *= 2); //e = e * 2
console.log(e /= 2); //e = e / 2
console.log(w %= 2); // остаток од w / 2

//2. Try out the two kind of alerts that have been studied.
//alert('Welcome home'); // Standard alert
//window.alert('Alert #2') //DOM Alert
//window.confirm('Are you okay?'); //Boolean return value confirmation alert

//3. Try out the different types of loggings in the console
console.error('Please watch your language!');

let person = {
    name: 'Aleksandar',
    yearOfBirth: 1997,
    status: 'Alive and kickin'
};

console.dir(person);

console.table(['Hybrid Theory', 'Meteora', 'Minutes to midnight']);

//Bonus: Try and find out new types of loggings in the console */
console.warn('Process went smooth without any errors!');
