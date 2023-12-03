var strStr = function(haystack, needle) {
    // If needle is an empty string, return 0
    if (needle.length === 0) return 0;

    // Loop through the haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        // Check if the substring of haystack starting at i matches needle
        if (haystack.substring(i, i + needle.length) === needle) {
            return i; // Return the starting index
        }
    }

    // If needle is not found in haystack, return -1
    return -1;
};

const haystack1 = "encyclopedia"
const needle1 ="clo"

console.log(strStr(haystack1,needle1))
