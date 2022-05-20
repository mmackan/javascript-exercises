const removeFromArray = function(array, ...nums) {
    return array.filter(elem => !(nums.includes(elem))) // Return a filtered list that does not include any elem that exist in nums
};

// Do not edit below this line
module.exports = removeFromArray;
