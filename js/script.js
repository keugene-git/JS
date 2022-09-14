document.write("<h2>Day 4</h2>")
document.write("Lost 2 days like LS")

// let values = {
//     name: "Mars",
//     age: '29'
// }
// let list = ["mars", 42, 56, "gyro"]

// console.log(`My hero is ${list[3]} and his level is ${values.age}`)
// console.log(typeof list[0])
// console.log(list[1]+list[3])

// let m = 5
// let h = m++
// let n = h

// console.log(m, h, n)

// let array = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ]

// console.log(array[0][0])


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// let answer = getRandomInt(2)

// if (answer == 0){
//     console.log("Denya LS")
// }
// else {
//     console.log("Denya ne LS")
// }

// const num = 6
// if (num > 5) {
//     console.log("more")
// }
// else if (num === 5) {
//     console.log("equal and Int")
// }
// else if (num < 5) {
//     console.log("less")
// }
// else {
//     console.log ("not an Int")
// }

// switch(num) {
//     case 6 :
//         console.log("more")
//         break
//     case 5 :
//         console.log("equal and Int")
//         break
//     case 4 :
//         console.log("less")
//         break
//     default :
//         console.log("not an Int")
//         break
// }

//MULTIPLICATION TABLE
/*
let table = {}
let temp = {}
for ( let i = 1; i <= 10; i++){
    for (let j = 1; j <= 10; j++){
        temp[j] = i*j
    }
    table[i] = temp
    temp = {}
}
console.log(table)
*/

// let obj = {
//     size: 14,
//     font: "Roboto",
//     color: "000"
// }
// let array = []
// for (prop in obj) {
//     array.push(prop)
// }
// console.log(array.length)

// if (array.length == 4) {
//     console.log("All the props is added")
// }
// else {
//     console.log("My shoto proebali")
// }


// const text = "Hello, my, dear, friend!"
// let updText = ""
// for (ch of text) {
//     if (ch != "," && ch != "!"){
//         updText += ch
//     }
// }
// console.log(updText)


const array = [123, 32, 41, 531, 36]
let newArray = []
for (let elem of array) {
    elem = elem.toString()
    let temp = []
    for (ch of elem) {
        if (ch != "2") {
            temp.push(ch)
        }
    }
    if (temp.length == elem.length) {
        newArray.push(parseInt(elem))
    }
}
console.log(newArray)
console.log(typeof newArray[0])


/* QUESTIONS:
- what the hell are i++ and ++i ????
- 

*/