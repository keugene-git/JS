// // TASK 1
// const rows = 8

// for (i = 1; i <= rows; i++) {
//     console.log("#".repeat(i))
// }


// //TASK 2
// for (i = 1; i <= 100; i++) {
//     //FizzBuzz
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(`${i} - FizzBuzz`)
//     }
//     //Fizz
//     else if (i % 3 == 0) {
//         console.log(`${i} - Fizz`)
//     }
//     //Buzz
//     else if (i % 5 == 0) {
//         console.log(`${i} - Buzz`)
//     }
//     //Out of range
//     else {
//         console.log(i)
//     }
// }


// //TASK 3
// const height = 8
// const width = 16

// for (i = 1; i <= height; i++) {
//     let temp = ""
//     if (i % 2 == 0){    //divides rows to "# " or " #"
//         for (j = 1; j <= width; j++){
//             if (j % 2 == 0){
//                 temp += "#"
//             } else {
//                 temp += " "
//             }
//         }
//         console.log(temp)
//     } else {
//         for (j = 1; j <= width; j++){
//             if (j % 2 == 1){
//                 temp += "#"
//             } else {
//                 temp += " "
//             }
//         }
//         console.log(temp)
//     }
// }


// //TASK 4
// function isMin (one, two) {
//     if (one < two) {
//         return one
//     } else  if (one > two) {
//         return two
//     } else {
//         return "Error. Pls check your entries"
//     }
// }

// console.log(isMin(12, "a"))

// //TASK 5
//  function isEven (num) {
//     if (num % 2 == 0) {
//         return true
//     } else if (num % 2 > 0) {
//         return false
//     } else if (num % 2 < 0) {
//         return "Number is negative"
//     } else {
//         return "Error. Pls check your entries"
//     }
//  }

// console.log("\n", isEven(50), "\n", isEven(75), "\n", isEven(-1), "\n", isEven("not a number"))


// // TASK 6
// function countAs(char, text) {
//     let count = 0
//     for (i = 0; i < text.length; i++) {
//         if (text.charAt(i) == char.toLowerCase() || text.charAt(i) == char.toUpperCase()) {
//             count += 1
//         }
//     }
//     return count
// }

// console.log(countAs("l", "loremsadsadsadad"))


// // TASK 7 (not finished with handling of negative steps - because i am lazy)
// function range(first, second, step) {
//     if (step == undefined) {
//         step = 1
//     }
//     let range = []
//     for (i = first; i <= second; i += step) {
//         range.push(i)
//     }
//     return range
// }

// console.log(range(5, 2, -1))