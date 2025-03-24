
// ["Ananas", "Birne", "Mango"].forEach((value, index) => {
//     console.log(value)
// });

// ["Ananas", "Birne", "Mango"].map((value, index) => {
//     return value.toUpperCase()
// });

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let notEvenNumbers  = numbers.filter(function(number) {
    return number % 2 !== 0;
});
console.log(notEvenNumbers)
//1st variant
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers)
// 2nd variant
let evenNums = []
for (let i = 0; i<numbers.length; i++ ) {
    
    if (numbers[i] % 2 === 0) {
        evenNums.push(numbers[i]);
    }  
}
console.log(evenNums)


