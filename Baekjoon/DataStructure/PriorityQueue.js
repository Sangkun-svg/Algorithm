class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  //ExtractMin version
  enqueue(value, priority) {
    let node = new Node(value, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (parentElement.priority <= element.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[index];
    while (true) {
      let leftChildIdx = index * 2 + 1;
      let rightChildIdx = index * 2 + 2;
      let leftChild, rightChild;
      let tempIdx = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          tempIdx = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (tempIdx === null && rightChild.priority < element.priority) ||
          (tempIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          tempIdx = rightChildIdx;
        }
      }
      if (tempIdx === null) break;
      this.values[index] = this.values[tempIdx];
      this.values[tempIdx] = element;
      index = tempIdx;
    }
  }
}

const ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("Broken leg", 3);
ER.enqueue("flu", 4);
ER.enqueue("gunshot", 1);
// console.log(ER);
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
