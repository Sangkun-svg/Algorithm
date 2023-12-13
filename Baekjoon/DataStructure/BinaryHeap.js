class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element < parent) break;
      if (idx === 0) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    // [12, 41, 39, 33, 18, 27];
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (rightChild > element && swap === null) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    return this.values;
  }

  extrackMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.element > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}

const heap = new MaxBinaryHeap();
heap.insert(55);
heap.extrackMax();
console.log(heap);
