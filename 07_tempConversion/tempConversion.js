const ftoc = function(k) {
let c = 0;
c = (k - 32) * (5 / 9);
cRounded = Math.round(c * 10) / 10;
return cRounded;
};

const ctof = function(c) {
  let k = 0;
  k = c * (9 / 5) + 32;
  kRounded = Math.round(k * 10) / 10;
  return kRounded;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
