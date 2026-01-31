/**
 * Day 02 – Check if a Number is Even or Odd
 *
 * Problem:
 * Given an integer, determine whether it is even or odd.
 *
 * Approach:
 * - Use the modulo operator (%) to check divisibility by 2
 * - If remainder is 0 → Even
 * - Else → Odd
 *
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 */


function checkNumberIsevenOrOdd(n){
    if(n%2 === 0 ){
        return 'Even'
    }else{
        return "Odd"
    }
}
let num = 4
console.log(checkNumberIsevenOrOdd(num))