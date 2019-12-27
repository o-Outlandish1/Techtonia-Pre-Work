// Exercise 1
var animals = [];

// Exercise  2
animals.push('frog')
console.log(animals)

// Excercise 3
animals.push('wolf', 'lion', 'giraffe', 'monkey');
console.log(animals)

// Exercise 4
animals[0] = 'gorilla';
console.log(animals)

// Exercise 5
console.log(animals.length)

// Exercise 6
console.log(animals[0])

// Exercise 7
console.log(animals[4])

// Exercise 8
animals.pop();
console.log(animals)

// Exercise 9
var assortedThings = ['random', 'numsAndStrings', 'andThings', 3, 6, 9];

// Exercise 10
assortedThings.forEach(function (item, index, ) {
   var itemIndex = 'Item #' + index;
   var itemName = ' is ' + item;
   console.log(itemIndex + itemName)
})


// Exercise 11
function indexLabel(arrayX) {
   for (let x = 0; x <= arrayX.length; x++) {
      if (arrayX[x] > 100) {
         console.log(arrayX[x] + ' BIG')
      } if (arrayX[x] >= 1 && arrayX[x] <= 100) {
         console.log(arrayX[x] + ' small')
      } if (arrayX[x] < 0) {
         console.log(arrayX[x] + ' negative')
      }
   }
}
indexLabel([333, 3, -3])

// Exercise 12
let me = {
   favoriteAnimal: 'Lion',
   favoriteNumber: 3,
};

// Exercise 13
me.favoriteColor = 'Blue';
me.favoriteMovie = 'Mean Girls';
console.log(me)

// Exercise 14
me.favoriteAnimal = 'Wolf';

// Exercise 15
console.log(me.favoriteAnimal)
console.log(me['favoriteAnimal'])



