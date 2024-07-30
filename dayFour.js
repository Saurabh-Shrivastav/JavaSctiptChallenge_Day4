//------------------Activity 1 - For Loop---------------------
// Task 1: Write a program to print numbers from 1 to 10using a foro loop.
for (let number = 1; number <= 10; number++) {
    // console.log(number);    
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
for (let table = 1; table <= 10; table++) {
    // console.log(table * 5);    
}


// --------------------Activity 2 -While loop------------------
// Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let number = 1;

while (number <= 10) {
    sum = sum + number
    number++
}
// console.log(sum);

// Write a program to print numbers from 10 to 1 using a while loop.
let reverseNum = 10;

while (reverseNum > 0) {
    // console.log(reverseNum);
    reverseNum = reverseNum - 1
}


// ------------------------------Activity 3 - Do...While Loop-------------------------
// Task 5: Write a program to print numbers from 1 to 5 using a do.. while loop.
// let nmber = 0
// let result = ""

// do {
//     nmber = nmber + 1
//     result = result + nmber
// } while (nmber < 5);

// console.log(result);

// Task 6: Write a program to calculate the factorial of a number using a do while loop.
let number1 = 4;
let factorial = 1;
let i = 1;

do {
    factorial *= i;
    // console.log(factorial)
    i++;
} while (i <= number1);

// console.log(`Final Factorial is -: ${factorial}`)


// ------------------------Nested Loop--------------------
// Write a program to print a pattern using nested for loop.
//  let nested = "*";
 for (let index = 1; index <= 5; index++) {
    console.log(index);
    
 }