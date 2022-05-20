const leapYears = function(year) {

    if (!(year % 100))          // Check if year is divisible by 100 (Not leap unless divisible by 400)
        return !(year % 400);   // Check if year is divisible by 400
    return !(year % 4)          // Check if year is divisible by 4 

};

// Do not edit below this line
module.exports = leapYears;
