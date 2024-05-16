class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottpm = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottpm = newNode;
    } else {
      let holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottpm) {
      this.bottpm = null;
    }
    // const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
}

const myStack = new Stack();
console.log("STACK", myStack.push("Google"));
console.log("STACK", myStack.push("Udemy"));
console.log("STACK", myStack.push("Discord"));
console.log("STACK", myStack.pop());
console.log("STACK", myStack.pop());
console.log("STACK", myStack.pop());

