/**
 * @param {number} x
 * @return {boolean}
 */

const number = 10;
var isPalindrome = function (s) {
  let numerCovertedToString = number.toString();
  console.log("isPalindrome1", numerCovertedToString);
  console.log("isPalindrome2", typeof numerCovertedToString);
  console.log("isPalindrome3", numerCovertedToString.length - 1);
  let newArray = [];
   console.log("numerCovertedToString", numerCovertedToString);
   let str = "Hello";

   for (let i = numerCovertedToString.length - 1; i >= 0; i--) {
     console.log(numerCovertedToString[i]);
     newArray.push(numerCovertedToString[i]);
    
   }
  // for (let i = numerCovertedToString.length - 1; i >= 0; i--) {
  //   console.log("items", i);
  //   // newArray.push(numerCovertedToString[i]);

  //   // console.log("new array", newArray);
  //   // console.log("old array", numerCovertedToString);
  //   if (newArray === numerCovertedToString) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // return newArray;
  return newArray;
};

console.log("isPalindrome", isPalindrome(number));
