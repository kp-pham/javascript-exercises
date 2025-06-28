const fibonacci = function(n) {    
    let a = 0;
    let b = 1;

    for (let i = 0; i > n; ++i) {
        [b, a] = [b += b + a, b];
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
