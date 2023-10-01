/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log('Second Array: ', arr2);
console.log('First Array: ', arr1);

// Copying an array

let arr3 = [4, 5, 6];
let arr4 = [...arr3];
arr4.push(7);
console.log('Third Array: ', arr3);
console.log('Fourth Array: ', arr4);


// Copying an object

let obj1 = { a: 1, b:  2, c: 3 };
let obj2 = {...obj1, d: 4 };
let obj3 = {...obj1, b: 5};
console.log('Object 1: ', obj1);
console.log('Object 2: ', obj2);
console.log('object 3: ', obj3);

// Copying only part of an array/object

let arr5 = [...arr1, {...obj1 }, ...arr3, "x", "y", "z" ]
console.log('Array 5: ', arr5);

//the spread operator challenge:
//You will use the spread operator to copy an array which is stored in an object which itself is stored in an array. 
//You will create a single line arrow function (has no return statement), 
//this should copy an array passed in and add the value passed to it, then return the array.

//data

let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

//solution and explanation

//[...students[0].subjects] uses the spread operator to create a new array with the same elements as students[0].subjects
let subjects = [...students[0].subjects];

//(item, val) are the parameters of the arrow function.
//=> is the arrow notation indicating it's a function.
//[...item, val] uses the spread operator to create a new array with the elements of item followed by val
const update = (item, val) => [...item, val];

//This will take the subjects array (which is a copy of the original students[0].subjects) and add 'Electronics' to it.
let updatedSubjects = update(subjects, 'Electronics');

console.log(updatedSubjects);
console.log(students[0]);
