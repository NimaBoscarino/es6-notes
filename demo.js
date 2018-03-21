// Demos of everything discussed in the breakout

// Remember, you can can edit this file and put console.log() statements in here to help you see things!

/* For ... Of */

var people = ["Tim", "Jane", "Alex"]

for (elem in people) { // using for...in returns indices
    console.log(elem)
} // 0, 1, 2

for (person of people) { // using for...of returns elements
    console.log(person)
} // tim, jane, alex

/* Let, Const, and Var */

// using var HOISTS variable declarations.
// this is bad, because it lets us do weird things like this

{
    console.log(i) // "undefined", when we'd rather get a ReferenceError
    for (var i = 0; i<10; i++) {
        console.log(i)
    }
}
// also note, i doesn't disappear after this block is over

// However, with let...

{
    // console.log(j) // Uncomment this line, and see that it throws an error!

    for (let j = 0; j<10; j++) {
        console.log(j)
    }
}

// const is a READ-ONLY reference to a value.

const animal = "cat"

// now I CAN'T reassign the variable "animal"
// animal = "dog" // won't work!! -- uncomment this line to see.

// however, the value itself CAN be modified. For example...

const pizzas = ['pepperoni', 'cheese', 'pineapple'] // making a read-only reference to an array of strings

// something like this won't work
// pizzas = ['pepperoni', 'cheese']

// but I can use built-in methods to modify the array. For example...

pizzas.pop() // removes the last element

// now, the pizzas array is:
console.log(pizzas) // ['pepperoni', 'cheese']

/* Template Literals */
// These are string literals with embedded expressions

var name = "Bruce Wayne"
var hero = `Batman's real identity is ${name}`

// We can put any javascript expression in the embedding. For example...

var age = 35
console.log(`In ten years I will be ${age + 10} years old.`)

/* Arrow Functions */

// Arrow Functions have prettier syntax than function expressions!

var niceFunc = name => console.log(`Hello ${name}!`)
var uglyFunc = function (name) {
    console.log("Hello ${name}")
}

// If you have multiple inputs, you must wrap them with round brackets

var add = (a, b, c) => a + b + c

// If you don't have any inputs, you can use ()

var sayHello = () => console.log("Hello!")

// Arrow functions do NOT rebind "this"
// So this lets me do something like this...

var weather = "rainy" // global scope
var weatherObject = {
    weather: "sunny", // local scope
    get: () => this.weather // "rainy", since "this" refers to the GLOBAL object
}

console.log(weatherObject.get()) // rainy
// NOTE: IN NODE, THE ABOVE LINE WILL RETURN "UNDEFINED". This is okay.
// Just copy and paste lines 92 to 98 into your console in a broswer to see the demo.

// Whereas if I did this with a function expression, "this" gets re-bound.

var weather2 = "rainy" // global scope
var weatherObject2 = {
    weather2: "sunny", // local scope
    get: function() { return this.weather2 } // "sunny", since "this" refers to the LOCAL object
}

console.log(weatherObject2.get()) // sunny

// Also note, while function expressions can be named (e.g. function test () { ... } ), arrow functions CANNOT.
// Arrow functions are always ANONYMOUS functions.

/* Destructuring Objects */
// Getting values out of arrays or objects one-by-one is LAME!

var movies = ['Star Wars', 'Dune', 'Fifth Element']
var firstMovie = movies[0]
var secondMovie = movies[1]

// We can destructure like this

var [firstMovie, secondMove] = movies
console.log(firstMovie, secondMovie) // Star Wars, Dune
// The same idea works with objects.
// Note, however, to make the variable names match the property names

var bestSinger = {name: "Shania Twain", occupation: "Singer", genre: "Country"}
var {name, genre} = bestSinger
console.log(name, genre) // Shania Twain, Country

/* Spread Syntax */
// Allows an iterable (e.g. an array or string) or an Object to be SPREAD when necessary.
// Three Contexts: Function Calls, Array Literals / Strings, Object Literals

// 1. Function Calls

function subtractInOrder(x, y, z) {
    return x - y - z
}

var args = [34, 12, 66]

console.log(subtractInOrder(...args)) // 34 - 12 - 66

// 2. Array Literals (and Strings)

var firstArr = [1, 2, 3]
var secondArr = [...firstArr, 4, 5, 6] // [1, 2, 3, 4, 5, 6]

// Also, can split up a string
console.log([..."Tom Cruise"]) // ["T", "o", "m", " ", "C", "r", "u", "i", "s", "e"]

// 3. Object Literals

var object1 = {a: 1, b: 2}
var object2 = {...object1, c: 3} // everything from object1, plus the property c : 3

console.log(object2)

/* Resources */

// The ES6 Standard also introduces new built-in methods for strings, numbers, and arrays.
// See them at http://es6-features.org/

/*
    For further reading, check out
    1. https://ponyfoo.com/books/practical-modern-javascript
    2. JavaScript: The Good Parts (Book by Douglas Crockford)
    3. https://caniuse.com/
*/