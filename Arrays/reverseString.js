function reverse(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backwards = [];
  const totalItems = str.length - 1;
  console.log(totalItems);
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

function reverse2(str) {
  //check for valid input
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

console.log("Reverse1", reverse("Timbits Hi"));
console.log("Reverse1", reverse2("Timbits Hi"));
console.log("Reverse1", reverse3("Timbits Hi"));
// reverse("Timbits Hi");
// reverse3("Timbits Hi");
