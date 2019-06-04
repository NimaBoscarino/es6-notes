/*
  For...of, for...in <--- check!
  let + const, and no more var <-- check!
  string interpolation <--- check!
  arrow functions <-- check!
  destructuring objects
  spread syntax
*/

const people = ['jane', 'bill', 'sal', 'brian']

// for (let i = 0; i < 10; i++) {
//   console.log('num', i)
// }

for (const person of people) {
  // const message = 'Hello ' + person + ', how is ' + person + ' today?'
  const message = `Hello ${person}, how is ${person} today?`

  console.log(message)
}

const sayHelloToBestFriends = () => {
  console.log(`Hey ${firstPerson}, i care.`)
  console.log(`Hey ${secondPerson}, we should open a joint chequing account!`)
} 

// console.log(i)

const [firstPerson, secondPerson] = people

sayHelloToBestFriends()

// get how many people I have in my list

const getPeopleLength = () => people.length

console.log(getPeopleLength())

let bestFriend = 'jane'
bestFriend = 'bill'

const soccerFriends = ['alan', 'jenissa', 'brian']
const pinballFriends = ['steve', 'brenda', 'deborah']

const allFriends = [...people, ...soccerFriends, ...pinballFriends]

console.log('ALL FRIENDS', allFriends)