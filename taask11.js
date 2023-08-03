function missingNum(arr) {
    // Calculate the sum of numbers from 1 to n using the formula (n * (n + 1)) / 2
    const n = arr.length + 1;
    const sumOfN = (n * (n + 1)) / 2;
    
    // Calculate the sum of the elements in the array
    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);
    
    // The missing number is the difference between the sum of numbers from 1 to n and the sum of the array elements
    return sumOfN - sumOfArr;
  }
  
  // Test cases
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); 
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]));
  