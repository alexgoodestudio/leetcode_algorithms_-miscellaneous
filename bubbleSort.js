function bubbleSort(compare, elements) {
    if (Array.isArray(elements)) {
      let inOrder;
  
      do {
        inOrder = true; // Assume that the array is in order
  
        for (
          let index = 0, length = elements.length - 1;
          index < length;
          index++
        ) {
          const leftElement = elements[index];
          const rightElement = elements[index + 1];
  
          if (compare(leftElement, rightElement) > 0) {
            elements[index] = rightElement;
            elements[index + 1] = leftElement;
            inOrder = false; // The array wasn't in order, so swap elements and then check it again.
          }
        }
      } while (inOrder === false);
    }
    return elements;
  }


const elements = [4685, 471, 880, 808];

function compare(left, right) {
  console.log("compare", left, "to", right);
  return left - right;
}

console.log(bubbleSort(compare, elements));