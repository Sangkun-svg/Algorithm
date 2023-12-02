class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    if (value === current.value) return undefined;
    while (true) {
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let currentRoot = this.root;
    let isFound = false;
    while (!isFound && currentRoot) {
      if (currentRoot.value > value) {
        currentRoot = currentRoot.left;
      }
      if (currentRoot.value < value) {
        currentRoot = currentRoot.right;
      }
      if (currentRoot.value === value) {
        isFound = true;
      }
    }
    return isFound ? currentRoot : undefined;
  }
}
