let arr1 = [23, 23, 5, 6, 7, 8, 9, 9, 45, 45];


function findDuplicates(arr) {
    const dup = []
    for (let i = 0; i < arr.length -1; i++) {
        for (let j= i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                dup.push(arr[i])
            }
        }
    }
    return dup
}

console.log(findDuplicates(arr1))

