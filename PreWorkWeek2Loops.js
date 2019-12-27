// // Exercise 1
// var x = 0;
// while (x < 5) {
//    x++;
//    console.log(x)
// }

// // Exercise 2
// var y = 0;
// do {
//    y++
//    console.log(y);
// } while (y < 5);

// // Exercise 3
// for (var z = 0; z <= 5; z++) {
//    console.log(z);
// }

// // Exercise 5
// // 5.1
// var a = 11;
// while (a > 1) {
//    a--;
//    console.log(a);
// }

// // 5.2
// var b = 11;
// do {
//    b--
//    console.log(b)
// } while (b > 1);

// // 5.3
// for (var c = 10; c > 0; c--) {
//    console.log(c);
// }

// // Exercise 6
// // 6.1
// var d = 0;
// while (d < 100) {
//    d += 10;
//    console.log(d)
// }

// // 6.2
// var e = 0;
// do {
//    e += 10;
//    console.log(e);
// } while (e < 100)

// // 6.3
// for (var f = 10; f < 100; f += 10) {
//    console.log(f);
// }

// // Exercise 7
// // 7.1
// // Because counterFour is initiated at 1 - which is already  < 2 -  and is decremented from 1, counterFour will always be < 2. Therefore the loop will never end.

// // 7.2
// let counterFour = 0;
// while (counterFour = -100) {
//    counterFour -= 10;
//    console.log(counterFour);
// }

// // Exercise 8

// for (let r = 3; r >= 999; r += 33) {
//    let ex8 = [];
//    ex8.push(r);
// }
// console.log(ex8);

// Exercise 9
// for (var i = 0; i < 100; i+=1){
//    //  ' not my favorite number';
//    //  ' my favorite number!';
//    // if (i != 3) {
//       console.log(i)
//    // }

//    //    console.log(favNum && notFavNum)
//    // }
// }

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
   console.log("counting down from", outsideCounter);
   for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
      console.log("inside", insideCounter);
   }
   console.log("***********************************")
}



