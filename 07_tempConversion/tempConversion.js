const ftoc = function(far) {
  return Math.round(((far - 32) / 1.8) * 10) / 10;
};

const ctof = function(cel) {
  return Math.round((1.8*cel + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
