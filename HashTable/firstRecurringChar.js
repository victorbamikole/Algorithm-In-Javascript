const array = [4, 5, 1, 2, 3, 8, 1, 2, 9];

const firstRecurring = (arrayType) => {
  for (let i = 0; i < arrayType.length; i++) {
    for (let j = i + 1; j < arrayType.length; j++) {
      if (arrayType[i] === arrayType[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};

const firstRecurring2 = (input) => {
  let map = {};

  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
    // return map;
  }

  return undefined;
};

console.log("Result", firstRecurring(array));
console.log("Result2", firstRecurring2(array));
