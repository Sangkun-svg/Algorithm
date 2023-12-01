class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldLast = this.last; // A-> B -> C(oldLast) - D
      this.last = newNode; // A-> B -> C(!oldLast) - D(oldLast)
      oldLast.next = this.last; // A-> B -> C(!oldLast) -> D(oldLast)
    }
    this.size += 1;
    return this.size;
  }
  dequeue() {
    if (this.size === 0) return null;
    const removedNode = this.first;
    this.first = removedNode.next; // N(!head) -> A(head) -> B -> C
    removedNode.next = null; // N(null) - A(head) -> B -> C
    this.size -= 1;
    return removedNode;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q);
// q.enqueue(3);
// q.enqueue(4);
// console.log(q);
