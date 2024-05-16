class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
     const newNode = new Node(value);
    if(this.root === null){
      return  this.root = newNode
    }



  }

  lookup(value) {}
}

const tree = new BinarySerachTree();
