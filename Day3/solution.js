/**
 * Day 03 – Find the Largest of Two Numbers
 *
 * Problem:
 * Given two numbers, determine which one is larger.
 * If both numbers are equal, indicate that they are the same.
 *
 * Approach:
 * - Compare the two numbers using conditional statements
 * - If a > b → return a
 * - If b > a → return b
 * - Else → return "Both numbers are equal"
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */

function findLargestOfTwoNumbers(num1,num2){
    if(num1 > num2){
        return "Number one is greater than Number two"
    }else if(num2 > num1){
        return "Number two is greater than Number One"
    }else{
        return "Both Numbers are equal"
    }
}
const n1 = -2
const n2 = -5
console.log(findLargestOfTwoNumbers(n1,n2))