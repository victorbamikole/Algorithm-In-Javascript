var nums = [3, 2, 4]; //[2, 7, 11, 15]; 9
var twoSum = function (nums, target) {
  var indices = [];
  for (i = 0; i <= nums.length-1; i++) {
    for (j = 1; j <= nums.length-1; j++) {
      console.log("Two", nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        indices.push(i);
        break;
      }
    }
  }

  return indices;
};

console.log("Two sum", twoSum(nums, 6));
