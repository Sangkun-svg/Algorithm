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

  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFS_PreOrder() {
    const data = [];
    function helper(node) {
      data.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return data;
  }
  DFS_PostOrder() {
    const data = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      data.push(node.value);
    }
    helper(this.root);
    return data;
  }
  DFS_InOrder() {
    const data = [];
    function helper(node) {
      if (node.left) helper(node.left);
      data.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return data;
  }
}
// 3 6 8 10 15 20

//        10
//     6     15
//  3    8      20

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(tree.DFS_InOrder());
// console.log(tree.DFS_PostOrder());
