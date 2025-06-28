const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        let leftCharCode = getCharCode(string, left);
        let rightCharCode = getCharCode(string, right);

        if (!isAlphaNumeric(leftCharCode) || !isAlphaNumeric(rightCharCode)) {
            if (!isAlphaNumeric(leftCharCode))
                ++left;

            if (!isAlphaNumeric(rightCharCode))
                --right;
        }
        else if (string[left] != string[right]) 
            return false;
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
    return 'a' <= charCode && charCode <= 'z';
}

// Do not edit below this line
module.exports = palindromes;
