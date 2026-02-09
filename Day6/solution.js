
function longestUniqueSubstring(s) {
  let left = 0;
  let maxLength = 0;
  const charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    // If duplicate character found, remove until it's unique
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// 🔍 Test Cases
console.log(longestUniqueSubstring("abcabcbb")); // Expected Output: 3
console.log(longestUniqueSubstring("bbbbb"));    // Expected Output: 1
console.log(longestUniqueSubstring("pwwkew"));    // Expected Output: 3
console.log(longestUniqueSubstring(""));          // Expected Output: 0