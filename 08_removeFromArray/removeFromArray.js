const removeFromArray = function(array, key) {
    for (let i = 0; i < array.length; ++i) {
        if (array[i] == key) {
            array.splice(i, 1);
            --i;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
