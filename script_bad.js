/*
  This is not refactored! Among the things we can use...
  
  For...of, for...in
  let + const
  string interpolation
  arrow functions
  destructuring objects
  spread syntax
*/

var people = ['jane', 'bill', 'sal', 'brian']

for (var i = 0; i < people.length; i++) {
  var message = 'Hello ' + people[i] + ', how are you today?'
  console.log(message)
}

function sayHelloToBestFriends() {
  console.log('Hey, ' + firstPerson + ', i care.')
  console.log('Hey, ' + secondPerson + ', we should open a joint chequing account!')

} 

// console.log(i)

var firstPerson = people[0]
var secondPerson = people[1]

sayHelloToBestFriends()

// get how many people I have in my list

function getPeopleLength() {
  return people.length
}

console.log(getPeopleLength())