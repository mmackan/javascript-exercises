const repeatString = function(string, n) {
    if (n === 0)
        return '';
    else if (n < 0)
        return 'ERROR'
    return string + repeatString(string, n - 1);
};

// Do not edit below this line
module.exports = repeatString;
