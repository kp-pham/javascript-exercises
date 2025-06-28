// const LOWERCASED_A_ENCODING = 97;
// const LOWERCASED_Z_ENCODING = 122;
// const DIGIT_ONE_ENCODING = 49;
// const DIGIT_NINE_ENCODING = 57;

// const palindromes = function (string) {
//     const LOWERCASED_STRING = string.toLowerCase();

//     let left = 0;
//     let right = string.length - 1;

//     while (left < right) {
//         let leftCharCode = getCharCode(LOWERCASED_STRING, left);
//         let rightCharCode = getCharCode(LOWERCASED_STRING, right);

//         if (!isAlphaNumeric(leftCharCode) || !isAlphaNumeric(rightCharCode)) {
//             if (!isAlphaNumeric(leftCharCode))
//                 ++left;

//             if (!isAlphaNumeric(rightCharCode))
//                 --right;
//         }
//         else if (LOWERCASED_STRING[left] != LOWERCASED_STRING[right]) {
//             return false;
//         }
//         else {
//             ++left;
//             --right;
//         }
//     }

//     return true;
// };

// function getCharCode(string, index) {
//     return string.charCodeAt(index);
// }

// function isAlphaNumeric(charCode) {
//     return LOWERCASED_A_ENCODING <= charCode && charCode <= LOWERCASED_Z_ENCODING ||
//         DIGIT_ONE_ENCODING <= charCode && charCode <= DIGIT_NINE_ENCODING;
// }

const palindromes = function(string) {
    const ALPHANUMERICAL = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleaned = string
        .toLowerCase()
        .split("")
        .filter(character => ALPHANUMERICAL.includes(character))
        .join("");

    const reversed = cleaned.split("").reverse().join("");
    return reversed === cleaned;
}

// Do not edit below this line
module.exports = palindromes;
