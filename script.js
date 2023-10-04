
// Implement a function to find the first non-repeating character in a string.
// function firstNonRepeatingCharacter(str) {
//   // Implementation here
//   }
//   // Test cases
//   console.log(firstNonRepeatingCharacter(&quot;programming&quot;)); // &quot;r&quot;
//   console.log(firstNonRepeatingCharacter(&quot;aabbcc&quot;)); // null
//   console.log(firstNonRepeatingCharacter(&quot;abcdef&quot;)); // &quot;a&quot;

function firstNonRepeatingCharacter(str) {
  // Create an object to store the character count
  const charCount = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  return null;
}
console.log(firstNonRepeatingCharacter("programming"));
console.log(firstNonRepeatingCharacter("aabbcc")); 
console.log(firstNonRepeatingCharacter("abcdef")); 

//2. Create a function to find the median of two sorted arrays.
// function findMedianSortedArrays(nums1, nums2) {
//   // Implementation here
//   }
//   // Test cases
//   console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
//   console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5

// below code is copied from website after i cleared about that 

function findMedianSortedArrays(num1, num2) {
  const mergedArray = mergeSortedArrays(num1, num2);
  const len = mergedArray.length;
  if (len % 2 === 0) {
    const mid = len / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2.0;
  } else {
    const mid = Math.floor(len / 2);
    return mergedArray[mid];
  }
}
function mergeSortedArrays(num1, num2) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < num1.length && j < num2.length) {
    if (num1[i] < num2[j]) {
      merged.push(num1[i]);
      i++;
    } else {
      merged.push(num2[j]);
      j++;
    }
  }
  while (i < num1.length) {
    merged.push(num1[i]);
    i++;
  }

  while (j < num2.length) {
    merged.push(num2[j]);
    j++;
  }

  return merged;
}
console.log(findMedianSortedArrays([1, 3], [2])); // 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5


// Implement a function to reverse words in a sentence without reversing the characters within
// each word.
// function reverseWords(sentence) {
// // Implementation here
// }
// // Test cases
// console.log(reverseWords(&quot;Hello World&quot;)); // &quot;World Hello&quot;
// console.log(reverseWords(&quot;The quick brown fox&quot;)); // &quot;fox brown quick The&quot;

function reverseWords(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.reverse();
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
}
console.log(reverseWords("Hello World"));
console.log(reverseWords("The quick brown fox")); 


// 16. Write a function to calculate the sum of all multiples of 3 or 5 below a given number.
// function sumMultiplesOf3And5(limit) {
//   // Implementation here
//   }
//   // Test cases
//   console.log(sumMultiplesOf3And5(10)); // 23 (3 + 5 + 6 + 9)
//   console.log(sumMultiplesOf3And5(20)); // 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)

function sumMultiplesOf3And5(limit) {
  let sum = 0;

  for (let i = 1; i < limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
console.log(sumMultiplesOf3And5(10)); 
console.log(sumMultiplesOf3And5(20)); 

// Implement a function that removes duplicates from an array without using built-in functions
// or additional data structures.
// function removeDuplicates(arr) {

// // Implementation here
// }
// // Test cases
// const originalArray = [1, 2, 2, 3, 4, 4, 5];
// removeDuplicates(originalArray);
// console.log(originalArray); // [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        for (let k = j; k < len - 1; k++) {
          arr[k] = arr[k + 1];
        }
        len--;
        j--;
      }
    }
  }
}
const originalArray = [1, 2, 2, 3, 4, 4, 5];
removeDuplicates(originalArray);
console.log(originalArray);

