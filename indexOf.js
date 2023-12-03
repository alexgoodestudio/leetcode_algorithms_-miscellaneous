const arr = [1, 4, 6, 9];

function indexOf(value, elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i] === value) {
            return i
        }
    }
    return -1;
}

console.log(indexOf(6,arr))

//ver2

function ind(value, elements) {
    const index1 = elements.indexOf(value);
    return index1
}
console.log(ind(9, arr))

/*
Time Complexity
The time complexity is O(n). Think of it like reading a book: the more pages (or array elements) you have, the longer it will take to find a specific word (or value).

Space Complexity
The space complexity is O(1). The function uses a constant amount of extra memory to store variables like index, regardless of the size of the input array. This is like using a bookmark while reading. No matter how big the book is (array size), you only need one bookmark (constant extra space).

The analogy aims to illustrate that the time you spend is proportional to the size of the task (array length), while the resources you use (extra memory) remain fixed, no matter the size of the task.

*/
