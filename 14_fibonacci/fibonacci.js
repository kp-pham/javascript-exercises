const fibonacci = function(n) {    
    // let count
    // if (typeof countArg !== 'number') {
    //     count = parseInt(countArg)
    // } else {
    //     count = countArg
    // }

    // if (count < 0) return "OOPS";
    // if (count == 0) return 0;
    
    if (n < 0) 
        return "OOPS";

    else if 
        (n == 0) return 0;

    else if
        (n == 1) return 1;

    let a = 1;
    let b = 1;

    for (let i = 2; i < n; ++i) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;