const fruit = ["mango", "apple", "banana", "papaya"]
  
console.log(typeof fruit);

console.log(fruit.length)


console.log(fruit.slice(1,3))

// adding new elements

fruit.push("strawberry")
fruit.unshift("grapes")
console.log(fruit)

//removing elements 

fruit.pop("banana")
fruit.shift("grapes")
console.log(fruit)

//all rounder functions for arrays

// fruit.splice(2,2)
// console.log(fruit)


fruit.splice(2,1,"orange", "kiwi")
console.log(fruit)