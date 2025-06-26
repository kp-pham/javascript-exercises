const { useReducer } = require("react");

const sumAll = function(start, end) {
    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    return range.reduce((sum, value) => sum + value, 0);
};

// Do not edit below this line
module.exports = sumAll;
