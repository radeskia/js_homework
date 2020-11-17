//1. Create person object with properties firstName and lastName and add coresponding values.

let person = {
    firstName: 'Aleksandar',
    lastName: 'Radeski'
};


//2. Print the values of the properties of the object. Use both approaches.

console.log(person.firstName);
console.log(person.lastName);
console.log(person['firstName']);
console.log(person['lastName']);


//3. Print the whole firstName and lastName of the person.

console.log(person.firstName + ' ' + person.lastName);


//4. Add the property age and coresponding value to the person object. Use both approaches.

person.age = 23;
person['age'] = 23;


//5. Print how old the person is.

console.log(`The person is ${person.age} years old.`);


//6. Find the type of the variable person.

console.log(`The person variable is an ${typeof person}.`);


//7. Create another person object. Populate the object with coresponding values.

let person2 = {
    firstName: 'Karolina',
    lastName: 'Gocheva',
    age: 40
}


//8. Find out which person is older.

if (person.age > person2.age) {
    console.log(`${person.firstName} is older than ${person2.firstName}.`);
} else if (person.age == person2.age) {
    console.log(`${person.firstName} and ${person2.firstName} are the same age.`);
} else if (person2.age > person.age) {
    console.log(`${person2.firstName} is older than ${person.firstName}.`);
}


//9. Find out how many years the person1 is older/younger from person2.

let ageDiff;

if (person.age > person2.age) {
    ageDiff = person.age - person2.age;
    console.log(`${person.firstName} is ${ageDiff} years older than ${person2.firstName}.`);
} else if (person.age == person2.age) {
    ageDiff = 0;
    console.log(`Both ${person.firstName} and ${person2.firstName} are the same age.`);
} else if (person2.age > person.age) {
    ageDiff = person2.age - person.age;
    console.log(`${person2.firstName} is ${ageDiff} years older than ${person.firstName}.`);
}


//10. Create another peson object. Populate the object with coresponding values.

let person3 = {
    firstName: 'Ryan',
    lastName: 'Gosling',
    age: 40
}


//11. Find the sum of the years of the people.

let ageSum;
ageSum = person.age + person2.age + person3.age;
console.log(`The sum of all the person objects ages is ${ageSum}`);


//12. Find the average of the years of the people.

let ageAvg;
ageAvg = (person.age + person2.age + person3.age) / 3;
console.log(`The average of all people ages is ${ageAvg}`);


//13. Find out who is the youngest of all three people.

let youngest, middle, oldest;

if (person.age > person2.age && person.age > person3.age) {
    oldest = person.firstName;
    if (person2.age > person3.age) {
        middle = person2.firstName;
        youngest = person3.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    } else if (person2.age == person3.age) {
        middle = person2.firstName;
        youngest = person3.firstName;
        console.log(`Oldest is ${oldest}, ${middle} and ${youngest} have the same age and are younger.`);
    } else if (person2.age < person3.age) {
        middle = person3.firstName;
        youngest = person2.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    }
} else if (person2.age > person.age && person2.age > person3.age) {
    oldest = person2.firstName;
    if (person.age > person3.age) {
        middle = person.firstName;
        youngest = person3.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    } else if (person.age == person3.age) {
        middle = person.firstName;
        youngest = person3.firstName;
        console.log(`Oldest is ${oldest}, ${middle} and ${youngest} have the same age and are younger.`);
    } else if (person.age < person3.age) {
        middle = person3.firstName;
        youngest = person.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    }
} else if (person3.age > person.age && person3.age > person2.age) {
    oldest = person3.firstName;
    if (person.age > person2.age) {
        middle = person.firstName;
        youngest = person2.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    } else if (person.age == person2.age) {
        middle = person.firstName;
        youngest = person2.firstName;
        console.log(`Oldest is ${oldest}, ${middle} and ${youngest} have the same age and are younger.`);
    } else if (person.age < person2.age) {
        middle = person2.firstName;
        youngest = person.firstName;
        console.log(`Oldest is ${oldest}, middle child is ${middle} and youngest is ${youngest}.`);
    }
} else if (person.age == person2.age && person.age > person3.age) {
    oldest = person.firstName;
    middle = person2.firstName;
    youngest = person3.firstName;
    console.log(`${oldest} and ${middle} have the same age and are older than ${youngest}.`);
} else if (person2.age == person3.age && person3.age > person.age) {
    oldest = person2.firstName;
    middle = person3.firstName;
    youngest = person.firstName;
    console.log(`${oldest} and ${middle} have the same age and are older than ${youngest}.`);
} else if (person.age == person2.age && person.age == person3.age) {
    console.log(`All three people are the same age!`);
} else {
    console.log(`There's been an unexpected case, please review your code!`);
}
