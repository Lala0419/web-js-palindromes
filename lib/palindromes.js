const isPalindrome = function(s) {
  s = s.split(" ").join("");
  let stringReverse = s.split("").reverse().join("");
  console.log("stringReverse", stringReverse);
  return s === stringReverse;
};

module.exports = isPalindrome;

console.log(isPalindrome("a man a plan a canal panama"));

//test
