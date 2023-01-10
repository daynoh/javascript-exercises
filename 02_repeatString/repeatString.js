const repeatString = function(name, times) {
    let n = 0;
    let ans = '';
    while (n < times)
    {
        ans += name;
        n += 1;
    }
    return ans
};

// Do not edit below this line
module.exports = repeatString;
