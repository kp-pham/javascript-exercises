const LOWERCASE_A_ENCODING = 97;
const LOWERCASE_Z_ENCODING = 122;

const palindromes = function (string) {
    const LOWERCASED_STRING = string.toLowerCase();

    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        let leftCharCode = getCharCode(LOWERCASED_STRING, left);
        let rightCharCode = getCharCode(LOWERCASED_STRING, right);

        if (!isAlphaNumeric(leftCharCode) || !isAlphaNumeric(rightCharCode)) {
            if (!isAlphaNumeric(leftCharCode))
                ++left;

            if (!isAlphaNumeric(rightCharCode))
                --right;
        }
        else if (LOWERCASED_STRING[left] != LOWERCASED_STRING[right]) {
            return false;
        }
        else {
            ++left;
            --right;
        }
    }

    return true;
};

function getCharCode(string, index) {
    return string.charCodeAt(index);
}

function isAlphaNumeric(charCode) {
    return LOWERCASE_A_ENCODING <= charCode && charCode <= LOWERCASE_Z_ENCODING;
}

// Do not edit below this line
module.exports = palindromes;
