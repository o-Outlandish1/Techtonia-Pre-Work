// Exercise 1
function logGreeting(salutation) {
   console.log(salutation);
};
logGreeting('Hello!');

// Excercise 2
function getName(name) {
   return name;
};
console.log(getName('Robyn'))

// Exercise 3
function logGreeting2() {
   return function myName(writeName) {
      console.log('Hello! My name is ' + writeName);
   };
};

let helloWorld = logGreeting2();
helloWorld('Robyn');

//Exercise 4
function sum(x, y, z) {
   return x + y + z;
};

console.log(sum(1, 2, 3))

// Exercise 5
function discountEligible(age) {
   if (age <= 14 || age >= 65) {
      return true
   }
   return false;
};

console.log(discountEligible(30))
console.log(discountEligible(67))
console.log(discountEligible(12))

// Exercise 6
// let multiplierResults = [];
function stringMultiplier(string, multiplier) {
   console.log(string.repeat(multiplier));
};

stringMultiplier('Robyn ', 6)

// Exercise 7
// 1. What mysteryFunction1 does 
// Answer: multiplies the parameter (p1) by 2.
// 2. What prints out for the value of y
// Answer: 4
// 3. What prints out for the value of z
// Answer: 8
// Were you correct?
// Answer: Yes

// Exercise 8
// 1. What mysteryFunction2 does 
// Answer: Finds the difference between the parameters (p1 and p2)
// 2. What prints out for the value of a
// Answer: 6
// 3. What prints out for the value of b
// Answer: 5
// Were you correct?
// Answer: Yes

// Exercise 9
// 9.1
const groceryList = "eggs,carrots,orange juice"
function splitList(list) {
   let newList = groceryList.split(',');
   return newList;
}

console.log(splitList())

// 9.2
const mySchedule = 'wake up--->brush teeth--->eat breakfast--->go to work';
function splitSchedule(schedule) {
   let newSchedule = mySchedule.split('--->', 2);
   return newSchedule;
}

console.log(splitSchedule())


