var nums = [2, 7, 11, 15]; //[2, 7, 11, 15]; 9
var twoSum = function (nums, target) {
  var indices = [];
  for (i = 0; i <= nums.length - 1; i++) {
    for (j = 1; j <= nums.length - 1; j++) {
      console.log("Two", nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        indices.push(i);
        break;
      }
    }
  }

  return indices;
};

var twoSum2 = function (nums, target) {
  var map = {};
  let newTarget = 0;
  for (i = 0; i <= nums.length - 1; i++) {
    //We need newTarget to create target
    newTarget = target - nums[i]; //return remainder to give target

    console.log("newTarget", newTarget);

    //  We need newtarget to create target
    if (newTarget in map) {
      return [map[newTarget], i];
    }
    map[nums[i]] = i;
  }

  return map;
};

// console.log("Two sum", twoSum(nums, 9));
console.log("Two sum", twoSum2(nums, 9));
