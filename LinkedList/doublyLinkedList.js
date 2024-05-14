class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(nextValue) {
    const newNode = {
      value: nextValue,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(firstValue) {
    const newNode = {
      value: firstValue,
      next: null,
      prev: null,
    };

    newNode.next = this.head;

    this.head = newNode;

    this.length++;
    return this;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.transverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  transverseToIndex(index) {
    //CHECK PARAMS
    let counter = 0;
    let currentNode = this.head;
    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    console.log(currentNode);
    return currentNode;
  }

  remove(index) {
    //check params
    const leader = this.transverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

const myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(3, 22));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.reverse());
console.log(myLinkedList.printList());
