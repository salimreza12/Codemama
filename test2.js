
//1. Game of Swap

/*

1. Game of Swap


Problem Statement
Write a program that swaps the values of two variables.

Input
The input consists of two integers.

Output
Output consists of two integers.

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example:
Enter two numbers

Input:
10 20
Output:
Before swapping: num1 = 10, num2 = 20
After swapping: num1 = 20, num2 = 10
*/
//solution
/**
 function swapVariables(a, b) {
    console.log("Before swapping:" ,"num1 =", a, "num2 =", b);
   
  
    let temp = a;
    a = b;
    b = temp;
  
    console.log("After swapping:" ,"num1 =", a, "num2 =", b);

  }
  
  // Example usage:
  let x = 5;
  let y = 10;
  swapVariables(x, y);
 */


//   other solution without using function
/*
let a = 5;
let b = 10;

console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

let temp = a;
a = b;
b = temp;

console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);
 */

//2.Positive Negative zero
/*

2.Positive Negative zero


Problem Statement
Write a program that checks if a number entered by the user is positive, negative, or zero.

Input
The input consists of a integer.

Output
Output the type of number.

Constraints
-2 31 ≤ |S| ≤ 231 - 1
Example-1:
Enter a number

Input:
5
Output:
5 is a positive number.
Example-2:
Enter a number

Input:
-3 */

// solution

/*
let number = prompt("Enter a number:"); // Prompts the user to enter a number

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else {
  console.log("The number is zero");
}
 */
// using function
/**
 * let number = prompt("Enter a number:"); // Prompts the user to enter a number
function checkNumber(number) {
    if (number > 0) {
      return "Positive";
    } else if (number < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
 */
//3.Two Point Distance

/**
 *
  
Problem Statement
Write a program to calculate distance between two points.

Input
The input consists of four double numbers. the first two numbers indicate the co-ordinate of first point and the second two numbers indicate the co-ordinates of second point.

Output
Output is the distance of two points.

Constraints
The program should print the number with exactly two decimal points.
Example:
Enter the co-ordinates of two points.

Input:
0 0
2 2
Output:
Distance: 2.83
 */

//solution

/**
 * 
 * function calculateDistance(x1, y1, x2, y2) {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let distance = Math.sqrt(deltaX * 2 + deltaY * 2);
    return distance;
  }
  
  // Example usage:
  let x1 = 0;
  let y1 = 0;
  let x2 = 2;
  let y2 = 2;
  
  let result = calculateDistance(x1, y1, x2, y2);
  console.log("The distance between the points is:", result.toFixed(2));
 
 */
//4.Leap Year Problem

//solution
/**
 let year = parseInt(prompt("Enter a year:"));

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
 */

