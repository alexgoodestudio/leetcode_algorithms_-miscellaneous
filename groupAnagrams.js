const groupAnagrams = function(strs){
    const map ={};
    for(let s of strs){
        const key = s.split('').sort().join('');
        // console.log(key,"key")
        if(map[key]){
            map[key].push(s)
        }else{
            map[key] = [s]
        }
    }
    console.log(map,"MAP")
    return Object.values(map)
}

const strs1 = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs1))