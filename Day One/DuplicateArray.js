const arr = [12, 23, 121, 342, 121];

function findFirstDup(arr) {
  const seen = new Set();

  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }

  return null;
}

console.log(findFirstDup(arr)); // 121
