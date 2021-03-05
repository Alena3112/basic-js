const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;

  for (let a of matrix) {
    for (let b of a) {
      if (b == "^^") cats++;
    }
  }

  return cats;

};
