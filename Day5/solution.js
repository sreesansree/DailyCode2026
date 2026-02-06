const nums = [2, 7, 11, 15];
const target = 9;

function twoSum(arr, tar) {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
    
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === tar && i !== j) {
        // return arr[i], arr[j];
      }
    }
  }
}

console.log(twoSum(nums,target))