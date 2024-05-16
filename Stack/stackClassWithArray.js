class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
console.log("STACK", myStack.push("Google"));
console.log("STACK", myStack.push("Udemy"));
console.log("STACK", myStack.push("Discord"));
console.log("STACK", myStack.peek());
console.log("STACK", myStack.pop());
