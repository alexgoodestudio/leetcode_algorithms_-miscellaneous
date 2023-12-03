/**
with sort method */

function minimumAndMaximumSort(numbers) {
    let result = [];
    
    if (numbers.length === 0) {
      return [];
    }
  
    // Sorting the numbers in ascending order using a compare function
    numbers.sort((a, b) => a - b);
    
    // Getting the first and last elements of the sorted array
    result.push(numbers[0], numbers[numbers.length - 1]);
  
    console.log(result);
    return result;
  }
  
  
  /**
  without sort method
  */
  function minimumAndMaximumIterate(numbers) {
    let result = [];
    
    if (numbers.length === 0) {
      return [];
    }
  
    let min = numbers[0];
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {

      if (numbers[i] < min) {
        min = numbers[i];
      }
      if (numbers[i] > max) {
        max = numbers[i];
        
      }
    }
  
    result.push(min, max);
    console.log(result);
    return result;
  }

  console.log(minimumAndMaximumIterate([1,12,34,56,678,34,12,34,56,89]))