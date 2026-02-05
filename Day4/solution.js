/* 1. Compare the three numbers using conditional statements.
2. If `a` is greater than or equal to both `b` and `c`, return `a`.
3. If `b` is greater than or equal to both `a` and `c`, return `b`.
4. Otherwise, return `c`.
5. If all three numbers are equal, return `"All numbers are equal"`.

---

## ⏱ Complexity
- **Time Complexity:** O(1)  
- **Space Complexity:** O(1) 
*/

/* **Input:**
- a = 5
- b = 10
- c = 7
**Output:**
    10
 */

function CompareThreeNumbers(num1, num2, num3) {
  //   if (num1 >= num2 && num1 >= num3) {
  //     return "Number 1 is greater";
  //   } else if (num2 >= num1 && num2 >= num3) {
  //     return "Number2 is greater";
  //   } else if (num3 >= num1 && num3 >= num2) {
  //     return "Number 3 is greater";
  //   } else {
  //     return "All numbers are equal";
  //   }
  if (num1 === num2 && num1 === num3) {
    return "All numbers are equal";
  }
  let max = Math.max(num1, num2, num3);

  if (max === num1 && max === num2) {
    return "Number 1 and Number 2 is greatest";
  } else if (max === num1 && max === num3) {
    return "Number 1 and Number 3 is greatest";
  } else if (max === num2 && max === num3) {
    return "Number 2 and Number 3 is Greatest";
  } else if (max === num1) {
    return "Number 1 greatest";
  } else if (max === num2) {
    return "Number 2 greatest";
  } else {
    return "Number 3 is greatest";
  }
}
let n1 = -1;
let n2 = 0;
let n3 = 0;

console.log(CompareThreeNumbers(n1, n2, n3));
