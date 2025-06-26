// const { useReducer } = require("react");

const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number') return "ERROR";
    if (Math.floor(start) != start || Math.floor(end) != end) return "ERROR";
    if (start < 0 || end < 0) return "ERROR";

    if (start > end) [start, end] = [end, start];

    const range = Array.from({ length: end - start + 1 }, (_, i) => start + i);
    return range.reduce((sum, value) => sum + value, 0);
};

// Do not edit below this line
module.exports = sumAll;
