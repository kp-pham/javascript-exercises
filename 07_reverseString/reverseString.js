const reverseString = function(string) {
    // return string.split("").reverse().join();
    return [...string].reverse().join(""); 
};

// Do not edit below this line
module.exports = reverseString;
