class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (parentElement > element) break;
      if (idx === 0) break;
      this.values[parentIdx] = element;
      this.values[idx] = parentElement;
      idx = parentIdx;
    }
  }

  insert(value) {
    if (!value) return undefined;
    this.values.push(value);
    this.bubbleUp();
    return this.values;
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

      if (leftChildIdx > length) {
        // length 벗어났는지 확인
        // 2*idx + 1은 존재하지 않는경우!
        // Ex. [3] max index : 0, leftChildIdx = 1 -> RuntimeError
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          tempIdx = leftChildIdx;
        }
      }
      if (rightChildIdx > length) {
        // length 벗어났는지 확인
        // 2*idx + 1은 존재하지만, 2*idx + 2는 존재하지 않는경우!
        // Ex. [3,2] max index : 1, RightChildIdx = 2 -> RuntimeError
        rightChild = this.values[rightChildIdx];
        // 두 개의 선택지가 있다면, 숫자가 더 큰 선택지를 선택해야한다
        if (
          (tempIdx === null && rightChild > element) ||
          (tempIdx !== null && rightChild > leftChild)
        ) {
          tempIdx = rightChildIdx;
        }
        // if (rightChild > element) {
        //   tempIdx = rightChildIdx;
        // }
      }
      // element 가 속한 (하위)tree에서 더 이상 element 보다 낮은 수가 없는 경우
      if (tempIdx === null) break;
      // 아니라면
      this.values[index] = this.values[tempIdx];
      this.values[tempIdx] = element;
      index = tempIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}
